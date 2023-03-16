import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AppQuizes = () => {
    return (
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Questions
                </th>
                <th scope="col" className="px-6 py-3">
                    Time (min)
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Action</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Test 1
                </th>
                <td className="px-6 py-4">
                    Math
                </td>
                <td className="px-6 py-4">
                    50
                </td>
                <td className="px-6 py-4">
                    60
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="/quiz" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Take it</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Test 2
                </th>
                <td className="px-6 py-4">
                    JavaScript
                </td>
                <td className="px-6 py-4">
                    100
                </td>
                <td className="px-6 py-4">
                    60
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="/quiz" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Take it</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


    );
}
export default AppQuizes;