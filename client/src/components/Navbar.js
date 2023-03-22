import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from "../utils/auth";

const AppNavbar = () => {



    return (

        <nav class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br px-2sm:px-4 py-2.5 rounded ">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div href="/" class="flex items-center">
                    <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                        <li>
                            <a href="/" class="font-signature text-5xl  block py-2 pl-3 pr-4 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">quizMaker </a>
                        </li>
                    </ul>
                    <img src="./logo1.png" class="h-6 mr-3 sm:h-12 " alt="Logo" />
                </div>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                        {auth.loggedIn() ? 
                            <li>
                                <a href="/profile" className="block  text-white text-2xl py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My profile</a>
                            </li> :
                            <><li>
                                <a href="/signup" className="block text-white py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white text-2xl md:dark:hover:bg-transparent">Sign up</a>
                            </li>
                                <li>
                                    <a href="/login" className="block text-white text-2xl py-2 pl-3 pr-4 text-white-700 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-400 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                                </li></>
                            }
                        

                    </ul>
                </div>
            </div>
        </nav>


    );
}
export default AppNavbar;