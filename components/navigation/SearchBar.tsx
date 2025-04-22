"use client";

import React from "react";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[500px] lg:w-[600px] bg-[#EDEDED] h-[36px] gap-3 rounded-sm flex items-center">

        {/* padding nalageko le  */}
        <div className="w-0.5"></div>
        <Icon
          icon="weui:search-filled"
          className="text-[20px] text-[#000000]"
        />
      
      <input
        type="text"
        className="w-full h-full bg-transparent outline-none placeholder:text-[#555]"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;