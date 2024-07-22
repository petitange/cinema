import Navbar from '@/components/Navbar';
import SeatList from '@/components/Seat/SeatList';

const SeatPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SeatList />
    </div>
  );
};

export default SeatPage;