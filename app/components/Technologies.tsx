import React from "react";
import { FaGit, FaGithub, FaJava, FaNodeJs } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="">ReactJS</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <TbBrandNextjs className="text-7xl" />
          <span className="">NextJS</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiMongodb className="text-7xl text-green-500" />
          <span className="">MongoDB</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaNodeJs className="text-7xl text-green-500" />
          <span className="">NodeJS</span>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiC className="text-7xl text-blue-500" />
          <span className="">C</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiCplusplus className="text-7xl text-blue-500" />
          <span className="">C++</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaJava className="text-7xl text-red-500" />
          <span className="">Java</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiTypescript className="text-7xl text-blue-600" />
          <span className="">TypeScript</span>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <SiMysql className="text-7xl text-orange-500" />
          <span className="">MySQL</span>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaGit className="text-7xl " />
          <span className="">Git</span>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 text-center">
          <FaGithub className="text-7xl " />
          <span className="">GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
