import React, { useState } from 'react'
import UserList from './UserList';

export const UserApp = () => {

  const [endPoint, setEndPoint] = useState('users');

  const handleFetch = () => {
    setEndPoint('comments')
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl  text-center  font-bold text-white">
        Listado de usuarios
      </h1>
      <UserList endpoint={endPoint} ></UserList>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700"
        onClick={handleFetch}
      >
        Aquí se llama la API
      </button>

    </div>
  )
}

