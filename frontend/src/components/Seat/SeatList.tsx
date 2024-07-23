'use client'

import { useState } from 'react';
import Seat from './Seat';
import SeatLabels from './SeatLabels';

const SeatList = ({seatConfiguration}:any) => {
  const { rows, columns, seatPrice, seatMap } = seatConfiguration;
  const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

  const [selectedSeats, setSelectedSeats] = useState<any>([]);

  const handleSelectSeat = (seat:any) => {

    const indexSelectedSeat = selectedSeats.findIndex((item:any) =>  { 
      return item.row === seat.row && item.col === seat.col 
    })

    if(indexSelectedSeat !== -1) {
      const seatsFilters = selectedSeats.filter((seat:any) => {
        return selectedSeats[indexSelectedSeat].row!== seat.row || selectedSeats[indexSelectedSeat].col !== seat.col
      })
      setSelectedSeats(seatsFilters)
    } else {
      setSelectedSeats((prevSelectedSeats:any) =>
        prevSelectedSeats.includes(seat)
          ? prevSelectedSeats.filter((s:any) => s !== seat)
          : [...prevSelectedSeats, seat]
      );
    }
  };

  const seats = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      seats.push({ row, col, isBooked: seatMap[row][col] });
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center h-10">
        <div className="w-1/4">
          <h2 className="text-xl">Asiento seleccionado:</h2>
          <ul className='justify-center'>
            {
              selectedSeats.map((seat:any) => (
                <li className='text-blue-900' key={`${seat.row}-${seat.col}`}>
                  Fila {labels[seat.row]}, Asiento {seat.col + 1}
                </li>
              ))
            }
          </ul>
          <div className='mt-10'>
            <span className='text-xl'>
              Total: ${selectedSeats.reduce((acc:number, seat:any) => acc + seatPrice, 0)} <br/>
            </span>
            <button className='bg-blue-500 rounded-md p-2 text-white mt-4 float-right'>
              Reservar
            </button>
          </div>
        </div>
        <SeatLabels labels={labels.slice(0, rows)}/>
        <div className="grid grid-cols-5 justify-center">
          {seats.map((seat:any) => (
            <Seat
              key={`${seat.row}-${seat.col}`}
              seat={seat}
              onSelect={handleSelectSeat}
              isSelected={ selectedSeats.filter((item:any) =>  { return item.row === seat.row && item.col === seat.col }).length > 0 ? true : false  }
              isBooked= { seat.isBooked }
            />
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default SeatList;