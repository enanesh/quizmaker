const typeDefs = `#graphql
  type Query {
  "Get quiz array for homepage grid"
    homePageQuizes: [Quiz!]!
  }

  "Users that can take or make quizes"
  type User {
    "Unique Identifier"
    _id: ID
    "First Name"
    fName: String!
    "Last Name"
    lName: String!
    "Email Address"
    email: String!
    "Hashed Password"
    hashedPassword: String!
    authKey: String!
    "Quizes User Took"
    quiz: [Quiz]
  }

  "Oh look! A Quiz!!"
  type Quiz {
    "Quiz Identifier"
    quizID: ID!
    "When was this made?"
    createdAt: String!
    "Quiz Creator"
    creatorID: User!
    "Questions"
    questions: [Question!]!
    ""
    results: [Results]
  }

  type Question {
    title: String!
    answers: [String!]!
    correctAnswers: [String!]!

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
