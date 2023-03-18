const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    questiontext: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    answer: [
        {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    ],
    correctanswer: [
        {
        type: String,
        required: true,
        unique: true,
        trim: true,
        },
    ],
    questiontype: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    questionname: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isrequired: {
        type: Boolean,
        required: true,
    }
});


const Question = model('Question', questionSchema);

module.exports = Question;
