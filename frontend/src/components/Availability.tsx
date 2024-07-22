'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const Availability = ({ availability }:any) => {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Disponibilidad de Salas y Horarios</h2>
      {availability.map((item:any, index:number) => (
        <div key={index} className="bg-white shadow rounded-lg p-4 mb-4 flex items-center">
          <div className="flex-1">
            <h3 className="text-lg font-bold">{item.room}</h3>
            <div className="mt-2 flex space-x-2">
              {item.times.map((time:any, idx:any) => (
                <span key={idx} className="bg-green-100 text-green-600 px-2 py-1 rounded-full">{time}</span>
              ))}
            </div>
          </div>
          <button
            className="text-blue-500 ml-4"
            onClick={() => router.push(`/booking?room=${item.room}`)}
          >
            Reservar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Availability;
