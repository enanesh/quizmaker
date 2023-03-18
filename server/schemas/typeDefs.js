const typeDefs = `#graphql
  type Query {
  "Find your Users"
    getQuizById: Quiz!
  "Get quiz array for homepage grid"
    getQuestionsByQuizId: Quiz!
  "Get all quizes"
    getAllQuizzes: [Quiz]
  "Get quizes by Creator"
    getAllQuizzesByOwner: [Quiz]!
  "Get Quizes you've Taken"
    getAllQuizzesByStudent: [Quiz]!
  "Get Answers by Quiz ID"
    getAnswersByQuizId: [Answers!]!
  "Get Profile Information"
    getMyProfile: User!
  "Search for User by username or email"
    getUserByUserNameOrEmail: User
  }

  type Mutation {
    "Add a User"
    addUser: User!
    "Login"
    login: User
    "Create a Quiz!"
    createQuiz: Quiz;
  "Update a Quiz"
  updateQuiz: Quiz!
  "Create a Question"
    createQuestion: Question!
  "Update a Question"
    updateQuestion: Question!
  "Save you Answer"
    saveAnswer: Answer!
  "Delete a Quiz"
    deleteQuiz: Quiz!
  "Delete a Question"
    deleteQuestion: Question!
  }

  "Users that can take or make quizes"
  type User {
    "Unique Identifier"
    _id: ID
    "The name a user shows the world"
    username: String!
    "First Name"
    firstname: String!
    "Last Name"
    lastname: String!
    "Email Address"
    email: String!
    "Hashed Password"
    password: String!
    "Quizzes Completed"
    completedquizes: [CompletedQuizes]
  }

  "Oh look! A Quiz!!"
  type Quiz {
    "Quiz Identifier"
    quizID: ID!
    "When was this made?"
    createdAt: String!
    "Quiz Creator"
    owner: String!
    "Questions"
    questions: Question!
    "How did they do??"
    results: [Results]
  }

  type Question {
    questiontext: String!
    answers: [String!]!
    correctAnswers: [String!]!
  }

  type CompletedQuizes {
    quiz: [Quiz]

  }

  "Lets see how you did."
  type Results {
    _id: ID!
    "Who took the quiz"
    quizTaker: User!
    "When did they turn in the quiz?"
    submittedTime: String!
    "The answers they submitted"
    submittedAnswers: [String!]!
    "Percent correct"
    score: Float
  }


`;

module.exports = typeDefs;
