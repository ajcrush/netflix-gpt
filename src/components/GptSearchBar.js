import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import groq from "../utils/groq";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  //Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi mil gaya show only movies name nothing else on the output";
    console.log(searchText.current.value);
    // Make an API call to groq api and get movie result
    const result = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "llama3-8b-8192",
    });
    console.log(result?.choices[0]?.message?.content);
    const gptMovies = result?.choices[0]?.message?.content.split(",");
    // For each movie i will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // As searchMovieTMDB is async function also it has not completed the api call  it will return array of promise like: [Promise,Promise,Promise,Promise,Promise] it will take some time to resolve

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[40%] md:pt-[7%] flex justify-center">
      <form
        className=" md:w-1/2 w-full bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="name"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
