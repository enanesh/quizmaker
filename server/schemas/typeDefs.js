const typeDefs = `#graphql
  type Query {
  "Find your Users"
    user: [User!]!
  "Get quiz array for homepage grid"
    homePageQuizes: [Quiz!]!
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
