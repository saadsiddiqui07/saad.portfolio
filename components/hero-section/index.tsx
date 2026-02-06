import React from "react";
import ArrowRight from "../icons/ArrowRight";
import Link from "next/link";
import poppins from "@/styles";
import { PORTFOLIO } from "@/data";
import useSmoothScroll from "@/hooks/useSmoothScroll";

const HeroSection = () => {
  useSmoothScroll();

  return (
    <section
      className={`${poppins.className} mt-16 md:mt-24 mx-5 sm:mx-10 md:mx-20`}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
          {PORTFOLIO.name} · {PORTFOLIO.company.role}
        </p>
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 text-left text-black dark:text-white"
        >
          {PORTFOLIO.headline}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-900 dark:text-gray-500 max-w-2xl">
          {PORTFOLIO.subheadline}
        </p>
        {/* <p className="mt-3 text-sm sm:text-base text-gray-800 dark:text-gray-300">
          {PORTFOLIO.expertise}
        </p> */}
      </div>

      <div className="mt-10 flex flex-col md:flex-row md:items-start gap-1 justify-between">
        <div className="space-y-3 md:space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
            Portfolio
          </p>
          {PORTFOLIO.links.map((link, index) => (
            <Link
              key={index}
              className="flex flex-row items-center gap-1 text-sm sm:text-base text-black dark:text-white hover:underline"
              href={link.link}
            >
              <ArrowRight />
              <span className="font-semibold">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* <div className="hidden md:block h-px flex-1 self-stretch bg-gradient-to-r from-yellow-400/70 via-yellow-400 to-yellow-400/70 md:h-32 md:w-px md:bg-gradient-to-b" /> */}

        <div className="space-y-3 md:space-y-2 text-neutral-900 dark:text-neutral-200">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
            Online
          </p>
          {PORTFOLIO.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                rel="noopener noreferrer"
                target="_blank"
                href={social.link}
                className="flex items-center gap-2 text-sm sm:text-base hover:underline"
              >
                <Icon />
                <span className="font-semibold">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
