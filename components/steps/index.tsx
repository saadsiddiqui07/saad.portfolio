import React from "react";
import CodeIcon from "../icons/CodeIcon";
import { EXPERIENCE } from "@/constants";

const Steps = () => {
  return (
    <div className="my-5">
      {EXPERIENCE.map((exp, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="mt-2 mb-1">
              <div className="flex items-center bg-blue-500 justify-center w-10 h-10 rounded-full">
                <CodeIcon />
              </div>
            </div>
            <div className="w-[1.5px] h-full bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="pt-1 pb-8 mt-2">
            <a
              href={exp.companyURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md md:text-lg hover:underline dark:text-gray-300"
            >
              {exp.company}
            </a>
            <p className="text-gray-500 dark:text-gray-400 italic text-xs md:text-sm font-normal">
              {exp.startDate} -- {exp.endDate}
            </p>
            <p className="text-xl font-semibold mt-2 mb-1 italic">{exp.role}</p>
            {exp.projects.map((project, index) => (
              <>
                <p className="text-lg font-extrabold mt-8 text-gray-500 dark:text-gray-300">
                  {project.name}{" "}
                  {project.isLive && (
                    <>
                      - {""}
                      <a
                        href={project.appURL}
                        target="_blank"
                        className="font-bold decoration-yellow underline"
                      >
                        App Store
                      </a>{" "}
                      📱
                    </>
                  )}
                  {project.isWebLive && (
                    <>
                      - {""}
                      <a
                        href={project.webURL}
                        target="_blank"
                        className="font-bold decoration-yellow underline"
                      >
                        View live
                      </a>
                    </>
                  )}
                </p>
                <p className="text-sm font-light mb-2 mt-1 text-gray-600 dark:text-gray-300">
                  ℹ️ {project.industry} - {project.status}
                </p>

                <ul className="list-disc text-md dark:text-gray-400 ">
                  {project.contributions.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
                <p className="text-sm font-light italic mt-2 mb-1 text-gray-600 dark:text-gray-300">
                  🛠️ Tech Stack
                </p>
                <div className="mt-2 mb-1 flex flex-row flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <p
                      key={index}
                      className="dark:bg-gray-700 bg-gray-200 text-black rounded-md text-sm dark:text-gray-200 py-1 px-2"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
