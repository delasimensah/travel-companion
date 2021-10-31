import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-5 md:px-10 py-3 text-white bg-green-600 shadow-lg">
      <h5 className="hidden md:block md:text-2xl font-semibold">
        Travel Advisor
      </h5>

      <div className="flex items-center space-x-3">
        <h6 className="hidden md:block">Explore new places</h6>

        <div className="flex items-center rounded px-2 bg-white bg-opacity-20 hover:bg-opacity-25">
          <IoSearch />
          <input
            type="text"
            className="bg-transparent focus:outline-none p-1 placeholder-current"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
