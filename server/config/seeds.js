const db = require('../config/connection');
const { User, Question,Quiz,QuizUser , Category,Answer } = require('../models');

db.once('open', async () => {


    await User.deleteMany();

   const users = await User.insertMany([
        {
            username: "Ada1",
            firstname: "Ada",
            lastname: "Lovelace",
            email: "user1@quizmaker.com",
            password: "12345"
        },
        {
            username: "Alice2",
            firstname: "Alice",
            lastname: "Ball",
            email: "user2@quizmaker.com",
            password: "54321"
        },
        {
            username: "User",
            firstname: "Anton",
            lastname: "Meat",
            email: "user3@quizmaker.com",
            password: "54321"
        }
   ]);


    console.log('users seeded');

    await Question.deleteMany();
    const questions = await Question.insertMany([
        {
            "questiontext": "What was Meta Platforms Inc formerly known as?",
            "answer": ["Facebook", "Twitter", "TikTok"],
            "correctanswer": "FaceBook",
            "questiontype": "MultipleChoice",
            "questionname": "Question 1",
            "isrequired": "1"

        },
        {
            "questiontext": "Puerto Rico is located on which continent?",
            "answer": ["America", "Asia", "Europe"],
            "correctanswer": "America",
            "questiontype": "Multiple Choice",
            "questionname": "Question 2",
            "isrequired": "1"
        }
    ]);

    console.log('Question seeded');

    
    await Quiz.deleteMany();

    const quizzes = await Quiz.insertMany([
        {
            title: "My first quiz",
            owner: users[0]._id,
            question: questions[0]._id,
            student: users[1]._id
        },
        {
            title: "My second quiz",
            owner: users[1]._id,
            question: questions[1]._id,
            student: users[0]._id
        }
    ]);

    console.log('Quiz seeded'); 
    
    await QuizUser.deleteMany();

    const quizUsers = await QuizUser.insertMany([
        {
            user: quizzes[0].owner,
            quiz: quizzes[0]._id,
            score: 80,
            
        },
        {
            user: quizzes[1].owner,
            quiz: quizzes[1]._id,
            score: 60,

        },
    ]);

    console.log('QuizUser seeded'); 

    await Category.deleteMany();

    const categories = await Category.insertMany([
        {
            name: "Technology",
            description: "Basic Technology knowledge ",
            quizzes: [0].tittle,
        },
        {
            name: "General Knowledge",
            description: "Small geography quiz ",
            quizzes: [1].tittle,
        }
    ]);

    console.log('Category  seeded'); 

    await Answer.deleteMany();

    const answers = await Answer.insertMany([
        {
            questionId: questions[0],
            userId:users[0]._id,
            selectedanswer:"Twitter",  
            isCorrect: true,
        }
    ])

    console.log('Answers  seeded'); 




    process.exit();
});
