import React, { useEffect, useState } from "react";
import TemporaryQuizCard from "../components/TemporaryQuizCard";

const BuildQuiz = () => {
  const [quizState, setQuizState] = useState([]);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>quizState: ", quizState);
  }, [quizState]);

  const saveQuestion = (newQuestion) => {
    setQuizState([...quizState, newQuestion]);
  };

  const [cards, setCards] = useState([]);

  const addCard = () => {
    // create a new array with the old values and the new random one
    const newCards = [...cards, Math.floor(Math.random() * 100)];

    setCards(newCards);
  };

  return (
    <body>
      <header>
        <div>
          <button onClick={() => addCard()}>Add Question</button>
        </div>
      </header>

      <main>
        {cards.map((cardNumber) => (
          <TemporaryQuizCard saveQuestion={saveQuestion} number={cardNumber} />
        ))}
      </main>
      <button style={{ cursor: "pointer" }} type="submit">
        Submit
      </button>
    </body>
  );
};

export default BuildQuiz;
