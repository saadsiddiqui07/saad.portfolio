import React, { useEffect, useRef } from "react";
import Link from "next/link";
import poppins from "@/styles";
import BackIcon from "@/components/icons/BackIcon";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileDemo from "@/components/mobile-demo";

const videos = [
  {
    src: "/videos/headphone.mp4",
    title: "Headphones Carousel 🎧",
    poster: "/posters/headphone-img.png",
    href: "animated-carousel",
  },
  {
    src: "/videos/ios-movies.mp4",
    title: "Movies listing 🎬",
    poster: "/posters/movie-img.png",
    href: "movie-carousel",
  },
  {
    src: "/videos/ios-tabs.mp4",
    title: "Blur Bottom Tabs 🦄",
    poster: "/posters/tab-img.png",
    href: "animations-example-app/blob/main/components/blur-bottomTab/main.tsx",
  },
];

const WorkPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const route = useRouter();
  useEffect(() => {
    // Play each video when the component mounts
    videos.forEach((video) => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    });
  }, [videoRef]); // Run once when component mounts
  return (
    <div className="container px-2 py-5 md:py-10 my-10 md:px-1">
      <Head>
        <title>Saad Siddiqui | Experience </title>
      </Head>
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transition duration-200 ease-out hover:scale-125"
        >
          <BackIcon />
        </Link>
        <h1 className="font-bold text-xl">Back</h1>
      </div>
      <main className="mt-4 mx-4">
        <div className="">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            React Native Animations 🦄
          </h1>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-2 gap-5">
            {videos.map((video, index) => (
              <MobileDemo
                key={index}
                poster={video.poster}
                src={video.src}
                title={video.title}
                href={video.href}
              />
            ))}
          </div>
          <div>
            <p className="my-2">
              Explore examples built with precision using React,{" "}
              <a
                target="_blank"
                href="https://reactnative.dev/"
                className="font-bold hover:underline cursor-pointer text-blue-400"
              >
                React Native{" "}
              </a>
              , TypeScript,{" "}
              <a
                target="_blank"
                href="https://expo.dev/"
                className="font-bold hover:underline cursor-pointer text-slate-400"
              >
                React Native Expo
              </a>
              , and{" "}
              <a
                target="_blank"
                href="https://docs.swmansion.com/react-native-reanimated/"
                className="font-bold hover:underline cursor-pointer text-purple-400"
              >
                React Native Reanimated
              </a>
              . Each project represents a fusion of creativity and technical
              proficiency, demonstrating my passion for delivering intuitive
              user experiences across mobile platforms. From dynamic web
              applications to immersive mobile experiences, My work exemplify my
              commitment to leveraging the latest tools and frameworks to bring
              ideas to life. Dive in and discover the seamless integration of
              innovation and craftsmanship that defines my work on my{" "}
              <a
                target="_blank"
                href="https://github.com/saadsiddiqui07/"
                className="font-bold hover:underline cursor-pointer text-teal-400"
              >
                Github profile
              </a>
              .
            </p>
          </div>
        </div>
        {/* <div className="mt-5">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Apps I have worked on 🛠️📱
          </h1>
        </div> */}
      </main>
    </div>
  );
};

export default WorkPage;
