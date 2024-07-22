'use client'

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import { useState } from 'react';

const BookingPage = () => {
  const searchParams = useSearchParams();
  const room = searchParams.get('room');
  const [reservation, setReservation] = useState(null);

  const handleBooking = async (room:any, form:any) => {
    setReservation({ ...form, room });
    // Aquí puedes hacer la llamada a la API para guardar la reserva
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <BookingForm room={room} onSubmit={handleBooking} />
    </div>
  );
};

export default BookingPage;