import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const MovieDescriptionContainer = ({firstMovieDetails}) => {

  const { original_title, overview } = firstMovieDetails || {};
  
  return (
    <div className="w-screen aspect-video absolute pt-60 pl-8 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{original_title}</h1>
      <p className="w-4/12 mt-4">{overview}</p>
      <div className="mt-4">
        <button className="bg-amber-400 p-2 text-lg rounded-lg w-[100px]">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="bg-amber-400 p-2 text-lg rounded-lg w-[100px] ml-3">
          <FontAwesomeIcon icon={faCircleInfo} /> Info
        </button>
      </div>
    </div>
  );
};

export default MovieDescriptionContainer;
