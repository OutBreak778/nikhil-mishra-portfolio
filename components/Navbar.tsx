"use client";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import NavRoute from "./NavRoute";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".navRef");
      if (!titles) return;
      gsap.from(titles, {
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
    <header className="flex justify-between px-4 py-3">
      <Link href="/" className="navRef flex justify-center items-center gap-2">
        <div className="flex">
          <div className="w-9 h-9 flex items-center justify-center text-4xl font-sans p-1 border-[2.3px] border-gray-900 rounded-full">
            <Circle className="w-8 h-8" />
          </div>
        </div>
        <p className={`font-medium text-[40px]`}>NM</p>
      </Link>
      <div
        onClick={() => setIsActive(!isActive)}
        className={cn(
          "flex fixed right-4 flex-col group cursor-pointer rounded-full items-center justify-center md:w-[58px] w-12 h-12 md:h-[58px] bg-[#fff]", isActive ? "z-40" : "z-30 delay-[450ms]" 
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="20"
          viewBox="0 0 34 20"
          stroke="white"
        >
          <line
            x1="0"
            y1="6"
            x2="40"
            y2="6"
            stroke="black"
            strokeWidth="2"
            className={`transition-transform duration-300 text-white origin-center ${
              isActive ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <line
            x1="0"
            y1="14"
            x2={isActive ? "40" : "32"}
            y2="14"
            stroke="black"
            strokeWidth="2"
            className={`transition-transform duration-300 origin-center ${
              isActive ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </svg>
      </div>
      <AnimatePresence mode="wait">{isActive && <NavRoute />}</AnimatePresence>
    </header>
  );
};

export default Navbar;
