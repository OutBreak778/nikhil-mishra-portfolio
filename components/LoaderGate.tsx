"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { curve, translate } from "../lib/animations";
import { usePathname } from "next/navigation";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/projects": "Projects",
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const pathName = usePathname();

  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [pathName]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setDisplayChildren(children)}
    >
      <motion.div key={pathName}>
        <div
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className="fixed -top-72 left-0 h-[calc(100vh+600px)] w-screen pointer-events-none bg-black z-30"
        />

        {dimensions.width > 0 && <SVG {...dimensions} />}

        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
}

interface svgProps {
  height: number;
  width: number;
}

export const SVG = ({ height, width }: svgProps) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      className="fixed top-0 left-0 h-[calc(100vh+600px)] w-screen pointer-events-none z-40"
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
