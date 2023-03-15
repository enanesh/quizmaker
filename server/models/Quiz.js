const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    question: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        },
    ],
});


const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;
