import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-10 text-white bg-green-600 shadow-lg h-[56px]">
      <h5 className="hidden font-semibold md:block md:text-2xl">
        Travel Companion
      </h5>

      <div className="flex items-center md:space-x-3">
        <h6 className="hidden md:block">Explore new places</h6>

        <div className="flex items-center px-2 bg-white rounded bg-opacity-20 hover:bg-opacity-25">
          <IoSearch />
          <input
            type="text"
            className="p-1 placeholder-current bg-transparent focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
