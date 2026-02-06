import React from "react";
import Link from "next/link";
import ThemeSwitchButton from "../theme-button";
import poppins from "@/styles";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-5 mt-5 sm:mx-10 md:mx-20">
      <Link
        href="/"
        className={`w-10 h-10 bg-gray-200 dark:bg-[#202020] rounded-md flex items-center justify-center ${poppins.className}`}
        aria-label="Back to home"
      >
        <span className="text-3xl font-bold text-black dark:text-white">S</span>
      </Link>

      <div className="flex items-center gap-3">
        <ThemeSwitchButton />
      </div>
    </header>
  );
};

export default Header;

