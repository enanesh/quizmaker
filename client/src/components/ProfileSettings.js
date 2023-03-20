import React from 'react'


const ProfileSettings = () => {


    return (

        <div class="bg-confetti min-h-screen p-26 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>


                    <h2 class="font-signature text-6xl text-indigo-700">Account settings</h2>

                    <div class="bg-white rounded shadow-2xl shadow-gray-200 p-4 px-4 md:p-8 mb-6 ">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="text-gray-600">
                                <p class="font-medium text-lg pb-10">Personal Details</p>


                                <img class="justify-center ml-9 rounded-full w-44 h-45" src="./user2.png" alt="image description" />

                            </div>


                            <div class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-2 md:grid-cols-5">

                                    <div class="md:col-span-2">
                                        <label for="full_name">First Name</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Mary" />

                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="full_name">Last Name</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Smith" />

                                    </div>


                                    <div class="md:col-span-5">
                                        <label for="email">Username</label>
                                        <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="msmith16" />
                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="email">Change Password</label>
                                        <button class="h-10 border mt-1 w-full bg-blue-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
                                            <a href="/newpassword" > Reset Password </a>
                                            
                                        </button>
                                    </div>


                                    <div class="md:col-span-2">

                                    </div>

                                    <div class="md:col-span-2">
                                        <label for="full_name">New Password</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="****" />

                                    </div>

                                    <div class="md:col-span-3">
                                        <label for="full_name">Confirm Password</label>
                                        <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="****" />

                                    </div>





                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileSettings