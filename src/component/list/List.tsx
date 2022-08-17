import "./list.scss";
import Thumb from "../../assets/img/thumb.webp";
import Avt from "../../assets/img/avt.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface IData {
  id: string;
  description: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  title: string;
}
function List() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const request = async () => {
      const res = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyBaLQ37ZsPSqHjZKI47ocjiC5NuWTEWwsA"
      );
      setData(res.data.items);
    };
    request();
  }, []);
  console.log(data[0]);

  return (
    <div className="bg-[#181818] w-full h-screen">
      <div className="w-full flex justify-center mt-[24px]">
        <ul className="list-none w-full flex flex-wrap mx-[16px]">
          {data.map((item, index) => {
            console.log(item.thumbnails?.high?.url);

            return (
              <li
                key={index}
                className="w-[calc(100%/4-16px)] mb-[40px] px-[16px] cursor-pointer"
              >
                {data !== undefined && (
                  <Link to="movie">
                    <img src={item.thumbnails?.high?.url} alt="" />
                    <div className="flex mt-[12px]">
                      <div className="h-[36px] w-[36px] mr-[12px]">
                        <img className="rounded-[50%]" src={Avt} alt="" />
                      </div>
                      <div>
                        <h3 className="text-white">Tên phim</h3>
                        <p className="text-[#aaa]">mô tả</p>
                      </div>
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default List;
