const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    selectedanswer: {
        type: String,
        required: true,
    },
    isCorrect: {
        type: Boolean,
        required: true,
    },
});

const Answer = model('Answer', answerSchema);

module.exports = Answer;
