import React from "react";
import poppins from "@/styles";
import { CASE_STUDIES } from "@/data";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className={`${poppins.className} mt-20 mx-5 sm:mx-10 md:mx-20 space-y-12`}
      aria-labelledby="case-studies-heading"
    >
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
          {CASE_STUDIES.header.label}
        </p>
        <h2
          id="case-studies-heading"
          className="text-2xl sm:text-3xl font-bold text-black dark:text-white"
        >
          {CASE_STUDIES.header.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
          {CASE_STUDIES.header.description}
        </p>
      </header>

      {CASE_STUDIES.studies.map((study) => (
        <article
          key={study.id}
          className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5 sm:p-6"
        >
          <header>
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
              {study.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {study.tags}
            </p>
          </header>

          <div
            className={`grid gap-6 ${
              study.aside ? "md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]" : ""
            }`}
          >
            <div className="space-y-3 text-sm sm:text-base text-gray-800 dark:text-gray-200">
              {study.sections.map((section, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {section.heading}
                  </p>
                  {section.content && <p>{section.content}</p>}
                  {"subContent" in section && section.subContent && (
                    <p className="mt-2">{section.subContent}</p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      {section.list.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          {"label" in item && item.label && (
                            <span className="font-semibold">{item.label} </span>
                          )}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && <p className="mt-2">{section.footer}</p>}
                </div>
              ))}
            </div>

            {study.aside && (
              <aside className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {study.aside.screenshots && (
                  <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {study.aside.screenshots.title}
                    </p>
                    <p className="mt-1">{study.aside.screenshots.description}</p>
                  </div>
                )}
                {study.aside.demo && (
                  <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {study.aside.demo.title}
                    </p>
                    <p className="mt-1">{study.aside.demo.description}</p>
                  </div>
                )}
                {study.aside.notes && (
                  <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {study.aside.notes.title}
                    </p>
                    <p className="mt-1">{study.aside.notes.description}</p>
                  </div>
                )}
              </aside>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export default CaseStudies;

