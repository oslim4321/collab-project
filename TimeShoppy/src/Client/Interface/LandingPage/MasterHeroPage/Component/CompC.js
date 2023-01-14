import React from "react";
import "./style.css";

const CompC = () => {
  return (
    <div className="relative h-screen flex pb-16 lg:pt-0 lg:flex-col lg:pb-0 w-screen bg-[#FCFF78] home">
      <div className=" md:px-40">
        <img
          src="./Images/BagHome.svg"
          alt="bag"
          className=" w-[700px] object-cover absolute top-0 left-26 z-0 "
        />

        <div
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 my-auto mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0
          homeDisp"
        >
          <img
            className="object-cover w-[90%] h-[90%] rounded lg:rounded-none lg:shadow-none lg:h-full px-10"
            src="./Images/LadyHome.svg"
            alt="lady"
          />
          <img
            src="./Images/RightBag.svg"
            className="absolute bottom-0 right-12 w-[400px] h-[250px] object-cover"
            alt="RightBag"
          />
        </div>
        <div className="relative mx-auto flex flex-col items-start justify-start w-full max-w-xl px-4 md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h1 className="text-3xl  leading-none lg:text-[60px] tracking-wider sm:text-center md:font-extrabold font-Jacques sm:font-extrabold md:text-left">
              Shop near you <div className="pt-3">easily & on-time</div>
            </h1>
            <p className="text-[28px] leading-none md:text-2xl lg:text-3xl py-7 font-thin text-sm text-left font-sans">
              Variety of stores with unique and{" "}
              <span>ordinary spanroducts just for you!</span>
            </p>
            <div className="md:flex items-start">
              <button className="bg-[#FF4C3B] px-[56px] py-[24px] text-white rounded-full cursor-pointer \font-san">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompC;
