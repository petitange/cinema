const Seat = ({ seat, onSelect, isSelected }:any) => {
  return (
    <div
      className={`w-8 h-8 m-2 cursor-pointer ${
        isSelected ? 'bg-green-500' : 'bg-gray-500'
      }`}
      onClick={() => onSelect(seat)}
    >

      {isSelected}
    </div>
  );
};

export default Seat;