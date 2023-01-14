import React from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="hidden md:block">
      <nav className="flex items-center justify-center bg-white text-black h-12 max-w-[1100px] mx-auto">
        <ul className="flex items-center justify-around w-full md:w-auto flex-1">
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Fashion
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Health & Beauty
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Furniture
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Automobile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Outdoor
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2 hover:text-gray-400 font-workSans font-normal"
            >
              Foods
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
