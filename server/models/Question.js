const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    questiontext: {
        type: String,
        required: true,
        trim: true,
    },
    answer: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    correctanswer: [
        {
            type: String,
            required: true,
            trim: true,
        }
    ],
    questiontype: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

});


const Question = model('Question', questionSchema);

module.exports = Question;
