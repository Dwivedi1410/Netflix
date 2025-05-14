import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import {OPTIONS} from "../utils/constants"

const useUpComingMoviesData = () => {
    const dispatch = useDispatch();
    const movieData = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json?.results));
    }
    
    useEffect(()=>{
        movieData();
    }, [])
}

export default useUpComingMoviesData;