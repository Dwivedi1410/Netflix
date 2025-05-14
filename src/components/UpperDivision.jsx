import { useSelector } from "react-redux";
import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import MovieDescriptionContainer from "./MovieDescriptionContainer";
import MovieVideoContainer from "./MovieVideoContainer";
import usePopularMoviesData from "../hooks/usePopularMoviesData";
import useTopRatedMoviesData from "../hooks/useTopRatedMoviesData";
import useUpComingMoviesData from "../hooks/useUpComingMoviesData";


const UpperDivision = ()=>{
    useNowPlayingMoviesData();
    usePopularMoviesData();
    useTopRatedMoviesData();
    useUpComingMoviesData();

    const movieData = useSelector((store) => store.movie.nowPlayingMovies);
  
    if (!movieData ||  !movieData.length) return null;
    
    const firstMovie = movieData[0];


    return(
        <div>
            <MovieDescriptionContainer firstMovieDetails = {firstMovie}/>
            <MovieVideoContainer movieId = {firstMovie?.id}/>
        </div>
    )
}

export default UpperDivision;