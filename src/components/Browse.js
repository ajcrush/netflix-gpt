import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        mainContainer
          - VideoBackGround
          - VideoTitle
        SecondaryContainer
          - MoviesList * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
