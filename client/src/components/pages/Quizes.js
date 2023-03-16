import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AppQuizes = () => {
    return (
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Questions
                </th>
                <th scope="col" class="px-6 py-3">
                    Time (min)
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Test 1
                </th>
                <td class="px-6 py-4">
                    Math
                </td>
                <td class="px-6 py-4">
                    50
                </td>
                <td class="px-6 py-4">
                    60
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/quiz" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Take it</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Test 2
                </th>
                <td class="px-6 py-4">
                    JavaScript
                </td>
                <td class="px-6 py-4">
                    100
                </td>
                <td class="px-6 py-4">
                    60
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="/quiz" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Take it</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


    );
}
export default AppQuizes;