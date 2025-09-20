"use client";

import useMousePosition from "@/lib/useMousePosition";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  const slideRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const titles = gsap.utils.toArray(".slideRef");
    if (!titles) return;
    gsap.from(titles, {
      yPercent: 10,
      delay: 2.3,
      opacity: 1,
      duration: 1,
    });
    gsap.to(titles, {
      duration: 0.6,
      ease: "power3.out",
      opacity: 1,
      scrollTrigger: {
        trigger: slideRef.current,
        start: "bottom -81%",
        end: "bottom 255%",
        scrub: true,
      },
      width: "98%",
      borderBottomRightRadius: "65px",
      borderBottomLeftRadius: "65px",
    });
  }, []);

  return (
    <div
      ref={slideRef}
      className="slideRef max-w-full mx-auto transition-all duration-400 h-full bg-black text-gray-50 md:my-2 pb-24 md:pb-0"
    >
      <motion.div
        className="mask text-4xl md:text-5xl w-full md:px-2 px-6 h-full flex items-center justify-center cursor-context-menu"
        animate={
          {
            WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          } as any
        } // <-- cast to any
        transition={{ type: "tween", ease: "backOut", duration: 0.7 }}
      >
        <p
          className="w-[1000px] font-medium -mt-5 md:mt-0"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Skilled in Next.js, Node.js, Python, C++, and TailwindCSS, I enjoy
          blending technical expertise with creativity to design seamless,
          engaging digital experiences. My projects reflect not just engineering
          precision but also an artistic touch—building solutions that are
          efficient, scalable, and visually impactful.
        </p>
      </motion.div>
      <div className="w-full text-4xl md:text-5xl h-full md:px-2 px-6 flex items-center justify-center cursor-context-menu">
        <p className="w-[1000px] font-medium mt-24 md:mt-0">
          I’m <span className="text-[#F59E0B] font-bold">NIKHIL MISHRA</span>, a
          Master’s student in Computer Applications driven by a passion for
          technology and problem-solving. I thrive on{" "}
          <span className="text-[#F59E0B] font-bold">
            learning new concepts
          </span>
          , experimenting with ideas, and turning challenges into impactful
          solutions. I’m constantly expanding my skills while enjoying the
          process of growth and discovery.
        </p>
      </div>
    </div>
  );
};

export default About;
