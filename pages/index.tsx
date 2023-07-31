import HeroSection from "@/components/hero-section";
import DarkMode from "@/components/icons/DarkMode";
import LightMode from "@/components/icons/LightMode";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="md:max-w-6xl flex-1 md:mx-auto">
      <header className="pt-10 flex mx-5 sm:mx-10 md:mx-20">
        <button
          className="ml-auto"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? <LightMode /> : <DarkMode />}
        </button>
      </header>
      <HeroSection />
    </main>
  );
}
