import React from 'react'
import Buttons from "../Main/Buttons"




export default function Card({ user }) {
  return (
    <div className="flex flex-col items-center border p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={user.image} alt={`${user.name}'s thumbnail`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
        </div>
      </div>
      <p className="text-gray-600">{user.designation}</p>

      < Buttons name={user.name} />
    </div>
    
  );
}
