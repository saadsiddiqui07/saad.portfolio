import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import Head from "next/head";

export default function Home() {
  return (
    <div className="md:max-w-6xl flex-1 md:mx-auto">
      <Head>
        <title>Saad Siddiqui | Software Developer</title>
        <link rel="icon" href="/react-logo.png" sizes="any" />
      </Head>
      <main className="md:mt-20">
        <Header />
        <HeroSection />
      </main>
    </div>
  );
}
