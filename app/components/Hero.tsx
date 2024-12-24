import React from "react";
import { HERO_CONTENT } from "@/constants";
import profile from "@/assets/profile1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center  lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              <span>Muhammadumar Shaikh</span>
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text text-4xl tracking-tight ">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-2 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 ">
          <div className="flex justify-center">
            <Image src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
