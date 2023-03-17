const mocks = {
  Quiz: () => ({
    quizID: () => "quiz1",
    createdAt: () => "now",
    owner: () => "001",
    questions: () => {
      return {
        questiontext: "Which tool does Apollo offer to speed up concurrent development?",
        answers: [
          "Mock Data",
          "Virtual Data",
          "Fake Database",
          "Stuff"
        ],
        correctAnswers: "Mock Data"
      };
    },
  }),
};

module.exports = mocks