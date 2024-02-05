import React from "react";
import BackIcon from "@/components/icons/BackIcon";
import Steps from "@/components/steps";
import Link from "next/link";
import { SKILLS } from "@/constants";
import Head from "next/head";

const ExperiencePage = () => {
  return (
    <div className="container px-2 py-5 md:py-10 my-10 md:px-1">
      <Head>
        <title>Saad Siddiqui | Experience </title>
      </Head>
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transition duration-200 ease-out hover:scale-125"
        >
          <BackIcon />
        </Link>
        <h1 className="font-bold text-xl">Back</h1>
      </div>

      <main className="mt-4 mx-4">
        <h1 className="text-3xl md:text-4xl">Summary</h1>
        <p className="my-1">
          I am a proficient Javascript developer with a strong grasp of modern
          frontend technologies with hands on industry experience in building
          and shipping productions ready web and mobile apps with React and
          React Native. I specialize in building dynamic and responsive user
          interfaces, leveraging components and state management for seamless
          user experiences. My expertise includes integrating APIs, optimizing
          performance, and ensuring code maintainability through modular design.
          With a passion for creating intuitive and visually appealing
          applications, I have contributed to collaborative development teams,
          consistently delivering high-quality code that meets user needs and
          industry standards.
        </p>
      </main>
      <main className="mt-6 mx-4">
        <h1 className="text-3xl md:text-4xl">Skills</h1>
        <ul className="grid grid-cols-2 gap-3 my-2 md:grid-cols-3">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="w-full rounded bg-zinc-200 p-2 text-center dark:bg-zinc-900"
            >
              {skill}
            </li>
          ))}
        </ul>
      </main>
      <main className="mt-6 mx-4">
        <h1 className="text-3xl md:text-4xl">Industry Experience</h1>
        <Steps />
        <div className="bg-zinc-200 dark:bg-zinc-900 flex flex-row items-center justify-around p-3 md:p-4 rounded-md">
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
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
