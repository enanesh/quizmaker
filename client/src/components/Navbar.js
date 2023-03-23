import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";

const AppNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br px-2sm:px-4 py-2.5 rounded ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div href="/" className="flex items-center">
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                <li>
                  <a
                    href="/"
                    className="font-signature text-5xl  block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    quizMaker{" "}
                  </a>
                </li>
              </ul>
              <img src="./logo1.png" className="h-6 mr-3 sm:h-12 " alt="Logo" />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
              {auth.loggedIn() ? (
                <li>
                  <a
                    href="/profile"
                    className="block  text-white text-2xl py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    My profile
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      href="/signup"
                      className="block text-white py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl md:dark:hover:bg-transparent"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="block text-white text-2xl py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AppNavbar;
