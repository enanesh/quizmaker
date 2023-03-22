import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import auth from "../utils/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //MR 3/19/23
    const [login, { error }] = useMutation(LOGIN);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setPassword(inputValue)
        }
    };

    


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let user = { email, password }
        console.log(`User:\n${JSON.stringify(user)}`)
        //MR 3/19/23
        // fetch('/graphql', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then((res) => {
        //         console.log(res);
        //     })

        // MR 3/19/23
        const { data } = await login({
            variables: { email, password }
        });

        //MR 3/19/23
        console.log(data);
        auth.login(data.login.token)

        setEmail('');
        setPassword('');
    };
    return (
        <div class="bg-confetti relative lg:py-20">
            <div class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
                <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
                    <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                        <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                            <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" class="btn-" />
                        </div>
                    </div>
                    <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                        <div class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10">
                            <p class="w-full text-4xl font-medium text-center leading-snug font-serif">Login</p>
                            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                <div class="relative">

                                </div>
                                <div class="relative">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                                    <input
                                        placeholder="123@ex.com"
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                                </div>
                                <div class="relative">
                                    <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
                                    <input
                                        placeholder="*****"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
                                </div>
                                <div class="relative">
                                    {/*  MR 3/19/23 onClick={ handleFormSubmit }  */}
                                    <button class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-purple-600 ease" onClick={handleFormSubmit}>Login</button>
                                </div>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Did you forget your password? <a href="/password" class="font-medium text-indigo-600 hover:underline dark:text-primary-500">Reset Password</a>
                                </p>
                            </div>
                        </div>



                        <svg viewbox="0 0 91 91" class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-yellow-300
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
                                cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445"
                                    r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441"
                                        cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g
                                            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525"
                                                r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle
                                        cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525"
                                            r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261"
                                                cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle
                                        cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605"
                                            r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g
                                                transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686"
                                                    r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle
                                        cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686"
                                            r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261"
                                                cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle
                                        cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767"
                                            r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g
                                                transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846"
                                                    r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle
                                        cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846"
                                            r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261"
                                                cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle
                                        cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926"
                                            r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g
                                                transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006"
                                                    r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle
                                        cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006"
                                            r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
                        <svg viewbox="0 0 91 91" class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500
            fill-current"><g stroke="none" strokewidth="1" fillrule="evenodd"><g fillrule="nonzero"><g><g><circle
                                cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445"
                                    r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441"
                                        cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g
                                            transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525"
                                                r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle
                                        cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525"
                                            r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261"
                                                cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle
                                        cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605"
                                            r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g
                                                transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686"
                                                    r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle
                                        cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686"
                                            r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261"
                                                cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle
                                        cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767"
                                            r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g
                                                transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846"
                                                    r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle
                                        cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846"
                                            r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261"
                                                cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle
                                        cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926"
                                            r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g
                                                transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006"
                                                    r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle
                                        cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006"
                                            r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login