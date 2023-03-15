const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quizuserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0,
    },
    completedAt: {
        type: Date,
        default: Date.now(),
        get: (timestamp) => dateFormat(timestamp),
    },
});

const QuizUser = model('QuizUser', quizuserSchema);

module.exports = QuizUser;
