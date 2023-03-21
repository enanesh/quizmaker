import React, { useEffect, useState } from "react";

import ModalQuestions from "./ModalQuestions";
import TemporaryQuizCard from "../TemporaryQuizCard"



const AppRenderquiz = () => {
  const [quizInitInfo, setQuizInitInfo] = useState([]);

  const uuid = require("../../utils/uuid");
  const quizId = uuid();

  const handleContinue = () =>
    setQuizInitInfo([
      "visible",
      "invisible",
      document.getElementById("title").value,
      document.getElementById("category").value,
      document.getElementById("user").value,
      document.getElementById("numOfQuestions").value
    ])

  return (

    <div className="m-8 px-4 py-8 container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
    <img
      className="absolute h-auto w-full object-cover mt-8 pt-16"
      src="./create.png"
      alt="Create a quiz"
    />
      </div>
      <div className="w-full px-4 xl:w-1/2 m-0">
        <div>
          <div className=" flex w-full m-0">
            <ModalQuestions quizId={quizId} initInfo={quizInitInfo} />
          </div>
        </div>
        <div className={quizInitInfo[1]}>
          <div className="mb-6 m-0">
      <label for="title" className={`block text-gray-700 text-sm font-semibold mb-2`}>Title</label>
        <input id="title" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
        </input>
          </div>
          <div className="mb-6 mt-6">
      <label for="category" className="block text-gray-700 text-sm font-semibold mb-2">Select a category</label>
            <select id="category" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
              <option value>Select a category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Category 4">Category 4</option>
            </select>
          </div>
          <div className="mb-6 mt-6">
      <label for="user" className="block text-gray-700 text-sm font-semibold mb-2">Assign to</label>
            <select id="user" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
              <option value>Select a user</option>
              <option value="User 1">User 1</option>
              <option value="User 2">User 2</option>
              <option value="User 3">User 3</option>
              <option value="User 4">User 4</option>
            </select>
          </div>
          <div className="mb-6 mt-6">
      <label for="numOfQuestions" className="block text-gray-700 text-sm font-semibold mb-2">Number of questions</label>
        <input id="numOfQuestions" className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10">
        </input>
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
    )
  }

export default AppRenderquiz;