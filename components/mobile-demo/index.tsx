import poppins from "@/styles";
import React, { useRef, useState } from "react";

const PlayIcon = () => {
  return (
    <svg
      fill="#000000"
      className="h-6 w-6 self-center"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 17.804 17.804"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g id="c98_play">
            {" "}
            <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"></path>{" "}
          </g>{" "}
          <g id="Capa_1_78_"> </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

const MobileDemo = ({
  poster,
  src,
  title,
  href,
}: {
  poster: string;
  src: string;
  title: string;
  href: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center p-1 relative">
      <video
        ref={videoRef}
        // poster={poster}
        playsInline
        autoPlay={isPlaying}
        className="border-gray-500 dark:border-base-300 w-full rounded-3xl border-2"
        loop
      >
        <source type="video/mp4" src={src} />
      </video>
      {!isPlaying && (
        <button
          className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 text-lg text-gray-800 rounded-full shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={handlePlay}
        >
          <PlayIcon />
        </button>
      )}
      <a target="_blank" href={`https://github.com/saadsiddiqui07/${href}`}>
        <small
          className={`${poppins.className} font-bold md:mt-1 hover:underline`}
        >
          {title}
        </small>
      </a>
    </div>
  );
};

export default MobileDemo;
