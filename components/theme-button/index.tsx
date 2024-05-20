import React from "react";
import LightMode from "../icons/LightMode";
import DarkMode from "../icons/DarkMode";
import { useTheme } from "next-themes";

export default function ThemeSwitchButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className={`ml-auto p-1 rounded-md border-solid ${
        resolvedTheme === "dark" ? "border-gray-500" : "border-black"
      }`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <LightMode /> : <DarkMode />}
    </button>
  );
}
