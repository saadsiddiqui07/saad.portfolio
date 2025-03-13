import React from "react";
import { useTheme } from "next-themes";
import {LightbulbOffIcon, LightbulbIcon} from 'lucide-react'


export default function ThemeSwitchButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className={`ml-auto w-10 h-10 p-2 bg-gray-200 dark:bg-[#202020] rounded-md border-solid ${
        resolvedTheme === "dark" ? "border-gray-500" : "border-black"
      }`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <LightbulbOffIcon /> : <LightbulbIcon />}
    </button>
  );
}
