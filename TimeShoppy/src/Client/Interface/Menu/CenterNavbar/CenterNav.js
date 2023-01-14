import React from "react";
import Logo from "../../CompanyLogoCompo/Logo";
import NavAuthState from "./NavAuthState";
import NavCart from "./NavCart";
import SearchBox from "./SearchBox";

const CenterNav = () => {
  return (
    <div className="border-b ">
      <nav className="flex justify-between md:px-20 py-4 items-center bg-white max-w-7xl border-slate-300 mx-auto">
        <h1 className="text-xl text-gray-800 font-bold hidden md:block">
          <Logo />
        </h1>

        <div className="flex items-center flex-1 w-full">
          <SearchBox />
        </div>
        <div className=" hidden md:flex items-center">
          <ul className="flex items-center space-x-6">
            <li>
              <NavAuthState />
            </li>
            <li>
              <NavCart />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default CenterNav;
