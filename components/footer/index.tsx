import React from "react";
import poppins from "@/styles";

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} mt-20 mx-5 sm:mx-10 md:mx-20 py-10 border-t border-gray-200 dark:border-gray-800`}
    >
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Want to see more? Check out my resume.
        </p>
        <a
          href="https://docs.google.com/document/d/1Lk4x4mbFPs0Dx4NPvWApvQkt4DdfSt0p/edit?usp=sharing&ouid=115223543982944934460&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-black dark:text-white hover:underline mt-2 inline-block"
        >
          View Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
