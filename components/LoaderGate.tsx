"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoaderGate = () => {
  const logoRef = useRef<HTMLParagraphElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.to(wrapperRef.current, { pointerEvents: "none" });
      },
    });

    // Counter animation
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 2,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(
              counter.value
            ).toString();
          }
        },
      },
      0
    );

    // Logo pulsing + glow
    tl.fromTo(
      logoRef.current,
      { scale: 1, opacity: 0.8 },
      {
        opacity: 1,
        repeat: 3,
        yoyo: true,
        duration: 0.5,
      },
      0
    );

    // Progress bar fill with shimmer
    tl.to(
      ".progressBar",
      {
        width: "100%",
        duration: 1.5,
        ease: "expo.inOut",
      },
      0
    );

    tl.to(
      ".shimmer",
      {
        x: "150%",
        duration: 1.8,
        repeat: 0,
        ease: "power1.inOut",
      },
      0
    );

    // Logo cinematic dissolve
    tl.to(
      logoRef.current,
      {
        scale: 98,
        opacity: 0,
        filter: "blur(30px)",
        duration: 1.2,
        ease: "expo.in",
      },
      "-=0.5"
    );

    // Wrapper fade out
    tl.to(
      wrapperRef.current,
      {
        opacity: 0,
        filter: "blur(30px)",
        duration: 1,
        ease: "power2.out",
      },
      "-=0.3"
    );
  });

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="w-full h-screen absolute flex flex-col space-y-6 items-center justify-center overflow-hidden bg-black z-50"
    >
      {/* Logo N */}
      <p
        ref={logoRef}
        className="text-white text-6xl font-extrabold tracking-widest select-none"
      >
        N
      </p>

      {/* Progress bar */}
      <div className="w-40 h-1 bg-gray-800 rounded-full overflow-hidden relative shadow-inner">
        <div className="progressBar h-full bg-gradient-to-r from-white via-gray-200 to-white w-0">
          <div className="shimmer absolute top-0 left-[-50%] h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
        </div>
        {/* Counter */}
        <p
          ref={counterRef}
          className="bg-white text-sm font-mono tracking-wider"
        >
          0
        </p>
      </div>
    </div>
  );
};

export default LoaderGate;
