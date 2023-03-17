// import React, { useState } from "react";
// import TemporaryQuizCard from "../components/TemporaryQuizCard";

// const BuildQuiz = () => {
//   const [cards, setCards] = useState([]);

//   const addCard = () => {
//     // create a new array with the old values and the new random one
//     const newCards = [...cards, Math.floor(Math.random() * 10000)];

//     setCards(newCards);
//   };
//   const removeCard = (cardIndex) => {
//     // create a new array without the item that you are removing
//     const newCards = cards.filter((card, index) => index !== cardIndex);

//     setCards(newCards);
//   };
//   return (
//     <body>
//       <header>
//         <div>
//           <button onClick={() => addCard()}>Add Question</button>
//         </div>
//       </header>
//       <main>
//         {cards.map((cardNumber, index) => (
//           <TemporaryQuizCard number={cardNumber} onRemove={() => removeCard(index)} />
//         ))}
//       </main>
//     </body>
//   );
// };

// export default BuildQuiz;
