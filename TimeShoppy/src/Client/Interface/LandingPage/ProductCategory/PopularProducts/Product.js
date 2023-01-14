import React from "react";

const Product = () => {
  let count = [1, 2, 3, 4];

  return (
    <div className="h-full bg-gradient-to-tl to-[#CCE5FF] from-[#92C1F2] lg:h-[600px]">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Explore popular categories
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-2 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* <div className="mt-6 grid grid-cols-4 gap-y-10 gap-x-6  xl:gap-x-8 overflow-scroll"> */}
          {/* start */}
          {count.map((elem) => (
            <div className="bg-white hover:shadow-2xl w-full h-[85%] rounded-2xl overflow-hidden transition-all duration-150">
              <img
                src="./Images/chair.svg"
                alt="chair"
                className="w-full h-[80%] object-cover"
                width="800"
                height="100"
              />
              <div className="text-2xl h-[20%] flex items-center justify-center">
                Oudoor chairs
              </div>
            </div>
          ))}
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Product;
