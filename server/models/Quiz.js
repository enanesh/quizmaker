const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const quizSchema = new Schema({
  quizId: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    // required: true,
    // unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    // required: true
    default: Date.now(),
    get: (timestamp) => dateFormat(timestamp),
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
        ref: 'Question',
    },
  ],
  student: 
    {
      type: Schema.Types.ObjectId,
    ref: 'User',
    },
});


const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;
