import React from "react";
import Logo from "../../CompanyLogoCompo/Logo";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-around items-center">
        <div>
          <Logo />
        </div>
        <div>
          <span>ty</span>
          <span>ty</span>
          <span>ty</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
