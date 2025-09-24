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

  useEffect(() => {
    if (!isActive || index === -1 || !modalContainer.current) return;

    const modalEl = modalContainer.current;

    const xMoveContainer = gsap.quickTo(modalEl, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalEl, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf([modalEl]); // ✅ Cleanup
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
 
    </>
  );
}
