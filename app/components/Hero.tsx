"use client";
import React from "react";
import { HERO_CONTENT } from "@/constants";
import profile from "@/assets/profile2.jpg";
import Image from "next/image";

import dynamic from "next/dynamic";

const Hero = () => {
  const MotionH1 = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.h1),
    { ssr: false }
  );

  const MotionSpan = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.span),
    { ssr: false }
  );

  const MotionP = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.p),
    { ssr: false }
  );

  const MotionImg = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false }
  );

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 sm:mt-10">
      <div className="flex flex-wrap items-center justify-between lg:px-8">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-between lg:items-start">
            <div>
              <MotionH1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-10 text-5xl font-thin tracking-tight lg:mt-5 lg:text-7xl"
              >
                Muhammadumar Shaikh
              </MotionH1>
              <MotionSpan
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl tracking-tight"
              >
                Full Stack Developer
              </MotionSpan>
            </div>
            <MotionP
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-2 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </MotionP>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex mx-6 justify-end lg:mt-16">
            <MotionImg
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Image src={profile} alt="profile" />
            </MotionImg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
