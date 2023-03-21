import React from "react";
import { useEffect, useState } from "react";
import TemporaryQuizCard from "../TemporaryQuizCard";
import { ADD_QUESTION, CREATE_QUESTION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Modal(props) {
  const [questions, setQuestions] = useState([{}]);
  const [showModal, setShowModal] = React.useState(false);
  const visibility = props.initInfo[0];
  const quizTitle = props.initInfo[2];
  const quizCategory = props.initInfo[3];
  const quizAssignedTo = props.initInfo[4];
  const numOfQuestions = props.initInfo[5];

  let questionsList = [];
  let count = 0;
  const [createQuestion] = useMutation(CREATE_QUESTION);

  const [currentQuestionState, setCurrentQuestionState] = useState({
    question: "",
    multiple: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    listradio: "",
  });

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>currentQuestionState: ", currentQuestionState);
  }, [currentQuestionState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestionState({
      ...currentQuestionState,
      [name]: value,
    });
  };

  const handleQuestionSubmit = async (event) => {
    event.preventDefault();
    let answerMatch = "";
    let typeMatch = "";
    if (currentQuestionState.listradio === "1") {
      answerMatch = currentQuestionState.option1;
    } else if (currentQuestionState.listradio === "2") {
      answerMatch = currentQuestionState.option2;
    } else if (currentQuestionState.listradio === "3") {
      answerMatch = currentQuestionState.option3;
    } else if (currentQuestionState.listradio === "4") {
      answerMatch = currentQuestionState.option4;
    }
    if (currentQuestionState.multiple === "on") {
      typeMatch = "checkbox";
    } else {
      typeMatch = "radiogroup";
    }
    console.log(answerMatch);
    console.log(typeMatch);
    const mutationResponse = await createQuestion({
      variables: {
        questiontext: currentQuestionState.question,
        answers: [currentQuestionState.option1, currentQuestionState.option2, currentQuestionState.option3, currentQuestionState.option4],
        correctanswer: answerMatch,
        type: typeMatch,
      },
    });
  };

  for (let index = 0; index < numOfQuestions; index++) {
    ++count;
    questionsList.push(
      <>
        <form id={`formQuestion${count}`}>
          <div class="md:col-span-5 mx-2">
            <label for="question">Question # {count}</label>
            <input type="text" name="question" id={`question${count}`} class="h-7 border mt-1 rounded px-4 w-full bg-gray-50" onChange={handleChange} />
          </div>

          <div class="md:col-span-5 mx-2 mb-3">
            <div class="inline-flex items-center">
              <input type="checkbox" name="multiple" id="multiple" class="form-checkbox" onChange={handleChange} />
              <label for="multiple" class="ml-2">
                multiple choise
              </label>
            </div>
          </div>

          <div class="md:col-span-8 mx-2">
            <ul class="items-center w-full text-sm font-medium bg-white border border-gray-200 rounded-lg sm:flex">
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id={`1`}
                    type="radio"
                    value="1"
                    name="listradio"
                    onChange={handleChange}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <input type="text" name="option1" id={`option1-${count}`} class="m-1 h-7 border mt-1 rounded px-4 w-full bg-gray-50" onChange={handleChange} />
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id={`2`}
                    type="radio"
                    value="2"
                    name="listradio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <input type="text" name="option2" id={`option2-${count}`} class="m-1 h-7 border mt-1 rounded px-4 w-full bg-gray-50" onChange={handleChange} />
                </div>
              </li>
              <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id={`3`}
                    type="radio"
                    value="3"
                    name="listradio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <input type="text" name="option3" id={`option3-${count}`} class="m-1 h-7 border mt-1 rounded px-4 w-full bg-gray-50" onChange={handleChange} />
                </div>
              </li>
              <li class="w-full dark:border-gray-600">
                <div class="flex items-center pl-3">
                  <input
                    id={`4`}
                    type="radio"
                    value="4"
                    name="listradio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <input type="text" name="option4" id={`option4-${count}`} class="m-1 h-7 border mt-1 rounded px-4 w-full bg-gray-50" onChange={handleChange} />
                </div>
              </li>
            </ul>
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <div class="flex w-full mt-8 mx-2">
        <button
          class={`${visibility ? visibility : "invisible"} w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10`}
          type="button"
          onClick={() => setShowModal(true)}
        >
          Create questions
        </button>
      </div>
      {showModal ? (
        <>
          <div className="top-0 justify-center items-center flex overflow-x-hidden overflow-y-visible fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add questions to {quizTitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-black text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                {/*body*/}
                {questionsList}

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear  duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="ml-3 my-1 bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-8"
                    id={`saveQuestion${count}`}
                    type="button"
                    onClick={() => {
                      const questionsForms = document.querySelectorAll("form");
                      let quiz = {
                        title: quizTitle,
                        category: quizCategory,
                        assignedTo: quizAssignedTo,
                        questions: [],
                        options: [],
                        correctAnswers: [],
                      };

                      let count = 0;
                      for (let index = 0; index < questionsForms.length; index++) {
                        ++count;
                        quiz.questions.push({
                          question_name: document.getElementById(`question${count}`).value,
                        });
                        for (let index1 = 1; index1 < 5; index1++) {
                          quiz.options.push({
                            option: document.getElementById(`option${index1}-${count}`).value,
                          });

                          if (document.getElementById(index1).checked) {
                            quiz.correctAnswers.push(document.getElementById(index1).id);
                          }
                        }
                      }
                      console.log(quiz);
                    }}
                  >
                    Save quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}