/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const arrowRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { rotate: -45 },
      {
        rotate: -10,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom -10%",
          scrub: true,
        },
      }
    );
        (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".aboutRef");
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

    return () => ctx.revert(); 
  }, []);
  return (
    <div className="min-h-screen max-w-[90%] mx-auto bg-white text-black py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">
        <p className="aboutRef text-[clamp(3.7rem,4vw,5rem)] md:text-[85px] lg:text-[90px] leading-[1] md:-ml-16 font-semibold tracking-tight text-gray-800">
          Conversations Are Where Great Projects Begin
        </p>
      </div>

      <div className="aboutRef w-full h-[1.5px] my-10 bg-gray-400/50" />

      <div
        ref={sectionRef}
        className="flex flex-row relative items-center justify-between md:items-start gap-1 my-28"
      >
        <svg
          ref={arrowRef}
          viewBox="0 0 24 24"
          className="aboutRef w-28 h-28 md:bg-yellow-500 md:text-white rounded-full -mt-36 md:mt-0 p-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M18 18V10M18 18H10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <p className="aboutRef text-2xl font-medium max-w-[85%] md:text-3xl text-gray-800">
          I’m a developer who loves transforming ideas into clean, functional,
          and scalable products. With every project, I challenge myself to learn
          more, innovate faster, and create with precision.
        </p>
      </div>
      <div className="my-16 px-8">
        <p className=" text-4xl aboutRef  md:text-6xl font-medium text-gray-800 mt-12">
          I can help you with...
        </p>
        <div className="w-full h-full mt-18 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4 aboutRef ">
            <p className="text-xl font-semibold text-muted-foreground">01</p>
            <div className="w-full h-[1px] bg-gray-400" />
            <div className="space-y-4">
              <p className="text-4xl font-semibold text-gray-800">
                Website Development
              </p>
              <p className="text-lg font-medium text-gray-700">
                I build modern, responsive, and user-friendly websites using
                <span className="font-semibold">
                  {" "}
                  Next.js, React, TailwindCSS and many more
                </span>
                . My focus is on clean design, smooth animations, and excellent
                usability.
              </p>
            </div>
          </div>

          <div className="space-y-4 aboutRef ">
            <p className="text-xl font-semibold text-muted-foreground">02</p>
            <div className="w-full h-[1px] bg-gray-400" />
            <div className="space-y-4">
              <p className="text-4xl font-semibold text-gray-800">
                Backend & APIs
              </p>
              <p className="text-lg font-medium text-gray-700">
                Skilled in{" "}
                <span className="font-semibold">
                  Node.js, Express, and databases (MongoDB, PostgreSQL, MySQL)
                </span>
                . I create secure and scalable APIs with proper authentication
                and real-time functionality.
              </p>
            </div>
          </div>

          <div className="space-y-4 aboutRef ">
            <p className="text-xl font-semibold text-muted-foreground">03</p>
            <div className="w-full h-[1px] bg-gray-400" />
            <div className="space-y-4">
              <p className="text-4xl font-semibold text-gray-800">Deployment</p>
              <p className="text-lg font-medium text-gray-700">
                Experienced with{" "}
                <span className="font-semibold">
                  Vercel, GitHub, and cloud databases
                </span>
                . I optimize applications for speed, reliability, and smooth
                deployment pipelines so projects are production-ready from day
                one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
