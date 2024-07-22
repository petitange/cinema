import MovieItem from './MovieItem';

const MovieList = ({ movies = [] }:any) => {
  return (
    <div className="container mx-auto mt-4">
      {
        movies.map((movie:any, index:number) => {
          return (<MovieItem key={index} movie={movie} />)
        })
      }
    </div>
  );
};

export default MovieList;