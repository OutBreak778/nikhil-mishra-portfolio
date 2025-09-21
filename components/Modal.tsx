"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ModalProps {
  modal: {
    isActive: boolean;
    index: number;
  };
  projects: {
    id?: string;
    title?: string;
    description?: string;
    images: string[];
    tags?: string[];
    github?: string;
    demo?: string | null;
    featured?: boolean;
  }[];
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number], // ✅
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0] as [number, number, number, number], // ✅
    },
  },
};

export default function Modal({ modal, projects }: ModalProps) {
  const { isActive, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    if (!isActive || index === -1) return;

    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isActive, index]);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? "enter" : "closed"}
        className="h-[320px] w-[300px] absolute bg-[#ececec] overflow-hidden flex items-center justify-center pointer-events-none shadow-md border-2 border-gray-500/30 rounded-xl"
      >
        {modal.index >= 0 && (
          <div
            style={{ top: -index * 100 + "%" }}
            className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          >
            {projects.map((project, i) => (
              <div
                className="h-full w-full flex items-center justify-center"
                key={i}
              >
                <Image
                  src={project.images[0]}
                  width={260}
                  height={0}
                  alt={"img"}
                  className="h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* <motion.div
        ref={cursor}
        className="h-24 w-24 rounded-full bg-[#455CE3] text-white absolute flex items-center justify-center text-lg font-medium"
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="w-24 h-24 rounded-full bg-transparent text-white absolute flex items-center justify-center text-lg font-medium"
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? "enter" : "closed"}
      >
        View
      </motion.div> */}
    </>
  );
}
