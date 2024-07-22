'use client'

import { useState } from 'react';
import Seat from './Seat';

const SeatList = () => {
  const rows = 5;
  const columns = 8;
  const [selectedSeats, setSelectedSeats] = useState<any>([]);

  const handleSelectSeat = (seat:any) => {
    setSelectedSeats((prevSelectedSeats:any) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s:any) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const seats = [];
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= columns; col++) {
      seats.push({ row, col });
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center flex-wrap">
        {seats.map((seat:any) => { 
          return (
          <Seat
            key={`${seat.row}-${seat.col}`}
            seat={seat}
            onSelect={handleSelectSeat}
            isSelected={ selectedSeats.filter((item:any) =>  { return item.row === seat.row && item.col === seat.col }).length > 0 ? true : false  }
          />
        )})}
      </div>
      <div className="mt-4">
        <h2 className="text-xl">Selected Seats:</h2>
        <ul>
          {selectedSeats.map((seat:any) => (
            <li key={`${seat.row}-${seat.col}`}>
              Row {seat.row}, Seat {seat.col}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatList;