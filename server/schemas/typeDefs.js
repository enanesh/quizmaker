const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = `#graphql
  type User {
    _id: ID
    username: String!
    firstname: String
    lastname: String
    email: String!
    password: String!
  }

  type Quiz {
    quizID: ID!
    createdAt: String!
    owner: String!
    questions: Question!
  }

  type QuizUser {
    user: ID!
    quiz: ID!
    score: Int
    completedAt: String
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
    getQuizById(quizId: ID!): Quiz
    getQuestionsByQuizId(quizId: ID!): Quiz
    getAllQuizzes: [Quiz]
    getAllQuizzesByOwner(owernerId: ID!): [Quiz]!
    getAllQuizzesByStudent(studentId: ID!): [Quiz]!
    getAnswersByQuizId(quizId: ID!): [Answer!]!
    getMyProfile: User!
    getUserByUserNameOrEmail(username: String, email: String): User
  }

  type Mutation {
    addUser(username: String!, firstname: String, lastname: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createQuiz(title: String!, createdAt: String!, owner: ID!, question: [ID], student: [ID]): Quiz
    updateQuiz(_id: ID!, title: String, createdAt: String, owner: ID, question: [ID], student: [ID]): Quiz
    createQuestion(questiontext: String!, answer: [String]!, correctanswer: [String]!, questiontype: String!): Question
    updateQuestion(_id: ID!, questiontext: String, answer: [String], correctanswer: [String], questiontype: String): Question
    saveAnswer(questionId: ID!, userId: ID!, selectedanswer: [String]!, isCorrect: Boolean!): Answer
    deleteQuiz(quizId: ID!): Quiz
    deleteQuestion(questionId: ID!): Question
  }
`;

// MR 3/20/23 do we need it here? can we keep it in utils folder?
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
