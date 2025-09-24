"use client"

import { curve, translate } from "@/lib/animations";
import { motion } from "framer-motion";

interface svgProps {
  height: number;
  width: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};


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
      className="fixed top-0 left-0 h-[calc(100vh+600px)] w-screen pointer-events-none z-40 "
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath,targetPath))} />
    </motion.svg>
  );
};
