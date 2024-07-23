import Navbar from '@/components/Navbar';
import Availability from '@/components/Availability/Availability';
import { notFound } from "next/navigation";

const getAuditorium = async (movieId:any) => {
  try {
    const response = await fetch('http://localhost:3000/auditorium/' + movieId).then(response => response.json());
    return response;
  } catch (err) { 
    notFound()
  }
}

const AvailabilityPage = async ({ searchParams }:any) => {
  const { movieId } = searchParams
  const { data: availability } = await getAuditorium(movieId) || []


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Availability availability={availability} movieId={movieId} />
    </div>
  );
};

export default AvailabilityPage;
