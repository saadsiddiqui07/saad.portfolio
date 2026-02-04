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

      <nav
        className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800 dark:text-gray-200"
        aria-label="Primary"
      >
        <Link href="/#case-studies" className="hover:underline">
          Case Studies
        </Link>
        <Link href="/#writing" className="hover:underline">
          Writing
        </Link>
        <Link href="/work" className="hover:underline">
          Portfolio
        </Link>
        <Link href="/experience" className="hover:underline">
          Experience
        </Link>
        <a
          href="https://www.linkedin.com/in/saad-siddiqui-0867391a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/saadsiddiqui07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <Link href="/resume" className="hover:underline">
          Resume
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <ThemeSwitchButton />
      </div>
    </header>
  );
};

export default Header;

