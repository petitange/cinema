import Navbar from '@/components/Navbar';
import Confirmation from '@/components/Confirmation';

const ConfirmationPage = async() => {
  const { reservation } = await getData()
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Confirmation reservation={reservation} />
    </div>
  );
};

// Puedes usar getServerSideProps o getStaticProps para obtener la reserva desde el backend
export async function getData() {
  // Aquí puedes obtener la reserva desde una API o base de datos
  const reservation = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    room: 'Sala 1',
    time: '08:05 PM'
  };

  return {
    reservation
  };
}

export default ConfirmationPage;