import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Swiper/style.css";

// import required modules
import { Navigation } from "swiper";
import CompC from "./Component/CompC";
import SignUp from "../../Registration/SignUp/SignUp";
import CompA from "./Component/CompA";

export default function Home() {
  return (
    <>
      {/* <div className="absolute translate-x-[-50%] translate-y-[-50%] z-50 top-[50%] left-[50%] inline blurng">
        {" "}
        <SignUp />
      </div> */}
      <Swiper
        autoplay
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CompA />
        </SwiperSlide>
        <SwiperSlide>
          <CompC />{" "}
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
