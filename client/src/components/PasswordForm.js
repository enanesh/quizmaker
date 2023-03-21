import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { REQUEST_PW_RESET } from "../utils/mutations";
import { useNavigate } from "react-router-dom";


const PasswordForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [requestPwReset, { data, loading, error }] = useMutation(REQUEST_PW_RESET);
  const navigate = useNavigate();

  if (loading) return 'Requesting...';
  if (error) return `Request Error: ${error.message}`

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const mutationResponse = await requestPwReset({ variables: { "email": email } });
    console.log(`\n\nResponse:\n${JSON.stringify(mutationResponse)}`)
    if (mutationResponse.data.requestPwReset.user) {
      setEmail('')
      setMessage('Password Request Sent - Check Your Email')
      setTimeout(() => {
        setMessage(null)
        navigate("/")
      }, 5000);
    }
  };


  return (
    <section class="bg-gray-50 dark:bg-gray-900 bg-confetti ">

      <div class="flex flex-col items-center  py-44  mx-auto md:h-screen  ">
        <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center ">
              Reset  Password
            </h1>

            <div>

              <p>Please enter your email adress.You'll receive a link to create a new password via email.</p>

            </div>

            <form class="space-y-6 md:space-y-6" action="#">
              <div className='pb-6' >
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email:{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                  class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>


              {message && (
                <div>
                  <p>{message}</p>
                </div>
              )}
              <button
                type="submit"
                onClick={handleFormSubmit}
                class="w-full text-white bg-blue-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Get a New Password
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PasswordForm