import React, { useState } from "react";
import Steps from "@/components/steps";
import { ABOUT_ME_TEXT, SKILLS } from "@/constants";
import Head from "next/head";
import PagesHeader from "@/components/common/header";

const INITIAL_SKILLS = 15;

const ExperiencePage = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? SKILLS : SKILLS.slice(0, INITIAL_SKILLS);
  return (
    <div className="container px-2 py-5 md:py-10 my-10 md:px-1">
      <Head>
        <title>Saad Siddiqui | Experience </title>
      </Head>
      <PagesHeader />
      <main className="mt-4 mx-4">
        <h1 className="text-3xl md:text-4xl">Summary</h1>
        <p className="my-1">{ABOUT_ME_TEXT}</p>
      </main>
      <main className="mt-6 mx-4">
        <h1 className="text-3xl md:text-4xl">Skills</h1>
        <ul className="grid grid-cols-2 gap-3 my-2 md:grid-cols-3">
          {visibleSkills.map((skill) => (
            <li
              key={skill}
              className="w-full rounded bg-zinc-200 p-2 text-center dark:bg-zinc-900"
            >
              {skill}
            </li>
          ))}
        </ul>
        {SKILLS.length > INITIAL_SKILLS && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {showAll ? "View Less ↑" : "View More ↓"}
            </button>
          </div>
        )}
      </main>
      <main className="mt-6 mx-4">
        <h1 className="text-3xl md:text-4xl">Industry Experience</h1>
        <Steps />
        {/* <div className="bg-zinc-200 dark:bg-zinc-900 flex flex-row items-center justify-around p-3 md:p-4 rounded-md">
          <p className="text-sm md:text-md font-semibold">View my resume 👉🏻</p>
          <a
            href="https://dub.sh/1RkePdM"
            target="_blank"
            download
            className="bg-white hover:opacity-75 transition-all delay-150 hover:ease-out  text-sm px-2 py-1 rounded-sm"
          >
            <span className="font-bold text-black text-xs md:text-sm">
              Resume 📄
            </span>
          </a>
        </div> */}
      </main>
    </div>
  );
};

export default ExperiencePage;
