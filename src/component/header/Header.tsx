import "./header.scss";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex w-full bg-[#202020] justify-between items-center px-[16px] border-[1px] border-solid border-[#ffffff1a]">
      <Link to="/">
        <div className="logo w-[120px] h-[56px] flex items-center text-white">
          <i className="fa-solid fa-bars"></i>
          <img className="text-white" src={Logo} alt="" />
        </div>
      </Link>
      <div className="search  text-[#ffffffe0] border-[1px] border-solid border-[#ffffff1a]">
        <input
          className="h-[40px] w-[540px] bg-[#121212] outline-0 px-[6px] py-[2px]"
          type="text"
          placeholder="Tìm kiếm"
        />
        <button className="bg-[#313131] h-[40px] w-[64px]">
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
