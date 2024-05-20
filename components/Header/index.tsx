import { useTheme } from "next-themes";
import React from "react";
import LightMode from "../icons/LightMode";
import DarkMode from "../icons/DarkMode";
import ThemeSwitchButton from "../theme-button";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="flex mt-5 mx-5 sm:mx-10 md:mx-20">
     <ThemeSwitchButton />
    </header>
  );
};

export default Header;
