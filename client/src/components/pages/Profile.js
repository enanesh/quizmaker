import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const options = [
    {
      id: 1,
      name: 'Create a quiz',
      href: '/renderquiz',
      imageSrc: './create.png',
      imageAlt: 'Create a quiz',
    },
    {
      id: 2,
      name: 'Take a quiz',
      href: '/quiz',
      imageSrc: './take.png',
      imageAlt: 'Take a quiz',
    },
    {
      id: 3,
      name: 'Created by you',
      href: '/quizes/userId',
      imageSrc: './by_you.png',
      imageAlt: 'Created by you',
    },
    {
      id: 4,
      name: 'Assigned to you',
      href: '/quizesfor/userId',
      imageSrc: './todo.png',
      imageAlt: 'Assigned to you.',
    },
    {
        id: 5,
        name: 'Profile settings',
        href: '/settings',
        imageSrc: './settings.png',
        imageAlt: 'Settings',
      },
      {
        id: 6,
        name: 'Logout',
        href: '/logout',
        imageSrc: './logout.png',
        imageAlt: 'Logout',
      },
  ]

const AppProfile = () => {
    return (
      <div>
        <div className='m-8'>
          {/* <div className="md:grid md:grid-cols-3 md:gap-6"> */}
            {/* <div className="md:col-span-1 text-center">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900 mt-6">Profile</h3>
                <div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-auto mt-4">
                    <svg class="absolute w-24 h-23 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <h2 className="text-base  leading-6 text-gray-900 mt-6">User Name</h2>
              </div>
            </div> */}
            <div className="mt-2 md:col-span-2 md:mt-0">
              <div className="bg-confetti">
                <div className="mx-auto max-w-2xl py-4 px- sm:py-6 sm:px-6 lg:max-w-5xl lg:px-8">
                    <h2 className="sr-only">options</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                    {options.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-8 xl:aspect-h-8">
                            <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-center text-gray-700">{product.name}</h3>
                        </a>
                    ))}
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
    //   </div>
    )
  }
  
export default AppProfile;