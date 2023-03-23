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

let surveyId = "";
let respondentId = "";
let authorId = "";

function TakeQuiz() {
  surveyJson = {
    surveyId: "222222",
    authorId: "555555",
    respondentId: "555555",
    title: "",
    pages: [{}],
  };

  surveyId = surveyJson.surveyId;
  respondentId = surveyJson.respondentId;
  authorId = surveyJson.authorId;

  // const { quizId } = useParams();
  const { data } = useQuery(GET_SINGLE_QUIZ, {
    variables: { quizId: quizId },
  });
  const quizData = data?.getSingleQuiz || {};

  if (!quizData || !quizData.questions) {
    return <p>loading...</p>;
  }

  const alertResults = (sender) => {
    const results = JSON.stringify(sender.data);
    // alert(results);
    handleQuizSubmit(sender.data, quizData);
  };

  for (var i = 0; i < quizData.questions.length; i++) {
    var inputFormat = {
      elements: [
        {
          type: quizData.questions[i].questiontype,
          name: `question${i}`,
          title: quizData.questions[i].questiontext,
          isRequired: true,
          choices: [quizData.questions[i].answerOne, quizData.questions[i].answerTwo, quizData.questions[i].answerThree, quizData.questions[i].answerFour],
          correctAnswer: quizData.questions[i].correctanswer[0],
        },
      ],
    };
    surveyJson.pages.push(inputFormat);
  }

  surveyJson.title = quizData.title;

  const survey = new Model(surveyJson);

  survey.onComplete.add(alertResults);

  const handleQuizSubmit = async (data, quizData) => {
    const questionBase = quizData.questions.length;
    const enteredAnswers = Object.values(data);
    let countCorrect = 0;
    for (var i = 0; i < questionBase; i++) {
      if (quizData.questions[i].correctanswer[0] == enteredAnswers[i]) {
        countCorrect++;
      }
    }
    let score = 0;

    score = parseInt(countCorrect) / parseInt(questionBase);

    alert("You scored " + score * 100 + "%");

    return score;
  };
  return <Survey model={survey} />;
}

export default TakeQuiz;
