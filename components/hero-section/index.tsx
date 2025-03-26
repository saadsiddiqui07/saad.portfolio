import React from "react";
import ArrowRight from "../icons/ArrowRight";
import Link from "next/link";
import poppins from "@/styles";
import { PORTFOLIO } from "@/data";

const HeroSection = () => {
  return (
    <div className={`${poppins.className}`}>
      <div className="flex flex-col mt-20 mx-5 md:mt-30 sm:mx-10 md:mx-20">
        <div className="items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl my-4 text-left font-extrabold">
            {PORTFOLIO.title}
          </h1>
          <h5 className="text-lg font-semibold mt-2 mb-1 text-black dark:text-white">
            {PORTFOLIO.company.role} at{" "}
            <a
              href={PORTFOLIO.company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black dark:text-white"
            >
              {PORTFOLIO.company.name}
            </a>
          </h5>
          <span className="text-md text-gray-900 mt-2 sm:mt-0 dark:text-gray-400">
            {PORTFOLIO.expertise}
          </span>
          <div className="flex items-start md:items-center mt-20 flex-col md:flex-row">
            <div className="mt-8 md:mt-0 mx-0 md:mx-6 space-y-2 dark:text-white">
              {PORTFOLIO.links.map((link, index) => (
                <Link
                  key={index}
                  className="flex items-center"
                  href={link.link}
                >
                  <ArrowRight />
                  <b>{link.name}</b>
                </Link>
              ))}
            </div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="mt-8 md:mt-0 mx-0 md:mx-6 space-y-2 text-neutral-900 dark:text-neutral-200">
              {PORTFOLIO.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={social.link}
                    className="flex items-center gap-2"
                  >
                    <Icon />
                    <span className="font-bold">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
