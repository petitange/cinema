import Navbar from '@/components/Navbar';
import SeatList from '@/components/Seat/SeatList';
import { notFound } from "next/navigation";

const getSeats = async ({movieId, auditoriumId, scheduleId}:any) => {
  try {
    const response = await fetch('http://localhost:3000/seats/movie/'+ movieId +'/auditorium/'+ auditoriumId +'/schedule/' + scheduleId ).then(response => response.json());
    return response;
  } catch (err) { 
    notFound()
  }
}

const SeatPage = async ({ searchParams }:any) => {
  const { movieId, auditoriumId, scheduleId } = searchParams
  const { data }  = await getSeats({ movieId, auditoriumId, scheduleId }) || {}

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SeatList seatConfiguration={data}/>
    </div>
  );
};

export default SeatPage;