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
  const [movie, setMovie] = useState<IData[]>();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetMovie();
  }, []);

  useEffect(() => {
    const itemMovie = data.filter((item) => item.id === itemID);
    setMovie(itemMovie);
  }, [data, itemID]);
  const handleGetMovie = async () => {
    const getFilm = await getMovies();
    setData(getFilm);
  };
  return (
    <div>
      <Header />
      <div className="w-full pt-[calc(75px+58px)] h-screen bg-[#181818] flex justify-center">
        <div className="mr-[24px] ml-[75px]">
          <ReactPlayer
            playing
            controls
            url={`https://www.youtube.com/watch?v=${itemID}`}
          />
          <div>
            {/* <h3 className="text-white">{movie.snippet.title}</h3> */}
            <p className="text-[#aaa]">Mô tả</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movie;
