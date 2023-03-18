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
<<<<<<< HEAD
            type: String,
            required: true,
            trim: true,
        }
    ]
=======
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
>>>>>>> 294539b28f47f18cc3a35e4521aa2ae4c092523b
});


const Question = model('Question', questionSchema);

module.exports = Question;
