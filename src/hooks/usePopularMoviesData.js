import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import {OPTIONS} from "../utils/constants"

const usePopularMoviesData = () => {
    const dispatch = useDispatch();
    const movieData = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    }
    
    useEffect(()=>{
        movieData();
    }, [])
}

export default usePopularMoviesData;