import { useTheme } from "next-themes";
import React from "react";
import LightMode from "../icons/LightMode";
import DarkMode from "../icons/DarkMode";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="pt-5 flex mx-5 sm:mx-10 md:mx-20">
      <button
        className={`ml-auto active:border-[0.8px] p-1 rounded-md border-solid ${
          resolvedTheme === "dark" ? "border-gray-500" : "border-black"
        }`}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <LightMode /> : <DarkMode />}
      </button>
    </header>
  );
};

export default Header;
