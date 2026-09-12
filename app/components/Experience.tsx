"use client";

import { EXPERIENCE } from "@/constants";
import dynamic from "next/dynamic";

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false },
);

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <MotionH1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </MotionH1>

      <div>
        {EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center group hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
          >
            {/* <MotionDiv
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <p className="mb-2 text-neutral-400">
                {experience.date}
              </p>
            </MotionDiv> */}

            <MotionDiv
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h6 className="mb-2 font-semibold">{experience.title}</h6>

              {experience.company && (
                <p className="mb-3 text-purple-400">{experience.company}</p>
              )}
              <p>{experience.date}</p>

              <p className="mb-4 text-neutral-400">{experience.description}</p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </MotionDiv>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
