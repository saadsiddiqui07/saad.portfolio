import HeroSection from "@/components/hero-section";
import DarkMode from "@/components/icons/DarkMode";
import LightMode from "@/components/icons/LightMode";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <main className="md:max-w-6xl flex-1 md:mx-auto">
      <header className="pt-5 flex mx-5 sm:mx-10 md:mx-20">
        <button
          className={`ml-auto active:border-[0.8px] p-1 rounded-md border-solid ${resolvedTheme === 'dark' ? "border-gray-500" : "border-black"}`}
          onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
        >
          {resolvedTheme === "dark" ? <LightMode /> : <DarkMode />}
        </button>
      </header>
      <HeroSection />
    </main>
  );
}
