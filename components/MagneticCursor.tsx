"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const MagneticCursor = ({ children }: { children: React.ReactNode }) => {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return <div ref={magnetic}>{children}</div>;
};

// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";

// export const MagneticCursor = ({ children }: { children: React.ReactNode }) => {
//   const cursorRef = useRef<HTMLDivElement | null>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const mouseMove = (e: any) => {
//     const { clientX, clientY } = e;
//     if (cursorRef.current) {
//       const { width, height, top, left } =
//         cursorRef.current.getBoundingClientRect();
//       const x = clientX - (left + width / 2);
//       const y = clientY - (top + height / 2);

//       setPosition({ x, y });
//     }
//   };

//   const mouseLeave = () => {
//     setPosition({ x: 0, y: 0 });
//   };

//   const { x, y } = position;

//   return (
//     <motion.div
//       onMouseMove={mouseMove}
//       onMouseLeave={mouseLeave}
//       ref={cursorRef}
//       animate={{ x, y }}
//       transition={{
//         type: "spring",
//         damping: 15,
//         mass: 0.1,
//         stiffness: 150,
//       }}
//       className="cursor-context-menu"
//     >
//       {children}
//     </motion.div>
//   );
// };
