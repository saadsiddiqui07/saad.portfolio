import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="md:max-w-6xl flex-1 md:mx-auto">
      <Header />
      <HeroSection />
    </main>
  );
}
