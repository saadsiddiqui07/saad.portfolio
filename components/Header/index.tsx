import React from "react";
import ThemeSwitchButton from "../theme-button";
import poppins from "@/styles";

const Header = () => {
  return (
    <header className="flex mx-5 mt-5 sm:mx-10 md:mx-20">
      <div className={`w-10 h-10 bg-gray-200 dark:bg-[#202020] rounded-md flex items-center justify-center ${poppins.className}`}>
        <span className="text-3xl font-bold text-black dark:text-white">S</span>
      </div>
      <ThemeSwitchButton />
    </header>
  );
};

export default Header;
