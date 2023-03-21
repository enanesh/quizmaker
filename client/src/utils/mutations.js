import { gql } from "@apollo/client";

export const ADD_QUIZ = gql`
  mutation addQuiz($quizId: String, $title: String, $description: String) {
    addQuiz(quizId: $quizId, title: $title, description: $description) {
      quizId
      title
      description
    }
  }
`;
export const ADD_QUESTION = gql`
  mutation addQuestion($quizId: String, $questionId: String, $questiontext: String, $questiontype: String, $correctanswer: String) {
    addQuestion(quizId: $quizId, questionId: $questionId, questiontext: $questiontext, questiontype: $questiontype, correctanswer: $correctanswer) {
      _id
      questionId
      questiontext
      questiontype
      correctanswer
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation addAnswer($questionId: String, $selectedanswer: String) {
    addAnswer(questionId: $questionId, selectedanswer: $selectedanswer) {
      _id
      questionId
      selectedanswer
    }
  }
`;

// 3/18
// SIGN UP page
export const ADD_USER = gql`
  mutation addUser($username: String!, $firstname: String, $lastname: String, $email: String!, $password: String!) {
    addUser(username: $username, firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      token
      user {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;

// LOGIN page
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        firstname
        lastname
        email
      }
    }
  }
`;

export const REQUEST_PW_RESET = gql`
  mutation Mutation($email: String) {
    requestPwReset(email: $email) {
      user
    }
  }
`;

// PROFILE/Create a quiz
export const CREATE_QUIZ = gql`
  mutation createQuiz($quizData: QuizInput!) {
    createQuiz(quizData: $quizData) {
      _id
      title
      description
      owner {
        _id
        username
      }
      questions {
        _id
        questiontext
        answer
        correctanswer
        questiontype
        questionname
        isrequired
      }
    }
  }
`;

// update quiz
export const UPDATE_QUIZ = gql`
  mutation updateQuiz($quizId: ID!, $title: String!) {
    updateQuiz(quizId: $quizId, title: $title) {
      _id
      title
    }
  }
`;

//PROFILE/Create a quiz (question)
export const CREATE_QUESTION = gql`
  mutation createQuestion($quizid: ID!, $questionData: QuestionInput!) {
    createQuestion(quizid: $quizid, questionData: $questionData) {
      _id
      title
      owner {
        _id
        username
      }
    }
  }
`;

// Update question
export const UPDATE_QUESTION = gql`
  mutation updateQuestion($questionId: ID!, $updatedQuestionData: QuestionInput!) {
    updateQuestion(questionId: $questionId, updatedQuestionData: $updatedQuestionData) {
      _id
      text
      options
      correctAnswer
    }
  }
`;

// Save answer
export const SAVE_ANSWER = gql`
  mutation saveAnswer($questionId: ID!, $selectedAnswer: String!, $isCorrect: Boolean!) {
    saveAnswer(answerData: {questionId: $questionId, selectedAnswer: $selectedAnswer, isCorrect: $isCorrect}) {
      _id
      questionId
      userId
      selectedAnswer
      isCorrect
    }
  }
`;

// DELETE Quiz
export const DELETE_QUIZ = gql`
  mutation ($quizId: ID!) {
    deleteQuiz(quizId: $quizId)
  }
`;

// DELETE Question
export const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: ID!) {
    deleteQuestion(questionId: $questionId) {
      _id
      text
      options {
        _id
        text
      }
    }
  }
`;