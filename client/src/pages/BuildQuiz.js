import React, { useEffect, useState } from "react";
import ModalQuestions from "../components/pages/ModalQuestions";
import TemporaryQuizCard from "../components/TemporaryQuizCard";

// const BuildQuiz = () => {
//   const [quizState, setQuizState] = useState([]);

//   useEffect(() => {
//     console.log(">>>>>>>>>>>>>>>quizState: ", quizState);
//   }, [quizState]);

//   const saveQuestion = (newQuestion) => {
//     setQuizState([...quizState, newQuestion]);
//   };

//   const [cards, setCards] = useState([]);

//   const addCard = () => {
    
//     // create a new array with the old values and the new random one
//     const newCards = [...cards, Math.floor(Math.random() * 100)];

//     setCards(newCards);
//   };

//   return (
//     // <body>
//     //   <header>
//     //     <div>
//     //       <button onClick={() => addCard()}>Add Question</button>
//     //     </div>
//     //   </header>

//     //   <main>
//     //     {cards.map((cardNumber) => (
//     //       <TemporaryQuizCard saveQuestion={saveQuestion} number={cardNumber} />
//     //     ))}
//     //   </main>
//     //   <button style={{ cursor: "pointer" }} type="submit">
//     //     Submit
//     //   </button>
//     // </body>

    
<div
  class="m-8 container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden"
>
  <div class="relative hidden xl:block xl:w-1/2 h-full">
    <img
      class="absolute h-auto w-full object-cover"
      src="./create.png"
      alt="Create a quiz"
    />
  </div>
  <div class="w-full xl:w-1/2 p-8">
    <div>
      <h1 class=" text-2xl font-bold">Create a quiz</h1>
      <div class="mb-4 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="category"
        >
          Category:
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="category"
          type="text"
          placeholder="Quiz category"
        />

      </div>
      <div class="mb-6 mt-6">
      <label for="users" class="block text-gray-700 text-sm font-semibold mb-2">Assign to</label>
        <select id="users" class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
          <option selected>Choose a user</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
          <option value="4">User 4</option>
        </select>
      </div>
      <div class="flex w-full mt-8">
        <ModalQuestions />
        <button
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          onClick={() => addCard()}
        >
          Add a question
        </button>
        {cards.map((cardNumber) => (
          <TemporaryQuizCard saveQuestion={saveQuestion} number={cardNumber} />
          
//         ))}
//       </div>
//       <div class="flex w-full mt-8">
//         <button
//           class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
//           type="submit" style={{ cursor: "pointer" }}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

// export default BuildQuiz;
