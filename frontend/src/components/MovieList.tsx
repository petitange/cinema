import MovieItem from './MovieItem';

const MovieList = ({ movie }:any) => {
  return (
    <div className="container mx-auto mt-4">
      <MovieItem movie={movie} />
    </div>
  );
};

export default MovieList;