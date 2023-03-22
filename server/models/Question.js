const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  questionId: {
    type: String,
    unique: true,
  },
  questiontext: {
    type: String,
    required: true,
    trim: true,
  },
  questiontype: {
    type: String,
    // required: true,
    // trim: true,
  },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
  answerOne: {
    type: String,
  },
  answerTwo: {
    type: String,
  },
  answerThree: {
    type: String,
  },
  answerFour: {
    type: String,
  },
  correctanswer: [
    {
      type: String,
      //   required: true,
      trim: true,
    },
  ],
});

const Question = model("Question", questionSchema);

module.exports = Question;
