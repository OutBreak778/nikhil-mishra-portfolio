"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Download } from "lucide-react";
import Link from "next/link";

const IntroAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".textRef");
      if (!titles) return;
      gsap.from(titles, {
        yPercent: 40,
        delay: 1.5,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // ✅ kills all animations on unmount
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between w-full overflow-hidden items-start bg-gradient-to-b from-white via-[#FAFAF9] to-white text-[#222939]">
        <div className="flex flex-col mt-10">
          <div className="textRef text-[clamp(3.2rem,5.7vw,7rem)] text-[#1C1917] font-semibold ml-6">
            NIKHIL MISHRA
          </div>
          <div className="textRef ml-6.5 text-[clamp(1.7rem,3.2vw,5rem)] font-semibold text-[#c0c0c0] -mt-6 md:-mt-7 lg:-mt-10">
            Full Stack Developer
          </div>
        </div>

        <div className="textRef w-52 h-52 absolute right-1/4 rounded-full bg-[#F59E0B] blur-[170px]" />

        <div className="flex flex-row w-full mt-10 items-end justify-between">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col md:flex-row w-full justify-between px-4 ">
              <div className="flex textRef flex-row w-full md:w-1/2 items-center px-3 justify-between gap-x-8 md:gap-x-12">
                <a
                  href={"/resume.pdf"}
                  download={"Nikhil-Mishra-Resume.pdf"}
                  className="flex flex-col w-1/3 items-start text-[#78716C]"
                >
                  <span className=" rounded-full flex text-[#1C1917] bg-[#ffb536] font-medium px-4 py-2">
                    Resume <Download className="w-4 h-4 ml-2 mt-1" />
                  </span>
                </a>
                <div className="flex flex-col text-[#78716C] items-center w-3/4 md:w-[360px] font-semibold leading-relaxed text-[clamp(0.85rem,1.5vw,1rem)]">
                  I publish my work openly on GitHub & Colab, and I’m driven to
                  learn fast, ship often, and build with impact.
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="textRef hidden md:flex flex-col items-center -mt-28 lg:-mt-32 text-[#64748B] font-medium text-[clamp(0.9rem,1.5vw,1.25rem)]">
                  <p>STUDENT</p>
                  <p>WEBSITES</p>
                  <p>UI/UX</p>
                </div>
                <div className="group textRef flex flex-row w-full cursor-pointer md:w-fit justify-center md:justify-between items-center gap-x-4 rounded-full text-[#1C1917] text-lg bg-[#fdaf29] font-medium px-4 py-2 mt-6 md:mt-8">
                  <Link href="/contacts">LET&apos;S TALK</Link>
                  {/* <ArrowDownRight className="w-5 h-5 -rotate-[24deg] group-hover:-rotate-45" /> */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rotate-90 group-hover:rotate-45 transition-all duration-200"
                  >
                    <path
                      d="M6 18L18 6M18 6H10M18 6V14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="textRef text-[clamp(5.3rem,11vw,12rem)] tracking-tight leading-[clamp(4.5rem,8.5vw,9rem)] font-semibold mt-12 lg:mt-7 px-4 text-[#1C1917]">
          BUILDING IDEAS THAT LIVES ON WEB
        </div>

        <div className="textRef fixed right-4 bottom-4 h-12 p-1 border border-gray-400 rounded-full z-40 mix-blend-difference">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 animate-bounce mt-2 mix-blend-difference text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              className="mix-blend-difference"
              d="M12 4V20M12 20L18 14M12 20L6 14"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default IntroAnimation;
