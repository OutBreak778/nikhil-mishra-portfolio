"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide, navCurve } from "@/lib/navAnimation";
import NavRouteText from "./NavRouteText";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};
const NavRoute = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateTime = now.toLocaleString("en-IN", {
        hour: "2-digit", // 01, 02
        minute: "2-digit", // 00-59
        second: "2-digit", // 00-59
        hour12: true, // 12-hour format
      });
      setCurrentTime(dateTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      {...anim(menuSlide)}
      className="fixed right-0 top-0 h-screen w-full md:w-[40%] bg-black text-white z-30"
    >
      <div className="flex h-full flex-col justify-between p-10">
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className="flex flex-col text-[56px] gap-3 mt-20"
        >
          <div className="mb-10 text-xs uppercase text-neutral-400 border-b border-neutral-400 pb-1">
            Navigation
          </div>

          {navItems.map((data, index) => (
            <div key={index} className="">
              <NavRouteText
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavRouteText>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-2xl font-sans tracking-tighter text-muted-foreground border-t border-neutral-600 pt-4 flex">
          <span className="font-light mr-2">©</span> {currentTime}
        </div>
      </div>
      <SVG />
    </motion.div>
  );
};
export default NavRoute;

export const SVG = () => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  return (
    <motion.svg className="absolute top-0 -left-[99px] w-[100px] h-[100%] ">
      <motion.path {...anim(navCurve(initialPath, targetPath))} />
    </motion.svg>
  );
};
