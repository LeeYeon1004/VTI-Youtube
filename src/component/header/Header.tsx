import React from "react";
import "./header.scss";
import Logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div className="flex w-full bg-[#202020]">
      <div className="logo w-[120px] h-[56px] text-[#fff]">
        <img src={Logo} alt="" />
      </div>
      <div className="search">
        <input type="text" />
        <button>
          <i className="ti-search"></i>
        </button>
      </div>
      <div className="account"></div>
    </div>
  );
}
export default Header;
