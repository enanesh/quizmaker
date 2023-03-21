const { Schema, model } = require("mongoose");

const answerSchema = new Schema({
  // questionId: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Question',
  //     required: true,
  // },
  // userId: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true,
  // },
  questionId: {
    type: String,
    unique: true,
  },
  selectedanswer: {
    type: String,
  },
  //   isCorrect: {
  //     type: Boolean,
  //     required: true,
  //   },
});

const Answer = model("Answer", answerSchema);

module.exports = Answer;
