import React from "react";

const LogInstate = () => {
  let user = false;
  return (
    <div>
      <nav className="flex items-center justify-center bg-[#55A7FF] text-white h-12">
        <ul className="flex items-center justify-center w-full md:w-auto space-x-10">
          {user ? (
            <li className="font-bold">Welcome back Guest</li>
          ) : (
            <li className="font-bold">
              Create an account to continue shopping
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default LogInstate;
