import React from "react";

const RelyShoppy = () => {
  return (
    <div className="w-full h-full">
      <section className="mb-32 text-gray-800 text-center lg:text-left">
        <div className="flex flex-wrap sm:justify-center">
          <div className="lg:mb-0  bg-[#80BDFF] flex-grow-1">
            <div className="max-w-[800px] mx-auto min-w-[200px]">
              <h2 className="my-12 text-xl font-bold font-mariWeather text-left md:text-3xl lg:text-5xl tracking-wide">
                Why businesses can
                <br />
                <span className="py-10 ">frely on Time Shoppy</span>
              </h2>

              <div className="my-8">
                <h2 className="mb-1 text-xl font-semibold tracking-tight font-workSans leading-snug text-left md:text-2xl lg:text-3xl">
                  Expand your customer base
                </h2>
                <p className="font-workSan w-[40%] text-left">
                  We help small businesses to reach a variety of customers{" "}
                </p>
              </div>

              <div className="my-8">
                <h2 className="mb-1 text-xl font-semibold tracking-tight font-workSans leading-snug text-left md:text-2xl lg:text-3xl">
                  Expand your customer base
                </h2>
                <p className="font-workSan w-[40%] text-left">
                  We help small businesses to reach a variety of customers{" "}
                </p>
              </div>

              <div className="my-8">
                <h2 className="mb-1 text-xl font-semibold tracking-tight font-workSans leading-snug text-left md:text-2xl lg:text-3xl">
                  Expand your customer base
                </h2>
                <p className="font-workSan w-[40%] text-left">
                  We help small businesses to reach a variety of customers{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0 ">
            <img
              loading="lazy"
              srcSet="./Images/LadyBussiness.svg"
              className="w-full h-full shadow-lg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelyShoppy;
