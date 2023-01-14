import React from "react";

const TopNavbar = () => {
  return (
    <div>
      <div className="bg-[#007BFF]">
        <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-start sm:px-6 lg:px-8">
          {/* <p className="flex-1 text-sm text-center font-medium text-white sm:text-left lg:flex-none">
            Welcome to our store
          </p> */}
          <div>
            <ul className="flex items-start justify-end space-x-6">
              <li className="text-sm font-medium text-white hover:text-gray-100 capitalize font-workSans">
                Home
              </li>
              <li className="text-sm font-medium text-white hover:text-gray-100 capitalize font-workSans">
                about us
              </li>
              <li className="text-sm font-medium text-white hover:text-gray-100 capitalize font-workSans">
                contact us
              </li>
              <li className="text-sm font-medium text-white hover:text-gray-100 capitalize font-workSans">
                help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
