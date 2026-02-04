import React from "react";
import poppins from "@/styles";

const GithubSection = () => {
  return (
    <section
      id="github"
      className={`${poppins.className} mt-20 mx-5 sm:mx-10 md:mx-20 space-y-6`}
      aria-labelledby="github-heading"
    >
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          Code &amp; Experiments
        </p>
        <h2
          id="github-heading"
          className="text-2xl sm:text-3xl font-bold text-black dark:text-white"
        >
          GitHub – Selected public repos and engineering experiments
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
          I use GitHub to share experiments, small utilities, and examples that mirror the kind
          of frontend work I do day-to-day: React/Next.js interfaces, React Native prototypes,
          and AI feature spikes.
        </p>
      </header>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              GitHub profile
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Browse public repos, experiments, and small projects.
            </p>
          </div>
          <a
            href="https://github.com/saadsiddiqui07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-1.5 text-sm font-semibold text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            View GitHub
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          I&apos;m in the process of extracting more code from client work into small,
          self-contained examples that are safe to open-source. If you&apos;d like to see a
          specific pattern (e.g. trading tables, AI prompt flows, or React Native navigation
          setups), I&apos;m happy to walk through it live or share a redacted version.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
          Selected repositories and deeper write-ups are{" "}
          <span className="font-semibold">coming soon</span>. For now, treat this portfolio and
          the linked apps as the primary source of truth for my work.
        </p>
      </div>
    </section>
  );
};

export default GithubSection;

