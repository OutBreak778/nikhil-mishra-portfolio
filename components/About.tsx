"use client";

import useMousePosition from "@/lib/useMousePosition";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 450 : 40;
  const slideRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const titles = gsap.utils.toArray(".slideRef");
    if (!titles) return;
    gsap.from(titles, {
      yPercent: 20,
      delay: 2.3,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={slideRef}
      className="slideRef max-w-full mx-auto transition-all duration-400 h-full bg-black text-gray-50 z-10 mb-52"
    >
      <motion.div
        className="mask text-4xl md:text-[57px] md:leading-16 w-full md:px-2 px-6 h-full flex items-center justify-center cursor-context-menu"
        animate={
          {
            WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        } // <-- cast to any
        transition={{ type: "tween", ease: "backOut", duration: 0.7 }}
      >
        <p
          className="w-[1000px] font-medium md:mt-0 py-24"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Proficient in Next.js, Node.js, Python, C++, and TailwindCSS, I merge
          technical expertise with creative problem-solving to craft seamless
          and engaging digital experiences. My projects emphasize engineering
          precision and user-focused design—delivering solutions that are
          efficient, scalable, and intuitive.
        </p>
      </motion.div>
      <div className="w-full text-4xl md:text-[57px] md:leading-16 h-full md:px-2 px-6 flex items-center justify-center cursor-context-menu">
        <p className="w-[1000px] font-medium md:mt-0 py-24">
          Hi, I’m{" "}
          <span className="text-[#F59E0B] font-bold">NIKHIL MISHRA</span> — a
          Master’s student specializing in{" "}
          <span className="text-[#F59E0B] font-bold">technology</span> and
          problem-solving. I actively explore emerging tools, experiment with
          ideas, and transform challenges into{" "}
          <span className="text-[#F59E0B] font-bold">impactful solutions</span>.
          With a commitment to continuous growth and innovation, I strive to
          expand my skills while creating value through technology.
        </p>
      </div>
    </div>
  );
};

export default About;
