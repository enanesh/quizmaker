import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_QUIZ } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

// Available themes for the components
import "survey-core/defaultV2.min.css";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
let surveyJson = "";

const quizId = window.location.toString().split("/")[window.location.toString().split("/").length - 1];
console.log(quizId);

let surveyId = "";
let respondentId = "";
let authorId = "";

function TakeQuiz() {
  surveyJson = {
    surveyId: "222222",
    authorId: "555555",
    respondentId: "555555",
    title: "Quiz Title",
    pages: [{}],
  };
  // const { quizId } = useParams();
  const { data } = useQuery(GET_SINGLE_QUIZ, {
    variables: { quizId: quizId },
  });
  const quizData = data?.getSingleQuiz || [];

  for (var i = 0; i < quizData.questions.length; i++) {
    var inputFormat = {
      elements: [
        {
          type: quizData.questions[i].questiontype,
          name: `question-${i}`,
          title: quizData.questions[i].questiontext,
          isRequired: true,
          choices: [quizData.questions[i].answerOne, quizData.questions[i].answerTwo, quizData.questions[i].answerThree, quizData.questions[i].answerFour],
          correctAnswer: quizData.questions[i].correctanswer[0],
        },
      ],
    };
    surveyJson.pages.push(inputFormat);
  }

  const survey = new Model(surveyJson);
  surveyId = surveyJson.surveyId;
  respondentId = surveyJson.respondentId;
  authorId = surveyJson.authorId;
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    console.log(results);
    handleQuizSubmit(sender.data, surveyId, respondentId, authorId);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

const handleQuizSubmit = async (data, surveyId, respondentId, authorId) => {
  console.log(data);
  console.log(surveyId);
  console.log(respondentId);
  console.log(authorId);
};

export default TakeQuiz;
