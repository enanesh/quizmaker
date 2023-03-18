const mocks = {
  Quiz: () => ({
    quizID: () => "quiz1",
    createdAt: () => "now",
    creatorID: () => "001",
    questions: () => {
      return {
        title: "Which tool does Apollo offer to speed up concurrent development?",
        answers: [
          "Mock Data",
          "Virtual Data",
          "Fake Database",
          "Stuff"
        ]
      };
    },
  }),
};

module.exports = mocks