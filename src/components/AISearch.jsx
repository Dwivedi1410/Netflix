import {  useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API } from "../utils/constants";
import { LOGIN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";


const AISearch = () => {
  const inputRequest = useRef(null);

  const handleButtonClick = async() => {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API });

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Give me the names of 5 movies based on this input "+ inputRequest.current.value +". Only respond with the movie names in this format: (name1, name2, name3, name4, name5). Do not include any extra text or explanation.",
      });
      
      // const movieArray = response.split(",");
      console.log(response);
    
  };

  return (
    <div>
      <div>
        <img src={LOGIN_PAGE_BACKGROUND_IMAGE} className="-z-10" />
      </div>

      <div className="absolute top-1/4 left-1/2 w-6/12 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white p-6 sm:p-10 rounded-lg shadow-lg">
        <form className="text-center" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="what would you like to watch today ?"
            className="bg-white text-black rounded-lg w-9/12 py-1 px-2 mr-4 focus:outline-none"
            ref={inputRequest}
          ></input>
          <button className="bg-red-600 rounded-lg px-4 py-1" onClick={handleButtonClick}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default AISearch;
