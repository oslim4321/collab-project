import React from "react";

const LearnMore = () => {
  return (
    <div>
      <div className="w-full h-[400px] relative -mt-10 lg:h-[70vh]">
        <div className="absolute p-10 lg:p-28">
          <h1 className=" font-mariWeather text-[30px] md:text-[48px] text-white tracking-wider">
            This is how <br></br> good vendors <br></br> find good customers
          </h1>
          <button
            className="font-workSans bg-[#FF4C3B] text-center px-8 md:px-16 py-3 rounded-full mt-10
          text-lg md:text-[24px] text-white"
          >
            Learn more
          </button>
        </div>
        <img
          src="./Images/learnMore.svg"
          alt="learnMore.svg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LearnMore;
