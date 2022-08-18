import { Link } from "react-router-dom";
import { IData } from "../config/types";

export default function ListPresentation({ data }: { data: IData[] }) {
  return (
    <div className="bg-[#181818] ml-[260px] w-full mt-[58px]">
      <div className="w-full flex justify-center mt-[24px]">
        <ul className="list-none w-full flex flex-wrap mx-[16px]">
          {data.map((item, index) => (
            <li
              key={index}
              className="w-[calc(100%/4-16px)] mb-[40px] px-[16px] cursor-pointer"
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
                      <h3 className="text-white text-[14px]">
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
