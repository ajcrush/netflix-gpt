import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
  // Fetching trailer video and updating store with trailer data
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if (!movieTrailer) {
      getMoviesVideo();
    }
  }, []);
};
export default useMovieTrailer;
