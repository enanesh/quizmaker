import { gql } from "@apollo/client";

// TODO: THIS IS JUST A PLACEHOLDER... without this I was getting a lot of errors when creating the cards
export const ADD_QUESTION = gql`
  mutation addQuestion($title: String!) {
    addQuestion(title: $title) {
      title
    }
  }
`;

// 3/18
// SIGN UP page
const ADD_USER = gql`
mutation addUser($username: String!, $firstname: String!, $lastname: String!, $email: String!, $password: String!) {
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
const LOGIN = gql`
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

// PROFILE/Create a quiz
const CREATE_QUIZ = gql`
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
const UPDATE_QUIZ = gql`
  mutation updateQuiz($quizId: ID!, $title: String!) {
    updateQuiz(quizId: $quizId, title: $title) {
      _id
      title
    }
  }
`;

//PROFILE/Create a quiz (question)
const CREATE_QUESTION = gql`
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
const UPDATE_QUESTION = gql`
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
const SAVE_ANSWER = gql`
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
const DELETE_QUIZ = gql`
  mutation ($quizId: ID!) {
    deleteQuiz(quizId: $quizId)
  }
`;

// DELETE Question
const DELETE_QUESTION = gql`
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