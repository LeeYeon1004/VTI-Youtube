import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Header from "../component/header/Header";
import { getMovies } from "../config/axios";
import { IData } from "../config/types";
function Movie() {
  let { itemID } = useParams();
  console.log(itemID);
  const [data, setData] = useState<IData[]>([]);
  const [movie, setMovie] = useState<IData>();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetMovie();
  }, []);

  useEffect(() => {
    const itemMovie = data.filter((item) => item.id === itemID);
    setMovie(itemMovie[0]);
  }, [data, itemID]);
  const handleGetMovie = async () => {
    const getFilm = await getMovies();
    setData(getFilm);
  };
  return (
    <div>
      <Header />
      <div className="w-full pt-[calc(75px)] h-screen bg-[#181818] flex flex-col items-center justify-center">
        <div className="mr-[24px] ml-[75px] w-[900px] h-[600px]">
          <ReactPlayer
            width="100%"
            height="100%"
            playing
            controls
            url={`https://www.youtube.com/watch?v=${itemID}`}
          />
        </div>
        <div className="">
          <h3 className="text-white my-[24px]">{movie?.snippet.title}</h3>
          <p className="text-[#aaa] text-[12px]">
            {movie?.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Movie;
