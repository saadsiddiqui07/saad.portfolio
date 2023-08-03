import React from "react";
import ArrowRight from "../icons/ArrowRight";
import Link from "next/link";
import TwitterIcon from "../icons/TwitterIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import poppins from "@/styles";

const HeroSection = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="flex flex-col items-center justify-center mt-20 mx-5 md:mt-30 sm:mx-10 md:mx-20">
        <div className="items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center">
            <span className="dark:text-gray-400 text3xl sm:text-4xl md:text-5xl">
              {"<>"}
            </span>{" "}
            Hey!👋
            <span className="font-bold bg-gradient-to-r dark:from-blue-300 dark:via-teal-300 dark:to-orange-300 from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text bg-300% animate-gradient">
              {" "}
              I’m Saad Siddiqui, React & React Native developer.
            </span>{" "}
            <span>I write code </span>
            <span className="text3xl dark:text-gray-400 sm:text-4xl md:text-5xl">
              {"</>"}
            </span>
          </h1>
          <div className="flex items-start md:items-center mt-10 flex-col md:flex-row">
            <div className="mt-8 md:mt-0 mx-0 md:mx-6 space-y-2 dark:text-white">
              <Link className="flex items-center" href="/blogs">
                <ArrowRight />
                <b>My Blogs</b>
              </Link>
              <Link className="flex items-center" href="/experience">
                <ArrowRight />
                <b>Work Experience</b>
              </Link>
              <Link className="flex items-center" href="/contact">
                <ArrowRight />
                <b>Contact Me</b>
              </Link>
            </div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="mt-8 md:mt-0 mx-0 md:mx-6 space-y-2 text-neutral-500">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/saadsiddiquidev"
                className="flex items-center gap-2"
              >
                <TwitterIcon />
                <span className="font-bold">Follow me on Twitter</span>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/saadsiddiqui07"
                className="flex items-center gap-2"
              >
                <GithubIcon />
                <span className="font-bold">My Github</span>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2"
                href="https://www.linkedin.com/in/saad-siddiqui-0867391a3/"
              >
                <LinkedinIcon />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
