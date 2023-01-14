import React from "react";

const NavAuthState = () => {
  let user = false;
  return (
    <div>
      {user ? (
        <ul className="flex items-center space-x-6 cursor-pointer">
          <li className="text-[#007BFF] text-lg">
            <i className="bi bi-person-circle"></i>
          </li>
          <li className="text-[#007BFF] text-lg">
            <i className="bi bi-bell"></i>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center space-x-6 cursor-pointer">
          <li className="text-[#272222]">Login</li>
          <div className=" h-6 border-black border"></div>
          <li className="text-[#272222]">Register</li>
        </ul>
      )}

      {/* </ul> */}
    </div>
  );
};

export default NavAuthState;
