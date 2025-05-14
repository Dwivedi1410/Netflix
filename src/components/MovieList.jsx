import MovieCard from "./MovieCard";

const MovieList = ({title, movieData}) => {
 
  return (
    <div className="relative z-10 px-2">
      <h1 className="text-2xl font-semibold text-white mb-4">{title}</h1>
      <div className="overflow-x-auto pb-4 no-scrollbar">
        <div className="flex gap-4">
          {movieData?.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
