'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import AvailabilityItem from './AvailabilityItem';

const Availability = ({ availability, movieId }:any) => {
  const router = useRouter();

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Disponibilidad de Salas y Horarios</h2>
      {
        availability.length === 0 && <p>No hay salas disponibles para este película.</p>  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found.  // Show a message if no availability is found
      }
      {availability.map((item:any, index:number) => (
        <div key={index} className="bg-white shadow rounded-lg p-4 mb-4 flex items-center">
          <div className="flex-1">
            <h3 className="text-lg font-bold">{item.room}</h3>
            <div className="mt-2 flex space-x-2">
              {item.schedules.map((schedule:any, idx:any) => (
                <AvailabilityItem key={idx} schedule={schedule} auditoriumId={item.id} movieId={movieId} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Availability;
