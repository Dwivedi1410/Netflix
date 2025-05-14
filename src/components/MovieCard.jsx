const MovieCard = ({movieData}) => {
    return (
        <div className="flex-shrink-0 w-[160px] hover:scale-105 transition-transform">
            <img src={"https://image.tmdb.org/t/p/w500//" + movieData.poster_path} className="w-100 h-64 object-cover"/>
        </div>
    )
}

export default MovieCard;
