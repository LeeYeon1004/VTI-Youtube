import { Link } from "react-router-dom";
import { IData } from "../config/types";

export default function ListPresentation({ data }: { data: IData[] }) {
  return (
    <div className="bg-[#181818] ml-[240px] w-full mt-[calc(58px+56px)]">
      <div className="w-full flex justify-center mt-[24px]">
        <ul className="list-none w-full max-w-[1504px] flex justify-center flex-wrap">
          {data.map((item, index) => (
            <li
              key={index}
              className="w-[calc(100%/4-16px)] mb-[40px] px-[8px] cursor-pointer"
            >
              {data !== undefined && (
                <Link to={`../movie/${item.id}`}>
                  <img src={item.snippet.thumbnails.high.url} alt="" />
                  <div className="flex mt-[12px]">
                    <div className="h-[36px] w-[36px] mr-[12px]">
                      <img
                        className="rounded-[50%]"
                        src={item.snippet.thumbnails.default.url}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-[16px]">
                        {item.snippet.title}
                      </h3>
                      <p className="text-[#aaa] text-[12px]">
                        {item.snippet.title}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
