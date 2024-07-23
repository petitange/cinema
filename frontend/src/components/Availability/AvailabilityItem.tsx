import React from 'react'
import { useRouter } from 'next/navigation';

export default function AvailabilityItem({schedule, auditoriumId, movieId }:any) {
  const router = useRouter();
  const { available } = schedule
  
  return (
    <div>
      {available 
      ? <button key={schedule.id} 
        className={`bg-green-100  px-2 py-1 rounded-full text-green-600`}
        onClick={() => router.push(`/seats?movieId=${movieId}&auditoriumId=${auditoriumId}&scheduleId=${schedule.id}`)}
        >{schedule.time}</button> 
      : <button key={schedule.id} className={`bg-red-100  px-2 py-1 rounded-full text-red-600`}>{schedule.time}</button>}
    </div>
   )
}
