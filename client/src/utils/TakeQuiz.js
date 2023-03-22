// // import React, { useState } from "react";
// import { useMutation, useQuery } from "@apollo/client";
// import { GET_QUIZ_ANSWERS, GET_SINGLE_QUIZ } from "../../utils/queries";
// import { useParams } from "react-router-dom";

// let surveyJson = "";

// // function xx() {
// //   let userInput = [
// //     {
// //       elements: [
// //         {
// //           type: "radiogroup",
// //           name: "question-3",
// //           title: "This is a single select question3",
// //           isRequired: true,
// //           choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
// //           correctAnswer: "Answer 2",
// //         },
// //       ],
// //     },
// //     {
// //       elements: [
// //         {
// //           type: "checkbox",
// //           name: "question-4",
// //           title: "This is a multi select question4",
// //           isRequired: true,
// //           choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
// //           correctAnswer: ["Answer 1", "Answer 3"],
// //         },
// //       ],
// //     },
// //   ];

// //   surveyJson = {
// //     surveyId: "222222",
// //     authorId: "555555",
// //     respondentId: "555555",
// //     title: "Quiz Title",
// //     pages: [{}],
// //   };

// //   for (var i = 0; i < userInput.length; i++) {
// //     surveyJson.pages.push(userInput[i]);
// //   }

// //   return surveyJson;
// // }
// function createTheQuiz() {
//   //   const TakeQuiz = () => {
//   surveyJson = {
//     surveyId: "222222",
//     authorId: "555555",
//     respondentId: "555555",
//     title: "Quiz Title",
//     pages: [{}],
//   };
//   const { quizId } = useParams();
//   //   let quizData = "";
//   const { data } = useQuery(GET_SINGLE_QUIZ, {
//     variables: { quizId: quizId },
//   });
//   const quizData = data?.getSingleQuiz || [];
//   //   console.log(quizData);

//   let userInput2 = [];

//   console.log(quizData.questions);
//   console.log(quizData.questions[0].correctanswer[0]);
//   console.log(quizData.questions.length);
//   for (var i = 0; i < quizData.questions.length; i++) {
//     var inputFormat = {
//       elements: [
//         {
//           type: quizData.questions[i].questiontype,
//           name: `question-${i}`,
//           title: quizData.questions[i].questiontext,
//           isRequired: true,
//           choices: [quizData.questions[i].answerOne, quizData.questions[i].answerTwo, quizData.questions[i].answerThree, quizData.questions[i].answerFour],
//           correctAnswer: quizData.questions[i].correctanswer[0],
//         },
//       ],
//     };
//     console.log(i);
//     userInput2.push(inputFormat);
//     console.log(userInput2);
//     surveyJson.pages.push(userInput2);
//   }
//   //   for (var i = 0; i < userInput.length; i++) {
//   //     surveyJson.pages.push(userInput[i]);
//   //   }
//   return surveyJson;
// }

// module.exports = createTheQuiz;

// // export default TakeQuiz;
