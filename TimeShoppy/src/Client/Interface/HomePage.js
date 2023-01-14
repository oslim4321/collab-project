import React from "react";
import Footer from "./LandingPage/Footer/Footer";
import QuestionAnswer from "./LandingPage/FrequentQuestion/QuestionAnswer";
import LearnMore from "./LandingPage/LearnMore/LearnMore";
import Home from "./LandingPage/MasterHeroPage/Home";
import PopularShops from "./LandingPage/PopularItems/PopularShops";
import Product from "./LandingPage/ProductCategory/PopularProducts/Product";
import RelyShoppy from "./LandingPage/RelyOnShoppy/RelyShoppy";
import ShoppyAbout from "./LandingPage/whyShoppy/ShoppyAbout";
// import TailwindSlder from "./LandingPage/whyShoppy/TailwindSlder";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Product />
      <PopularShops />
      <LearnMore />
      <ShoppyAbout />
      <RelyShoppy />
      <QuestionAnswer />
      <Footer />
      {/* <TailwindSlder /> */}
    </div>
  );
};

export default HomePage;
