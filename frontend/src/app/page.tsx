import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList';

const movie = {
  title: 'Intensamente 2',
  language: 'Premium Español',
  poster: 'https://pics.filmaffinity.com/inside_out_2-365634749-mmed.jpg'
};

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <MovieList movie={movie} />
    </div>
  );
};

export default Home;