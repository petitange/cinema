'use client'
import React from 'react'
import { useState, useEffect } from 'react';

const detail = {
  movie: {
    id: 1,
    title: 'Intensamente 2',
    language: 'Premium Español',
    poster: 'https://pics.filmaffinity.com/inside_out_2-365634749-mmed.jpg'
  },
  auditorium: {
    id: 1,
    room: 'Sala A', 
  },
  schedule: {
    id: 1,
    time: '08:00 PM',
    available: true,
    price: 100
  },
  seats: [
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 1,
      col: 3,
    }
  ]
}
const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

export default function PurschaseDetail({purchaseId}:any) {

  const [purchaseDetails, setPurchaseDetails] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getPurschaseDetail = async () => {
      setPurchaseDetails(detail)
      setIsLoading(false)
    }

    getPurschaseDetail()
  }, [])

  return (
    <div className="container mx-auto mt-8">
      {
        isLoading 
          ? 'Loading' 
          : <div className="flex flex-col md:flex-row">
              <img src={purchaseDetails?.movie?.poster} alt="Movie Poster" className="w-full md:w-1/3 rounded" />
              <div className="md:ml-8">
                <h1 className="text-3xl font-bold mb-2">{purchaseDetails?.movie?.title}</h1>
                <p className="text-lg mb-4">{purchaseDetails?.movie?.language}</p>
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mb-2">Horario</h2>
                  <div className="flex space-x-4">
                    <button
                      className={`px-4 py-2 rounded`}
                    >
                      {purchaseDetails.schedule.time}
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mb-2">Sala A</h2>

                </div>
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mb-2">Seats</h2>
                  <ul className="list-disc list-inside text-lg">
                    {purchaseDetails.seats.map((seat:any) => (
                      <li className='text-blue-900' key={`${seat.row}-${seat.col}`}>
                        Fila {labels[seat.row]}, Asiento {seat.col + 1}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold mb-2">Total to Pay</h2>
                  <p className="text-xl">${purchaseDetails.seats.reduce((acc:number, seat:any) => acc + purchaseDetails.schedule.price, 0)}</p>
                </div>
              </div>
            </div>
      }
    
  </div>
  )
}
