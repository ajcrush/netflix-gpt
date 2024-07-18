const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[8%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-1 md:py-4  px-2 md:px-12 text-xl  rounded-lg hover:bg-opacity-80 mt-2 md:mt-0">
          ▶Play
        </button>

        <button className="hidden md:inline-block m-2 bg-gray-600 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
