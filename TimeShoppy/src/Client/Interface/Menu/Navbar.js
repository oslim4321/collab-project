import React from "react";
import BottomNav from "./BottomNavbar/BottomNav";
import CenterNav from "./CenterNavbar/CenterNav";
import LogInstate from "./LoginState/LogInstate";
import MobileNav from "./MobileNav.js/MobileNav";
import TopNavbar from "./TopNavbar/TopNavbar";

const Navbar = () => {
  return (
    <div className="w-full">
      <TopNavbar />
      <CenterNav />
      <MobileNav />
      <BottomNav />
      <LogInstate />
    </div>
  );
};

export default Navbar;
