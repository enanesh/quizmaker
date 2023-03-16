const { AuthenticationError } = require("apollo-server-express");
const { Answer, Category, Question, Quiz, QuizUser, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // find quiz by ID with all data
    // PROFILE/Quiz
    // PROFILE/Take a quiz: select quiz from the list
    getQuizById: async (parent, { quizid }) => {
      const quiz = await Quiz.findOne({ _id: quizid });
      if (!quiz) {
        throw new Error('Quiz not found');
      }
      return quiz;
    },

    // find questions related to quiz by quiz ID
    // Map to display questions by quiz id 
    getQuestionsByQuizId: async (parent, { quizid }) => {
      return Quiz.findOne({ _id: quizid }).populate('question');
    },

    // get all quizzes
    // DASHBOARD: Map first 6 quizes to display in feeder
    getAllQuizzes: async () => {
      return Quiz.find({});
    },

    // get all quizzes by Owner
    // PROFILE/Created by you
    getAllQuizzesByOwner: async (parent, { ownerid }) => {
      const quizzes = await Quiz.find({owner: ownerid});
      if (quizzes.length === 0) {
        throw new Error(`No quizzes are owned by user ${ownerid}`);
      }
      return quizzes;
    },

    // get all quizzes
    // PROFILE/Assigned to you
    getAllQuizzesByStudent: async (parent, { studentid }) => {
      const quizzes = await Quiz.find({student: studentid});
      if (quizzes.length === 0) {
        throw new Error(`No quizzes assigned to student with id ${studentid}`);
      }
      return quizzes;
    },

    // get user data
    // PROFILE/Profile settings
    getMyProfile: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }
      throw new Error('Not logged in!');
    },

    // FORGET PASSWORD page
    getUserByUserNameOrEmail: async (parent, { username, email }) => {
      const user = await User.findOne({$or: [{ username: username }, { email: email }] });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },

  },
  Mutation: {

  },
};

module.exports = resolvers;
