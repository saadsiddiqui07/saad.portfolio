import React from "react";
import CodeIcon from "../icons/CodeIcon";

const Steps = () => {
  return (
    <div className="my-5">
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="mt-2 mb-1">
            <div className="flex items-center bg-blue-500 justify-center w-10 h-10 rounded-full">
              <CodeIcon />
            </div>
          </div>
          <div className="w-[1.5px] h-full bg-gray-300 dark:bg-white" />
        </div>
        <div className="pt-1 pb-8">
          <a
            href="https://heisentech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md md:text-lg hover:underline dark:text-gray-300"
          >
            Heisentech Solutions
          </a>
          <p className="text-gray-500 dark:text-gray-400 italic text-xs md:text-sm font-normal">
            July 2022 -- present
          </p>
          <p className="text-xl font-bold mt-2 mb-1">React developer</p>
          <ul className="list-disc text-md dark:text-gray-400 ">
            <li>
              As a frontend developer, I refactored the purchased ReactJS
              template, removing unused code, and organizing components to
              improve maintainability, readability, and minimize potential bugs.
            </li>
            <li>
              I integrated File Upload APIs for PDFs and documents, ensuring
              seamless user uploads with proper validation and error handling,
              and secure backend storage.
            </li>
            <li>
              I revamped routes and components, implementing new styles to align
              with company branding and design guidelines, resulting in a
              polished and consistent user experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="mt-2 mb-1">
            <div className="flex items-center bg-teal-500 justify-center w-10 h-10 rounded-full">
              <CodeIcon />
            </div>
          </div>
          <div className="w-[1.5px] h-full bg-gray-300 dark:bg-white" />
        </div>
        <div className="pt-1 pb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://luciensolutions.com/"
            className="text-md md:text-lg hover:underline dark:text-gray-300"
          >
            Lucien Solutions
          </a>

          <p className="text-gray-500 dark:text-gray-400 italic text-xs md:text-sm font-normal">
            June 2022 - July 2022
          </p>
          <p className="text-xl font-bold mt-2 mb-1">
            React Frontend developer
          </p>
          <ul className="list-disc list-outside text-md dark:text-gray-400 ">
            <li>
              As a frontend developer, I refactored the purchased ReactJS
              template, removing unused code, and organizing components to
              improve maintainability, readability, and minimize potential bugs.
            </li>
            <li>
              I integrated File Upload APIs for PDFs and documents, ensuring
              seamless user uploads with proper validation and error handling,
              and secure backend storage.
            </li>
            <li>
              I revamped routes and components, implementing new styles to align
              with company branding and design guidelines, resulting in a
              polished and consistent user experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="mt-2 mb-1">
            <div className="flex items-center bg-orange-500 justify-center w-10 h-10 rounded-full">
              <CodeIcon />
            </div>
          </div>
          <div className="w-[1.5px] h-full bg-gray-300 dark:bg-white" />
        </div>
        <div className="pt-1 pb-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://luciensolutions.com/"
            className="text-md md:text-lg hover:underline dark:text-gray-300"
          >
            Freelancing
          </a>

          <p className="text-gray-500 dark:text-gray-400 italic text-xs md:text-sm font-normal">
            Jan 2022 - May 2022
          </p>
          <p className="text-xl font-bold mt-2 mb-1">Software developer</p>
          <ul className="list-disc list-outside text-md dark:text-gray-400 ">
            <li>
              As a freelance developer, I refactored the purchased ReactJS
              template, removing unused code, and organizing components to
              improve maintainability, readability, and minimize potential bugs.
            </li>
            <li>
              I integrated File Upload APIs for PDFs and documents, ensuring
              seamless user uploads with proper validation and error handling,
              and secure backend storage.
            </li>
            <li>
              I revamped routes and components, implementing new styles to align
              with company branding and design guidelines, resulting in a
              polished and consistent user experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
