import React from "react";
import { useTheme } from "next-themes";
import { LightbulbOffIcon, LightbulbIcon } from "lucide-react";

export default function ThemeSwitchButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={`ml-auto w-10 h-10 p-2 bg-gray-200 dark:bg-[#202020] rounded-md border-solid ${
        isDark ? "border-gray-500" : "border-black"
      }`}
      onClick={() => {
        if (!mounted) return;
        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle theme"
    >
      {isDark ? <LightbulbOffIcon /> : <LightbulbIcon />}
    </button>
  );
}
