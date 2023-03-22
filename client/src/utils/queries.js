import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query getAllUsers {
      users {
        username
      }
    }
`;
// PROFILE/Take a quiz: select quiz from the list
const GET_QUIZ_BY_ID = gql`
  query GetQuizById($quizId: ID!) {
    getQuizById(quizid: $quizId) {
        _id
        title
        owner {
        _id
        username
        }
        question {
        _id
        questiontext
        answer {
            _id
            answerText
        }
        correctanswer
        questiontype
        questionname
        isrequired
        }
        student {
        _id
        username
        }
    }
  }
`;

// Map to display questions by quiz id
const GET_QUESTIONS_BY_QUIZID = gql`
  query getQuestionsByQuizId($quizid: ID!) {
    quiz(id: $quizid) {
      question {
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

// DASHBOARD: Map first 6 quizes to display in feeder
export const GET_ALL_QUIZZES = gql`
  query getAllQuizzes {
  getAllQuizzes {
    quizId
    title
    description
    createdAt
    owner
    questions {
      questionId
    }

  }
}
`;

// PROFILE/Created by you
export const GET_QUIZZES_BY_OWNER = gql`
  query getAllQuizzesByOwner($ownerid: ID!) {
    getAllQuizzesByOwner(ownerid: $ownerid) {
      _id
      title
    }
  }
`;

// PROFILE/Assigned to you
const GET_ALL_QUIZZES_BY_STUDENT = gql`
  query getAllQuizzesByStudent($studentid: ID!) {
    getAllQuizzesByStudent(studentid: $studentid) {
      _id
      title
    }
  }
`
// Get answers to display
const GET_ANSWERS_BY_QUIZ_ID = gql`
  query GetAnswersByQuizId($quizId: ID!) {
    getAnswersByQuizId(quizId: $quizId) {
      _id
      selectedanswer
      isCorrect
      questionId {
        _id
        questiontext
        answer
        correctanswer
        questiontype
        questionname
        isrequired
      }
      userId {
        _id
        username
      }
    }
  }
`;