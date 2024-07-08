import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
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
