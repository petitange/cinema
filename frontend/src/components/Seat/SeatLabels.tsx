import React from 'react'

const SeatLabels = ({labels}:any) => {
  return (
    <div className="grid grid-cols-1 justify-center">
      {labels.map((label:string, index:number) => (
        <span key={index} className="p-3">
          {label}
        </span>
      ))}
    </div>
  );
};

export default SeatLabels;

