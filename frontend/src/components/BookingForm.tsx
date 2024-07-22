'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookingForm = ({ room, onSubmit }:any) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    time: ''
  });
  const router = useRouter();

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await onSubmit(room, form);
    router.push('/confirmation');
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">Reserva para la Sala: {room}</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Horario</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
