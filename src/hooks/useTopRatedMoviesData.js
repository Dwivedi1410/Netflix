import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import {OPTIONS} from "../utils/constants"

const useTopRatedMoviesData = () => {
    const dispatch = useDispatch();
    const movieData = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    }
    
    useEffect(()=>{
        movieData();
    }, [])
}

export default useTopRatedMoviesData;