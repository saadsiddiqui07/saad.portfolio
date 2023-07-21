import React from "react";
import ArrowRight from "../icons/ArrowRight";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="md:max-w-6xl flex-1 md:mx-auto">
      <div className="flex flex-col items-center md:py-10 justify-center mt-20 mx-5 md:mt-40 sm:mx-10 md:mx-20">
        <div className="items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-center">
            <span>{"<>"}</span> Hey! 👋
            <span className="font-bold bg-gradient-to-r from-blue-300 via-teal-300 to-orange-300 text-transparent bg-clip-text bg-300% animate-gradient">
              I’m Saad Siddiqui, React & React Native developer.
            </span>{" "}
            <span>I write code</span> {"</>"}
          </h1>
          <div className="flex items-start md:items-center mt-10 flex-col md:flex-row">
            <div className="mt-8 md:mt-0 mx-0 md:mx-6 space-y-2 text-white">
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
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v19.636H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-bold">Follow me on Twitter</span>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/saadsiddiqui07"
                className="flex items-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9914_10)">
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_9914_10">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-bold">My Github</span>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2"
                href="https://www.linkedin.com/in/saad-siddiqui-0867391a3/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                </svg>
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
