import { useTheme } from "next-themes";
import React from "react";
import ThemeSwitchButton from "../theme-button";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="flex mx-5 mt-5 sm:mx-10 md:mx-20">
      <ThemeSwitchButton />
    </header>
  );
};

export default Header;
