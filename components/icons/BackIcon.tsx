import React from "react";

interface Theme {
  theme: string;
}

const BackIcon = ({ theme }: Theme) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 -50 700 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        className="text-red-500"
        d="M328 112 184 256l144 144"
        stroke={theme === "dark" ? "white" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={35}
      ></path>
    </svg>
  );
};

export default BackIcon;
