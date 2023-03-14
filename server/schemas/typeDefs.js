const typeDefs = `#graphql
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
    "Quiz Creator"
    createdAt: String!
    creatorID: User!
    "Questions"
    questions: Object!
    "Possible Answers"
    answers: Object!
    "Correct Answer"
    correctAnswers: Object!
    ""
    results: [Results]
  }

  "Lets see how you did."
  type Results {
    _id: ID!
    "Who took the quiz"
    quizTaker: User!
    "When did they turn in the quiz?"
    submittedTime: String!
    "The answers they submitted"
    submittedAnswers: Object!
    "Percent correct"
    score: Float
  }


`;

module.exports = typeDefs;
