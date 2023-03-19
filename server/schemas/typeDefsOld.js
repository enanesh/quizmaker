const typeDefs = `#graphql
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

  type QuizUser {
    user: ID!
    quiz: ID!
    score: Number
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
    getMyProfile(context): User!
  "Search for User by username or email"
    getUserByUserNameOrEmail(username: String!, email: String!): User!
  }

  type Mutation {
    "Add a User"
    addUser(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): Auth
    "Login"
    login(email: String!, password: String!): Auth
    "Create a Quiz!"
    createQuiz(quizData: Object!, context)
   "Update a Quiz"
    updateQuiz(quizId: ID! title: String!, context)
   "Create a Question"
    createQuestion(quizId: ID!, questionData: Object!, context)
   "Update a Question"
    updateQuestion(questionId: ID!, updatedQuestionData: Object!, context)
   "Save you Answer"
    saveAnswer(answerData: Object!, context)
    "Delete a Quiz"
    deleteQuiz(quizId: ID!, context)
    "Delete a Question"
    deleteQuestion(questionId: ID!, context)
  }
`;

module.exports = typeDefs;
