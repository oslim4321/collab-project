import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#007BFF] text-white py-8 mt-40">
      <div className="container mx-auto flex flex-wrap max-w-[950px] my-20">
        <div className="w-full md:w-1/3 text-center md:text-left ">
          <h5 className="uppercase mb-4 font-bold my-3 font-workSans md:text-left">
            About Us
          </h5>
          <ul className="list-reset md:text-left">
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-4 font-bold my-3 font-workSans md:text-left">
            Support
          </h5>
          <ul className="list-reset md:text-left">
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-4 font-bold my-3 font-workSans md:text-left">
            Our resources
          </h5>
          <ul className="list-reset md:text-left">
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
            <li className="mb-2 font-workSans">
              <Link to="/">About Time Shoppy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
