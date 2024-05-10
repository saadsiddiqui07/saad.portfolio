import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackIcon from "@/components/icons/BackIcon";
import Head from "next/head";
import { useRouter } from "next/router";
import MobileDemo from "@/components/mobile-demo";
import Image from "next/image";
import GithubIcon from "@/components/icons/GithubIcon";
import AppstoreIcon from "@/components/icons/AppstoreIcon";

const APPS = [
  {
    title: "TradeWave",
    deployed: false,
    iosURL:
      "https://apps.apple.com/in/app/dreamlyzer-dream-analysis/id6474172301",
    androidURL: "",
    logo: "/stocksApp/logo.png",
    githubURL: "https://github.com/saadsiddiqui07/stocks-app",
    techStack: [
      "React Native",
      "React Navigation",
      "Redux for State Management",
      "Notifee for Local Push Notifications",
      "React Native Reanimated",
    ],

    images: [
      {
        id: 1,
        iosSrc: "/stocksApp/ios/image-1.png",
        androidSrc: "/stocksApp/android/image-1.png",
        alt: "Home screen",
      },

      {
        id: 2,
        iosSrc: "/stocksApp/ios/image-2.png",
        androidSrc: "/stocksApp/android/image-2.png",
        alt: "Search screen",
      },
      {
        id: 3,
        iosSrc: "/stocksApp/ios/image-3.png",
        androidSrc: "/stocksApp/android/image-3.png",

        alt: "Orders screen",
      },

      {
        id: 4,
        iosSrc: "/stocksApp/ios/image-4.png",
        androidSrc: "/stocksApp/android/image-4.png",
        alt: "Notification screen",
      },
    ],
  },
  {
    title: "Dreamlyzer: Dream Analysis",
    deployed: true,
    iosURL:
      "https://apps.apple.com/in/app/dreamlyzer-dream-analysis/id6474172301",
    androidURL: "",
    logo: "/dreamlyzer/logo.png",
    githubURL: "",
    techStack: [
      "React Native",
      "React Navigation",
      "Reanimated",
      "OpenAI APIs",
      "Cloudflare Workers",
      "React Native SQLite",
      "RevenueCat",
    ],
    images: [
      {
        id: 1,
        iosSrc: "/dreamlyzer/ios/image-1.png",
        androidSrc: "/dreamlyzer/android/image-1.png",
        alt: "Home screen",
      },

      {
        id: 2,
        iosSrc: "/dreamlyzer/ios/image-2.png",
        androidSrc: "/dreamlyzer/android/image-2.png",
        alt: "Search screen",
      },
      {
        id: 3,
        iosSrc: "/dreamlyzer/ios/image-3.png",
        androidSrc: "/dreamlyzer/android/image-3.png",

        alt: "Orders screen",
      },

      {
        id: 4,
        iosSrc: "/dreamlyzer/ios/image-4.png",
        androidSrc: "/dreamlyzer/android/image-4.png",
        alt: "Notification screen",
      },
    ],
  },
];

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
    <div className="work  px-2 py-5 md:py-10 my-10 md:px-1">
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
        <div className="mx-auto">
          <div className="flex flex-row items-center">
            <h1 className="text-xl dark:text-[#94a3b8] text-[#1e293b] font-bold md:text-2xl lg:text-3xl">
              React Native Apps 📱
            </h1>
            {/* <div className="ml-5">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isAndroid}
                />
                <span className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  iOS
                </span>
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Android
                </span>
              </label>
            </div> */}
          </div>
        </div>
        {APPS.map((app, index) => (
          <div key={index} className="mt-5 mb-10 md:mb-14">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={app.logo}
                  alt="logo"
                  height={30}
                  width={30}
                  className="rounded-md"
                />
                <h2 className="text-md md:text-xl lg:text-2xl dark:text-white text-slate-800 font-bold">
                  {app.title}
                </h2>
              </div>
              <a className="cursor-pointer">
                {app.deployed ? (
                  <a href={app.iosURL} target="_blank" rel="non-referrer">
                    <AppstoreIcon />
                  </a>
                ) : (
                  <GithubIcon size={30} />
                )}
              </a>
            </div>
            <div className="flex mt-2 mx-auto flex-row items-center justify-between gap-2 dark:bg-slate-800 bg-gray-200 rounded-md  px-2 py-3 overflow-x-scroll">
              {app.images.map((img) => (
                <Image
                  key={img.id}
                  src={img.iosSrc}
                  alt={img.alt}
                  height={100}
                  width={200}
                  className="rounded-md"
                />
              ))}
            </div>
            <h2 className="font-bold dark:text-gray-300 my-2 text-black">
              Tech Stack 🛠️
            </h2>
            <div className="flex flex-1 gap-2 flex-row flex-wrap items-center">
              {app.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-1 px-2 dark:bg-slate-800 bg-gray-200 rounded-md"
                >
                  <p className="text-center text-sm md:text-md dark:text-white text-black font-thin">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      {/* SECOND OPTION */}
      <main className="mt-8 mx-4">
        <div className="">
          <h1 className="text-xl dark:text-[#94a3b8] text-[#1e293b] font-bold md:text-2xl lg:text-3xl">
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
