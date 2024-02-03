import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="flex-1  w-full h-screen bg-gradient-to-r
    dark:from-gray-900
    dark:via-gray-800
    dark:to-neutral-900
    background-animate"
    >
      <div className="md:max-w-6xl flex-1   md:mx-auto">
        <Head>
          <title>Saad Siddiqui | Software Developer</title>
          <link rel="icon" href="/react-logo.png" sizes="any" />
        </Head>
        <main className="pt-5 md:pt-20">
          <Header />
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
