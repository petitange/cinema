import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList';
import { notFound } from "next/navigation";

const getMovies = async () => {
  try {
    const response = await fetch('http://localhost:8080/movies').then(response => response.json());
    return response;
  } catch (err) { 
    notFound()
  }
}

const Home = async () => {
  const {data: movies } = await getMovies() || []

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;