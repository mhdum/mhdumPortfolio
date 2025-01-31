"use client";
import React from "react";
import {  FaJava, FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const MotionH1 = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.h1),
    { ssr: false }
  );

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <MotionH1 className="my-20 text-center text-4xl"
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}>Technologies</MotionH1>
      <MotionDiv className="flex flex-wrap items-center justify-center gap-4"
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      >
        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="">ReactJS</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <TbBrandNextjs className="text-7xl" />
          <span className="">NextJS</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <span className="">MongoDB</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <span className="">NodeJS</span>
        </MotionDiv>
        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <SiC className="text-7xl text-blue-500" />
          <span className="">C</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiCplusplus className="text-7xl text-blue-500" />
          <span className="">C++</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <FaJava className="text-7xl text-red-500" />
          <span className="">Java</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <SiTypescript className="text-7xl text-blue-600" />
          <span className="">TypeScript</span>
        </MotionDiv>

        <MotionDiv
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiMysql className="text-7xl text-orange-500" />
          <span className="">MySQL</span>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default Technologies;
