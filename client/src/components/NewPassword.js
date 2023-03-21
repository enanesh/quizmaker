import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { RESET_PASSWORD } from "../utils/mutations";
import { useNavigate, useParams } from "react-router-dom";

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [message, setMessage] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);

    const { resetLink } = useParams();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'newpassword') {
            setPassword(inputValue);
        } else {
            setCheckPassword(inputValue)
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (password === checkPassword) {
            const mutationResponse = await resetPassword({ variables: { "resetLink": resetLink, "newPassword": password } });
            console.log(`\n\nMutation Response:\n${JSON.stringify(mutationResponse)}`)
            if (mutationResponse.data.resetPassword) {
                setPassword('')
                setCheckPassword('')
                setMessage('Password Reset Successful!')
                setTimeout(() => {
                    setMessage(null)
                    navigate("/login")
                }, 5000);
            }
        }
    }

    return (
        <section class="bg-gray-50 dark:bg-gray-900 bg-confetti ">

            <div class="flex flex-col items-center  py-44  mx-auto md:h-screen  ">
                <div class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center ">
                            Reset Password
                        </h1>

                        <div>



                        </div>

                        <form class="space-y-6 md:space-y-4" action="#">
                            <div className='pb-6' >
                                <label
                                    for="createNewPassword"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Enter new password:{" "}
                                </label>
                                <input
                                    type="password"
                                    name="newpassword"
                                    id="newPassword"
                                    value={password}
                                    onChange={handleInputChange}
                                    class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="******"
                                    required=""
                                />
                            </div>
                            <div className='pb-6' >
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password:{" "}
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={checkPassword}
                                    onChange={handleInputChange}
                                    class="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="******"
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
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewPassword