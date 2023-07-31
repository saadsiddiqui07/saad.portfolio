import BackIcon from "@/components/icons/BackIcon";
import Steps from "@/components/steps";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const ExperiencePage = () => {
  const { theme } = useTheme();
  return (
    <div className="container px-2 py-5 md:py-10 my-10 md:px-1">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transition duration-200 ease-out hover:scale-125"
        >
          <BackIcon theme={theme!} />
        </Link>
        <h1 className="font-bold text-xl">Back</h1>
      </div>
      <main className="mt-4 mx-4">
        <h1 className="text-3xl md:text-4xl">Experience</h1>
        <Steps />
      </main>
    </div>
  );
};

export default ExperiencePage;
