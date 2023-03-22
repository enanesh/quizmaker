const { AuthenticationError } = require("apollo-server-express");
const { Answer, Category, Question, Quiz, QuizUser, User, PasswordReset } = require("../models");
const { signToken } = require("../utils/auth");
const { linkGenerator, theFerryman } = require("../utils");

const resolvers = {
  Query: {

     me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new GraphQLError("Not login");
        },

    users: async () => {
      return User.find();
    },


    // find quiz by ID with all data
    // PROFILE/Quiz
    // PROFILE/Take a quiz: select quiz from the list
    getQuizById: async (parent, { quizId }) => {
      const quiz = await Quiz.findOne({ _id: quizId });
      if (!quiz) {
        throw new Error("Quiz not found");
      }
      return quiz;
    },

    // find questions related to quiz by quiz ID
    // Map to display questions by quiz id
    getQuestionsByQuizId: async (parent, { quizId }) => {
      return Quiz.findOne({ _id: quizId }).populate("question");
    },

    // get all quizzes
    // DASHBOARD: Map first 6 quizes to display in feeder
    getAllQuizzes: async () => {
      return Quiz.find({});
    },

    // get all quizzes by Owner
    // PROFILE/Created by you
    getAllQuizzesByOwner: async (parent, args, context, info) => {
      console.log('Is this being called?')
      const { userId } = args;
      console.log(userId)
      const quizzes = await Quiz.find({ owner: userId }).populate("questions");

      console.log(`\n\nQuizzes:\n${JSON.stringify(quizzes)}`)
      return quizzes;
    },

    // get all quizzes
    // PROFILE/Assigned to you
    getAllQuizzesByStudent: async (parent, args, context ) => {
      const quizzes = await Quiz.find({  student: context.user._id });
      if (quizzes.length === 0) {
        throw new Error(`No quizzes assigned to student with id `);
      }
      return quizzes;
    },

    // Get answers to display
    getAnswersByQuizId: async (parent, { quizId }) => {
      const answers = await Answer.find({ quizId }).populate("questionId").populate("userId");
      return answers;
    },

    // get user data
    // PROFILE/Profile settings
    getMyProfile: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new Error("Not logged in!");
    },

    // FORGET PASSWORD page
    getUserByUserNameOrEmail: async (parent, { username, email }) => {
      const user = await User.findOne({ $or: [{ username: username }, { email: email }] });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    users: async () => {
      return User.find();
    },
    questions: async () => {
      return Question.find();
    },
    answers: async () => {
      return Answer.find();
    },
    getSingleQuiz: async (parent, { quizId }) => {
      return Quiz.findOne({ quizId: quizId }).populate("questions");
    },
    getQuizQuestions: async (parent, { questionId }) => {
      return Question.findOne({ questionId: questionId }).populate("answers");
    },
    getQuizAnswers: async (parent, { questionId }) => {
      return Answer.find({ questionId: questionId });
    },
  },
  Mutation: {
    // SIGN UP page
    addUser: async (parent, { username, firstname, lastname, email, password }) => {
      const user = await User.create({ username, firstname, lastname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // LOGIN page
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Can't find user with that email!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    // Reset Password Request
    requestPwReset: async (parent, args, contextValue, info) => {
      const resetLink = linkGenerator();
      const { email } = args;

      let requestedUser = await User.findOne({ email });
      if (requestedUser === null) {
        throw new Error("Can't find user with that email!");
      }

      const user = {
        name: `${requestedUser.firstname} ${requestedUser.lastname}`,
        email: email,
      };

      const resetPwRequest = await PasswordReset.create({
        user: requestedUser._id,
        resetLink,
      });
      if (!resetPwRequest) {
        throw new Error("Request unsuccessful");
      }

      await theFerryman(user, "password", resetLink);

      return { user: requestedUser._id };
    },
    resetPassword: async (parent, args, contextValue, info) => {
      let { resetLink, newPassword } = args;

      const resetRequest = await PasswordReset.findOne({ resetLink });
      if (resetRequest === null) {
        throw new Error("This link has expired");
      }

      const requestedUser = await User.findOne({ _id: resetRequest.user });

      requestedUser.password = newPassword;
      const updatedUser = await requestedUser.save();
      await resetRequest.remove();

      return { user: requestedUser._id };
    },
    // PROFILE/Create a quiz (1)
    createQuiz: async (parent, { quizData }, context) => {
      // Check if user is logged in
      if (!context.user) {
        throw new Error("You need to be logged in to create a quiz!");
      }

      // Create new quiz document
      const newQuiz = new Quiz({
        title: quizData.title,
        description: quizData.description,
        owner: context.user._id,
        questions: quizData.questions,
      });

      // Find category by ID and push new quiz to quizzes array
      const updatedCategory = await Category.findOneAndUpdate({ _id: quizData.category }, { $push: { quizzes: newQuiz } }, { new: true });

      // Save new quiz document
      await newQuiz.save();

      return newQuiz;
    },

    // update quiz if user is owner
    updateQuiz: async (parent, { quizId, title }, { user }) => {
      if (!user) {
        throw new Error("Unauthorized");
      }

      const quiz = await Quiz.findById(quizId);

      if (!quiz) {
        throw new Error("Quiz not found");
      }

      if (quiz.owner.toString() !== user.id) {
        throw new Error("You are not the owner of this quiz");
      }

      quiz.title = title;

      const updatedQuiz = await quiz.save();

      return updatedQuiz;
    },

    // create Question and push to Quiz
    // PROFILE/Create a quiz (question)
    createQuestion: async (parent, { quizId, questionData }, context) => {
      if (!context.user) {
        throw new Error("You must be logged in to create a question");
      }

      // Create the new question
      const newQuestion = await Question.create({
        ...questionData,
        owner: context.user._id,
      });

      // Add the new question to the quiz's `question` array
      const updatedQuiz = await Quiz.findOneAndUpdate({ _id: quizId, owner: context.user._id }, { $push: { question: newQuestion._id } }, { new: true }).populate("question");

      if (!updatedQuiz) {
        throw new Error("Quiz not found or you do not have permission to update it");
      }

      return updatedQuiz;
    },

    // Update question
    updateQuestion: async (parent, { questionId, updatedQuestionData }, context) => {
      // Check if the user is logged in and has permission to update the question.
      if (!context.user) {
        throw new Error("You must be logged in to update a question.");
      }

      const question = await Question.findById(questionId);

      if (!question) {
        throw new Error("Question not found.");
      }

      // Update the question data with the new values.
      // Object.assign is for update the properties of an existing object without having to create a new object from scratch
      Object.assign(question, updatedQuestionData);

      // Save the updated question.
      const updatedQuestion = await question.save();

      return updatedQuestion;
    },

    // Save Answer
    saveAnswer: async (parent, { answerData }, context) => {
      // Check if user is authenticated
      if (!context.user) {
        throw new Error("You need to be logged in!");
      }

      const { questionId, selectedAnswer, isCorrect } = answerData;

      // Create new answer document
      const newAnswer = new Answer({
        questionId,
        userId: context.user._id,
        selectedanswer: selectedAnswer,
        isCorrect,
      });

      // Save answer to database
      const savedAnswer = await newAnswer.save();

      // Return saved answer document
      return savedAnswer;
    },

    // DELETE Quiz
    deleteQuiz: async (parent, { quizId }, context) => {
      if (context.user) {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
          throw new Error("Quiz not found");
        }
        if (quiz.student.toString() !== context.user._id.toString()) {
          throw new Error("You are not authorized to delete this quiz");
        }
        await Quiz.findByIdAndDelete(quizId);
        return "Quiz deleted successfully";
      }
      throw new Error("You need to be logged in!");
    },

    // DEELETE Question
    deleteQuestion: async (parent, { questionId }, context) => {
      if (context.user) {
        const deletedQuestion = await Question.findOneAndDelete({
          _id: questionId,
        });
        if (!deletedQuestion) {
          throw new Error("Question not found!");
        }
        return deletedQuestion;
      }
      throw new Error("You need to be logged in!");
    },
    addQuiz: async (parent, args, context) => {
      const { quizId, title, description, owner, student } = args;
      // console.log(">>>>>>>>>>>>");
      // console.log("quizId: ", quizId);
      // console.log("title: ", title);
      console.log(`\n\nOwner:\n${owner}`)

      const newQuiz = await Quiz.create({
        quizId: quizId,
        title: title,
        description: description,
        student: student,
        owner: owner,
      });

      console.log(`\n\nQuiz:\n${JSON.stringify(newQuiz)}`)
      return newQuiz
    },
    addQuestion: async (parent, { quizId, questionId, questiontext, questiontype, correctanswer, answerOne, answerTwo, answerThree, answerFour }, context) => {
      console.log("!!!!!!!!!!!");
      console.log("quizId: ", quizId);
      console.log("questionId: ", questionId);
      console.log("questiontext: ", questiontext);
      console.log("questiontype: ", questiontype);
      console.log("correctanswer: ", correctanswer);
      console.log("answerOne: ", answerOne);
      console.log("answerTwo: ", answerTwo);
      console.log("answerThree: ", answerThree);
      console.log("answerFour: ", answerFour);

      const question = await Question.create({
        questionId: questionId,
        questiontext: questiontext,
        questiontype: questiontype,
        correctanswer: correctanswer,
        answerOne: answerOne,
        answerTwo: answerTwo,
        answerThree: answerThree,
        answerFour: answerFour,
      });
      await Quiz.findOneAndUpdate(
        { quizId: quizId },
        {
          $addToSet: { questions: question._id },
        }
      );
      return question;
    },

    addAnswer: async (parent, { questionId, selectedanswer }, context) => {
      console.log(">>>>>>>>>>>>");
      console.log("questionId: ", questionId);
      console.log("selectedanswer: ", selectedanswer);

      const answer = await Answer.create({
        questionId: questionId,
        selectedanswer: selectedanswer,
      });
      await Question.findOneAndUpdate(
        { questionId: questionId },
        {
          $addToSet: {
            answers: answer._id,
          },
        }
      );
      return answer;
    },
  },
};

module.exports = resolvers;
