"use client";

import { ArrowDown, ArrowDownRight } from "lucide-react";

import { useEffect } from "react";
import { gsap } from "gsap";

const IntroAnimation = () => {
  useEffect(() => {
    const titles = gsap.utils.toArray(".textRef");
    gsap.from(titles, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col justify-between w-full overflow-hidden items-start bg-gradient-to-b from-white via-[#FAFAF9] to-white text-[#222939]">
      <div className="flex flex-col mt-10 md:mt-16 lg:mt-8">
        <div className="textRef text-[clamp(3.5rem,5.7vw,7rem)] text-[#1C1917] font-semibold ml-6">
          NIKHIL MISHRA
        </div>
        <div className="textRef ml-6 text-[clamp(2rem,3.2vw,5rem)] font-semibold text-[#c0c0c0] -mt-6 md:-mt-7 lg:-mt-10">
          Full Stack Developer
        </div>
      </div>

      <div className="w-52 h-52 absolute right-1/4 rounded-full bg-[#F59E0B] blur-[170px] z-0" />

      <div className="flex flex-row w-full mt-10 md:mt-14 lg:mt-12 items-end justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col md:flex-row w-full justify-between px-4 ">
            <div className="flex textRef flex-row w-full md:w-1/2 items-center px-3 justify-between gap-x-8 md:gap-x-12">
              <div className="flex flex-col items-center text-[#78716C]">
                <span className="font-semibold leading-tight">OUTBREAK</span>
                <span className="text-[11px]">50+ projects</span>
              </div>
              <div className="flex flex-col text-[#78716C] items-center w-full md:w-[340px] font-semibold leading-relaxed text-[clamp(0.85rem,1.5vw,1.1rem)]">
                I build scalable full-stack web applications and turn complex
                problems into working solution
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="textRef hidden md:flex flex-col items-center -mt-28 lg:-mt-32 mr-5 text-[#64748B] font-medium text-[clamp(0.9rem,1.5vw,1.25rem)]">
                <p>STUDENT</p>
                <p>WEBSITES</p>
                <p>UI/UX</p>
              </div>
              <div className="textRef flex flex-row justify-between items-center gap-x-4 rounded-full text-[#1C1917] bg-[#F59E0B] font-medium px-4 py-2 mt-6 md:mt-8 mr-5">
                <p>LET&apos;S TALK</p>
                <ArrowDownRight className="w-5 h-5 -rotate-[24deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="textRef text-[clamp(5rem,11vw,12rem)] tracking-tight leading-[clamp(4.5rem,8.5vw,9rem)] font-semibold mt-6 lg:mt-7 px-4 text-[#1C1917]">
        BUILDING IDEAS THAT LIVES ON WEB
      </div>

      <div className="textRef fixed right-4 bottom-4 p-1 border border-gray-700 rounded-full z-50">
        <ArrowDown className="w-5 h-10" />
      </div>
    </div>
  );
};

export default IntroAnimation;
