const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    quizzes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quiz',
        },
    ],
});

const Category = model('Category', categorySchema);

module.exports = Category;
