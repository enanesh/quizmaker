# quizMaker 👩🏻‍🏫 📝 💯



![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)



 ## Description
  
QuizMaker is a coding project aimed at creating a user-friendly quiz generator that allows users to create and customize quizzes for a variety of purposes. The program is designed to be intuitive and easy to use, featuring a clean and simple interface that enables users to quickly create quizzes with different question types. 
 
 This app was deployed using Heroku: https://quizmaker-app1.herokuapp.com/

 ## User Story
 
QuizMaker aims to solve the problem of creating and managing quizzes. In traditional classrooms, teachers and instructors have to manually create quizzes on paper, which can be time-consuming and inefficient. With QuizMaker, teachers and instructors can create quizzes digitally and automate the process of grading, saving time and increasing accuracy.



## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Technology Used](#technology-used)
- [Credits](#credits)
- [License](#license)




## Screenshots

- Main PAge: 
![Main Page](/client/assets/MainPage.PNG)
- Login Page:
![Login Page](/client/assets/LoginPage.PNG)
- Signup Page:
![Signup Page](/client/assets/SignUpPage.PNG)
- Profile Page:
![Profile Page](/client/assets/ProfilePage.PNG)
- Create Quiz Page:
![Create Quiz Page](/client/assets/CreateQuizPage.PNG)
- Select Quiz Page:
![Select Quiz Page](/client/assets/SelectQuizPage.PNG)
- Quiz Created By Me Page:
![Quiz Created By Me Page](/client/assets/QuizCreatedByMePage.PNG)
- Profile Settings:
![Profile Settings](/client/assets/ProfileSettings.PNG)

## Installation

To get started with the application, you need to follow the below steps:

1.-Clone the repository to your local machine.

2.-Install Node.js on your machine and MongoDb.

3.-Install the dependencies by running the following command in the global folder: `npm install`

4.-Create a .env file in the root directory of the project and add the required environment variables. You can use the .env.example file as a reference.

5.-Seed the database by running the following command from the global folder:`npm run seed`

6.-Start the application in development mode by running the following command:`npm run develop`.

7.This command will start the server and client-side applications.

Navigate to http://localhost:3000 in your web browser to access the application.


### Project Structure

The project structure is organized as follows:

**client**: This directory contains the client-side application.
- assets: This directory contains images.
- public : This directory contains the static assets.
- source : This directory contains the react components,pages,utils,app.test.js,index.css,index.js,reposrtWebVitals.js,setUptest.js.



**server**: This directory contains the server-side application.
- server.js
- config: This directory contains the conection.js ad seeds.js
- models: This directory contains the Mongoose models.
- schemas: This directory contains the GraphQL schemas.
- utils: This directory contains the GraphQL resolvers.


### Usage

To use the Full-Stack Quiz Maker, you will need to sign up for an account. Once you have signed up, you can access the application by logging in to your account. After logging in, you will be directed to your profile page where you can create a new quiz.

**Creating a New Quiz**

To create a new quiz, follow these steps:

1.Open your profile page by clicking on your name or profile picture.

2.Click on the "Create New Quiz" button to open the quiz creation page.

3.Set a quiz title that describes the quiz.

4.Choose a category for the quiz from the available list of categories.

5.Assign the quiz to a user, if necessary.

6.Insert the number of questions you want to include in the quiz.

7.Click on the "Continue" button to add the questions.

8.Adding Questions

9.After clicking on the "Continue" button, a new modal will appear. 


Here, you can add questions and answers for the quiz. To do this, follow these steps:

1.-Type your question in the text field provided.

2.-Type the answers to the question in the text fields provided. You can select the quiz format (i.e., multiple choice, true/false, etc.) from the dropdown menu.

3.- Click on the "Save Quiz" button to save your quiz.


## Technology Used
- JavaScript
- @apollo/server
- nodemon
- express
- GraphQl
- jsonwebtoken
- mongoose
- nodemon
- nodemailer
- survey-react-ui
- react
- tailwind



## Credits
- Parker Mathis:https://github.com/markerpathis
- Jamey Wicklund: https://github.com/TheBluWiz
- Maksim Razuvaev:https://github.com/MaksimRazuvaev
- Anton Krasnikov:https://github.com/kas500
- Edna Gonzalez:https://github.com/enanesh


## License

MIT License
