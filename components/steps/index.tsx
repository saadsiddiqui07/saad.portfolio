import React, { useState } from "react";

const Steps = () => {
  return (
    <div className="my-5">
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
              <svg
                className="w-4 dark:text-white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="19,15 12,22 5,15"
                />
              </svg>
            </div>
          </div>
          <div className="w-px h-full dark:bg-white" />
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
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
              <svg
                className="w-4 dark:text-white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="19,15 12,22 5,15"
                />
              </svg>
            </div>
          </div>
          <div className="w-px h-full dark:bg-white" />
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
    </div>
  );
};

export default Steps;
