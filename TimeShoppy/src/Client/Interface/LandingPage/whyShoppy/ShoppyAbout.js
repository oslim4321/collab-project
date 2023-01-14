import React from "react";

const ShoppyAbout = () => {
  return (
    <div className="h-full md:h-[40vh] w-full bg-white ">
      <div className="flex items-center justify-center flex-col my-14 gap-y-8">
        <p
          className="font-mariWeather font-bold text-2xl text-[#007BFF] 
          md:text-[48px]"
        >
          Why Time Shoppy?
        </p>
        <p className="text-center flex-wrap font-workSans font-bold text-lg max-w-[70%] lg:max-w-[50%] ">
          Our mission is fast and seamless delivery. Vendors deserve to get
          their payments on time, just as our shoppers deserve to have their
          products delivered within 24 hours.
        </p>
        <button
          className="font-workSans bg-[#FF4C3B] text-center px-8 md:px-16 py-3 rounded-full
          text-lg md:text-[24px] text-white"
        >
          Go to About Us
        </button>
      </div>
    </div>
  );
};

export default ShoppyAbout;
