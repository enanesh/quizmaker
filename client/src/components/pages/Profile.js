import React, { useState, useEffect } from 'react';
import AuthService from '../../utils/auth'
import { Link } from 'react-router-dom';

const AppProfile = () => {
  const [ ownerID, setOwnerID ] = useState('1');

  
  useEffect( () => {
    // Create query to setOwnerID. I think this can be done with Apollo Context and JWT
    const { data } = AuthService.getProfile();
    setOwnerID(data._id)
  }, [])

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
      name: 'Select a quiz',
      href: '/quizes',
      imageSrc: './take.png',
      imageAlt: 'Take a quiz',
    },
    {
      id: 3,
      name: 'Created by you',
      href: `/myquizzes/${ownerID}`,
      imageSrc: './by_you.png',
      imageAlt: 'Created by you',
    },
    {
      id: 4,
      name: 'Assigned to you',
      href: `/assigned/${ownerID}`,
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
        href: '/',
        imageSrc: './logout.png',
        imageAlt: 'Logout',
      },
  ]

    return (
      <div>
        <div className='m-8 min-h-screen'>
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