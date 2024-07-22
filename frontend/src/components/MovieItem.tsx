'use client'

import { useRouter } from 'next/navigation';

const MovieItem = ({ movie }:any) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <img src={movie.poster} alt={movie.title} className="w-24 h-36 mr-4 rounded" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-gray-500">{movie.language}</p>
      </div>
      <button
        className="text-blue-500 ml-4"
        onClick={() => router.push('/availability')}
      >
        Ver Disponibilidad
      </button>
    </div>
  );
};

export default MovieItem;