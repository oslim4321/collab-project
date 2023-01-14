import React from "react";

const PopularShops = () => {
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8];

  return (
    <div>
      <div className="h-full lg:h-full -mt-10">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Shop popular items
          </h2>
          <p className="my-3 ">Our highest sold product of the week</p>
          <div className="mt-6 grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* <div className="mt-6 grid grid-cols-4 gap-y-10 gap-x-6  xl:gap-x-8 overflow-scroll"> */}
            {/* start */}
            {count.map((elem) => (
              <div
                key={elem}
                className="bg-white hover:shadow-2xl w-full h-[90%] rounded-2xl overflow-hidden transition-all duration-150
              border"
              >
                <img
                  src="./Images/popularProduct.svg"
                  alt="chair"
                  className="w-full h-64 object-cover"
                  width="800"
                  height="100"
                />
                <div className="text-lg  px-2 mt-3 h-40 ">
                  <p className="font-bold">
                    Dainty Name Necklace with Birth Flower a...
                  </p>
                  <p>
                    <i className="bi bi-star-fill space-x-2 text-[#FF4C3B]"></i>
                    <i className="bi bi-star-fill space-x-2 text-[#FF4C3B]"></i>
                    <i className="bi bi-star-fill space-x-2 text-[#FF4C3B]"></i>
                    <i className="bi bi-star-fill space-x-2 text-[#FF4C3B]"></i>
                    <i className="bi bi-star-fill space-x-2 text-[#FF4C3B]"></i>
                  </p>
                  <p>NGN 2000</p>
                </div>
              </div>
            ))}
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularShops;
