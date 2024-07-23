const Seat = ({ seat, onSelect, isSelected, isBooked }:any) => {
  return (
    <div>
        {
          isBooked 
          ? <div
              className={`w-8 h-8 m-2 bg-green-500`}
              >
            </div> 
          :
            <div
              className={`w-8 h-8 m-2 cursor-pointer ${
                isSelected ? 'bg-blue-500' : 'bg-gray-500'
              }`}
              onClick={() => onSelect(seat)}
            >
            </div>
        }
       
    </div>
    
  );
};

export default Seat;