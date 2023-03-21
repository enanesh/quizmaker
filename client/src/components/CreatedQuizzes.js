import React from 'react'

const CreatedQuizzes = () => {
  return (
      <div class="text-gray-900 bg-confetti min-h-screen">
          <div class="p-4 flex justify-center pt-44">
              <h1 class=" text-6xl font-signature text-indigo-700 ">
                  My Quizzes
              </h1>
          </div>
          <div class="px-3 py-4 flex justify-center">
              <table class="text-md bg-indigo-600 shadow-md rounded-xl mb-4">
                  <tbody>
                      <tr class="border-b">
                          <th class="text-ceter text-white p-3 px-36">Quiz Name</th>
                          <th class="text-center text-white p-3 px-36">Category</th>
                          <th class="text-center text-white p-3 px-36">Score</th>
                          <th></th>
                      </tr>

                      <tr class="border-b hover:bg-orange-100 bg-gray-100">
                          <td class="p-3 px-5"></td>
                          <td class="p-3 px-5"></td>
                          <td class="p-3 px-5"></td>
                          <td class="p-3 px-5 flex justify-end  bg-gray-100"><button type="button" class="mr-3 text-xl bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Take Quiz</button><button type="button" class="text-xl bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                      </tr>

                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default CreatedQuizzes