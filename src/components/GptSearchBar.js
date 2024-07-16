import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
    // Make an API call to groq api and get movie result
  };
  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 "
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
