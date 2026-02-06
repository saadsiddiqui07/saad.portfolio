import Header from "@/components/Header";
import HeroSection from "@/components/hero-section";
import Head from "next/head";
import CaseStudies from "@/components/case-studies";
import WritingSection from "@/components/writing";
import GithubSection from "@/components/github-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="md:max-w-6xl flex-1 md:mx-auto">
      <Head>
        <title>
          Saad Siddiqui | Frontend Engineer – AI, Fintech, React & React Native
        </title>
        <link rel="icon" href="/react-logo.png" sizes="any" />
      </Head>
      <main className="md:mt-10 mb-16">
        <Header />
        <HeroSection />
        <CaseStudies />
        <WritingSection />
        {/* <GithubSection /> */}
      <Footer />

      </main>
    </div>
  );
}
