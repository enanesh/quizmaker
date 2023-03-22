import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_QUIZ } from "../../utils/mutations";

import ModalQuestions from "./ModalQuestions";
import TemporaryQuizCard from "../TemporaryQuizCard";

import { GET_ALL_USERS } from "../../utils/queries";

const AppRenderquiz = () => {
  const { loading, data, error } = useQuery(GET_ALL_USERS);
  console.log("data --->", error);
  const users = data?.users || [];

  console.log("users --->", users);
  const [quizInitInfo, setQuizInitInfo] = useState([]);
  const [addQuiz] = useMutation(ADD_QUIZ);
  const [currentQuizIdState, setCurrentQuizIdState] = useState("");
  const uuid = require("../../utils/uuid");

  const handleContinue = async () => {
    const quizMutation = await addQuiz({
      variables: {
        quizId: uuid(),
        title: document.getElementById("title").value,
        description: document.getElementById("category").value,
      },
    });
    setCurrentQuizIdState(quizMutation.data.addQuiz.quizId);
    setQuizInitInfo([
      "visible",
      "invisible",
      document.getElementById("title").value,
      document.getElementById("category").value,
      document.getElementById("user").value,
      document.getElementById("numOfQuestions").value,
    ]);
  };

  return (
    <div className="m-8 px-4 py-8 container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
        <img className="absolute h-auto w-full object-cover mt-8 pt-16" src="./create.png" alt="Create a quiz" />
      </div>
      <div className="w-full px-4 xl:w-1/2 m-0">
        <div>
          <div className=" flex w-full m-0">
            <ModalQuestions quizId={currentQuizIdState} initInfo={quizInitInfo} />
          </div>
        </div>
        <div className={quizInitInfo[1]}>
          <div className="mb-6 m-0">
            <label for="title" className={`block text-gray-700 text-sm font-semibold mb-2`}>
              Title
            </label>
            <input id="title" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"></input>
          </div>
          <div className="mb-6 mt-6">
            <label for="category" className="block text-gray-700 text-sm font-semibold mb-2">
              Select a category
            </label>
            <select id="category" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
              <option value>Select a category</option>
              <option value="Javascript">Javascript</option>
              <option value="Javascript">React</option>
              <option value="SQL">SQL</option>
              <option value="HTML & CSS">HTML & CSS</option>
            </select>
          </div>
          <div className="mb-6 mt-6">
            <label for="user" className="block text-gray-700 text-sm font-semibold mb-2">
              Assign to
            </label>
            <select id="user" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
              <option value>Select a user</option>

              {users.map((user) => {
                return <option value={user.username}>{user.username}</option>;
              })}
            </select>
          </div>
          <div className="mb-6 mt-6">
            <label for="numOfQuestions" className="block text-gray-700 text-sm font-semibold mb-2">
              Number of questions
            </label>
            <input id="numOfQuestions" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"></input>
          </div>
          <button
            className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="button"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppRenderquiz;
