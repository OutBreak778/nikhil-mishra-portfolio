"use client";

import useMousePosition from "@/lib/useMousePosition";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 450 : 40;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const titles = gsap.utils.toArray(".slideRef");

    const anim = gsap.from(titles, {
      yPercent: 20,
      delay: 2.3,
      opacity: 1,
      duration: 1,
    });

    return () => {
      anim.kill(); // ✅ cleanup
    };
  }, []);

  return (
    <div className="slideRef max-w-full mx-auto transition-all duration-400 h-full bg-black text-gray-50 z-10 -mt-2">
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
          Proficient in Next.js, Node.js, Python, C++, TailwindCSS, and more, I
          combine technical expertise with creative problem-solving to craft
          seamless digital experiences. My projects focus on efficient,
          scalable, and intuitive solutions. I’m always eager to explore new
          tools and build products that push usability and performance further.
        </p>
      </motion.div>
      <div className="w-full text-4xl md:text-[57px] md:leading-16 h-full md:px-2 px-6 flex items-center justify-center cursor-context-menu">
        <p className="w-[1000px] font-medium md:mt-0 py-24">
          Hi — I’m Nikhil Mishra, a Master’s student and{" "}
          <span className="text-[#ffb22d] underline underline-offset-8 decoration-[#F59E0B]">
            full-stack developer
          </span>{" "}
          . I build clean APIs, clean frontend UI/UX with Next.js, Node, and
          Python and many more.{" "}
          <span className="block mt-3">
            <span className="text-[#ffb22d] underline underline-offset-8 decoration-[#F59E0B]">
              Recent work
            </span>
            : a Pinterest-style image app (JWT auth, uploads), a
            project-scaffolding CLI, and a rate-limit API. Code lives on GitHub;
            ML experiments on Colab.
          </span>{" "}
          <span className="block mt-3">
            {" "}
            {/* Open to internships or mentorship — <br />let’s connect, build and ship. */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
