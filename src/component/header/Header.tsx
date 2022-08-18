import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IData } from "../../config/types";
import { getMovies } from "../../config/axios";

function Header() {
  const [search, setSearch] = useState("");
  const [itemMovie, setItemMovie] = useState<IData[]>([]);
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const handleGetFilm = async () => {
      const getFilm = await getMovies();
      setData(getFilm);
    };
    handleGetFilm();
  }, []);
  const handleSearch = () => {
    const setFilm = data.filter((item) =>
      item.snippet.title.toLocaleLowerCase().includes(search)
    );
    setItemMovie(setFilm);
  };
  console.log(itemMovie[0]);

  const handleKey = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex w-full bg-[#202020] justify-between items-center px-[16px] border-[1px] border-solid border-[#ffffff1a] fixed">
      <Link to="/">
        <div className="logo w-[120px] h-[56px] flex items-center text-white">
          <i className="fa-solid fa-bars"></i>
          <img className="text-white" src={Logo} alt="" />
        </div>
      </Link>
      <div className="search  text-[#ffffffe0] border-[1px] border-solid border-[#ffffff1a]">
        <input
          value={search}
          onKeyDown={handleKey}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          className="h-[40px] w-[540px] bg-[#121212] outline-0 px-[6px] py-[2px]"
          type="text"
          placeholder="Tìm kiếm"
        />
        <button
          onClick={handleSearch}
          className="bg-[#313131] h-[40px] w-[64px]"
        >
          <i className="ti-search"></i>
        </button>
      </div>
      <div className="account text-white">
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  );
}
export default Header;
