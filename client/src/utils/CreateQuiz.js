let surveyJson = "";

function CreateQuiz() {
  let userInput = [
    {
      elements: [
        {
          type: "radiogroup",
          name: "question-3",
          title: "This is a single select question3",
          isRequired: true,
          choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
          correctAnswer: "Answer 2",
        },
      ],
    },
    {
      elements: [
        {
          type: "checkbox",
          name: "question-4",
          title: "This is a multi select question4",
          isRequired: true,
          choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
          correctAnswer: ["Answer 1", "Answer 3"],
        },
      ],
    },
  ];

  surveyJson = {
    surveyId: "222222",
    authorId: "555555",
    respondentId: "555555",
    title: "Quiz Title",
    pages: [{}],
  };

  for (var i = 0; i < userInput.length; i++) {
    surveyJson.pages.push(userInput[i]);
  }

  return surveyJson;
}

module.exports = CreateQuiz;
