import React, { useState, Arry } from "react";

import { useMutation } from "@apollo/client";
import { ADD_QUESTION } from "../utils/mutations";

const CreateQuestion = (props) => {
  const { saveQuestion } = props;
  const [currentQuestionState, setCurrentQuestionState] = useState({
    type: "",
    name: "",
    title: "",
    correctAnswer: "",
    choices: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "choices") {
      setCurrentQuestionState({
        ...currentQuestionState,
        choices: [...currentQuestionState.choices, value],
      });
    } else {
      setCurrentQuestionState({
        ...currentQuestionState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    saveQuestion(currentQuestionState);

    // console.log(choicesState);
    // console.log(currentQuestionState);

    // try {
    //   const mutationResponse = await addQuestion({
    //     variables: { type: currentQuestionState.questionType },
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input className="form-input" placeholder="question name (no spaces):" name="name" type="text" onChange={handleChange} />
              <label for="type">question type:</label>
              <select id="type" name="type" type="text" onChange={handleChange}>
                <option value="" disabled selected hidden>
                  Select type:
                </option>
                <option value="radiogroup">Single Select</option>
                <option value="checkbox">Multi-Select</option>
              </select>

              <input className="form-input" placeholder="question text:" name="title" type="text" onChange={handleChange} />
              {/* TODO: handle change is creating multiple entries if you edit an answer */}
              <input className="form-input" placeholder="choice 1:" name="choices" type="text" onChange={handleChange} />
              <input className="form-input" placeholder="choice 2:" name="choices" type="text" onChange={handleChange} />
              <input className="form-input" placeholder="choice 3:" name="choices" type="text" onChange={handleChange} />
              <input className="form-input" placeholder="choice 4:" name="choices" type="text" onChange={handleChange} />
              <input className="form-input" placeholder="correct answer:" name="correctAnswer" type="text" onChange={handleChange} />

              <button style={{ cursor: "pointer" }} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateQuestion;
