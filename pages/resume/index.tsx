import Head from "next/head";
import PagesHeader from "@/components/common/header";
import { Link } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="md:max-w-3xl mx-5 sm:mx-10 md:mx-auto mt-6 mb-16">
      <Head>
        <title>Saad Siddiqui | Resume</title>
      </Head>
      <div className="mb-6">
        <PagesHeader />
      </div>
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
          Resume
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          This page is a concise summary of my frontend experience across React, React
          Native, and Next.js, with a focus on fintech and AI-powered products. A
          downloadable PDF version of my resume is{" "}
          <span className="font-semibold">coming soon</span>.
        </p>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          In the meantime, you can quickly evaluate my work through the{" "}
          <Link href="/#case-studies" className="underline">
            case studies
          </Link>
          ,{" "}
          <Link href="/#writing" className="underline">
            writing samples
          </Link>
          , and{" "}
          <Link href="/work" className="underline">
            selected projects
          </Link>{" "}
          linked on the home page.
        </p>
      </section>
    </div>
  );
}

