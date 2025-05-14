import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const LowerDivision = () => {
    const movieList = useSelector((store) => store.movie);

    if(!movieList) return;

  return (
    <div className="bg-black">
      <div className="-mt-40">
        <MovieList title={"Now Playing Movies"} movieData={movieList.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movieData={movieList.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movieData={movieList.popularMovies}/>
        <MovieList title={"Up Coming Movies"} movieData={movieList.upComingMovies}/>
        
      </div>
    </div>
  );
};

export default LowerDivision;
