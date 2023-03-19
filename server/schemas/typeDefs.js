const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = `#graphql
  scalar Date

  "Users that can take or make quizes"
  type User {
    "Unique Identifier"
    _id: ID
    "The name a user shows the world"
    username: String!
    "First Name"
    firstname: String
    "Last Name"
    lastname: String
    "Email Address"
    email: String!
    "Hashed Password"
    password: String!
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
  }

  type QuizUser {
    user: ID!
    quiz: ID!
    score: Float
    completedAt: Date
  }

  type Question {
    questiontext: String!
    answers: [String!]!
    correctAnswers: [String!]!
    questiontype: String
  }

  type Answer {
    questionId: Question!
    userId: User!
    selectedanswer: [String!]!
    isCorrect: Boolean!
  }

  type Category {
    name: String!
    description: String!
    quizes: [Quiz]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  "Quiz by ID"
    getQuizById(quizId: ID!): Quiz!
  "Get quiz array for homepage grid"
    getQuestionsByQuizId(quizId: ID!): Quiz!
  "Get all quizes"
    getAllQuizzes: [Quiz]
  "Get quizes by Creator"
    getAllQuizzesByOwner(owernerId: ID!): [Quiz]!
  "Get Quizes you've Taken"
    getAllQuizzesByStudent(studentId: ID!): [Quiz]!
  "Get Answers by Quiz ID"
    getAnswersByQuizId(quizId: ID!): [Answer!]!
  "Get Profile Information"
    getMyProfile: User!
  "Search for User by username or email"
    getUserByUserNameOrEmail(username: String!, email: String!): User!
  }

  type Mutation {
    "Add a User"
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    "Login"
    login(email: String!, password: String!): Auth
    "Create a Quiz!"
    createQuiz(title: String!, description: String!, owner: ID!): Quiz!
   "Update a Quiz"
    updateQuiz(quizId: ID! title: String!): Quiz!
   "Create a Question"
    createQuestion(quizId: ID!, questiontext: String!, answers: [String!]! correctAnswers: [String!]! questiontype: String): Question!
   "Update a Question"
    updateQuestion(questionId: ID!, questiontext: String!, answers: [String!]! correctAnswers: [String!]! questiontype: String): Question!
   "Save you Answer"
    saveAnswer(questionId: ID!, selectedAnswer: String!, isCorrect: Boolean): Answer!
    "Delete a Quiz"
    deleteQuiz(quizId: ID!): Quiz!
    "Delete a Question"
    deleteQuestion(questionId: ID!): Quiz!
  }
`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

module.exports = typeDefs;
