import { useCallback } from "react";

// Available themes for the components
import "survey-core/defaultV2.min.css";
// import "survey-core/modern.min.css";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useMutation } from "@apollo/client";
// import { ADD_RESPONSE } from "../utils/mutations";

let surveyId = "";
let respondentId = "";
let authorId = "";
// const [addResponse] = useMutation(ADD_RESPONSE);

const surveyJson = {
  title: "Quiz Title",
  pages: [
    {
      elements: [
        {
          type: "radiogroup",
          name: "question-1",
          title: "This is a single select question",
          //   choicesOrder: "random",
          isRequired: true,
          //not limited to 4 answers
          choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
          correctAnswer: "Answer 2",
        },
      ],
    },
    {
      elements: [
        {
          type: "checkbox",
          name: "question-2",
          title: "This is a multi select question",
          //   choicesOrder: "random",
          isRequired: true,
          choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
          correctAnswer: ["Answer 1", "Answer 3"],
        },
      ],
    },
  ],
};

function CreateQuiz() {
  const survey = new Model(surveyJson);
  surveyId = "22222";
  respondentId = "11111";
  authorId = "555555";
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
  //   const mutationResponse = await addResponse({
  //     variables: {
  //       surveyId: surveyId,
  //       authorId: authorId,
  //       respondentId: respondentId,
  //       quizData: data,
  //     },
  //   });
};

export default CreateQuiz;
