import { useSelector } from "react-redux";
import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";


const MovieDescriptionContainer = () => {
    useNowPlayingMoviesData();

    const movieData = useSelector((store) => store.movie.nowPlayingMovies);
  
    if (!movieData ||  !movieData.length) return null;
    
    const firstMovie = movieData[0];
    const { original_title, overview } = firstMovie || {};
    
    console.log(original_title);
    console.log(overview)
    

    return(
        <div className="absolute mt-60 pl-8">
            <h1 className="text-4xl font-bold">{original_title}</h1>
            <p className="w-4/12 mt-4">{overview}</p>
            <div className="mt-4">
                <button className="bg-amber-400 p-2 text-lg rounded-lg w-[100px]">Play</button>
                <button className="bg-amber-400 p-2 text-lg rounded-lg w-[100px] ml-3">Info</button>
            </div>
        </div>
    )
}

export default MovieDescriptionContainer;