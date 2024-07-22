import Navbar from '@/components/Navbar';
import Availability from '@/components/Availability';

const availability = [
  {
    room: 'Sala A',
    times: ['08:05 PM', '5:00 PM', '7:00 PM']
  },
  {
    room: 'Sala B',
    times: ['06:50 PM', '08:30 PM']
  }
];

const AvailabilityPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Availability availability={availability} />
    </div>
  );
};

export default AvailabilityPage;
