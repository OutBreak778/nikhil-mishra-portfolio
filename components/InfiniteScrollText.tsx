"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const InfiniteScrollText = () => {
  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  const infiniteRef = useRef<HTMLElement | null>(null);

  let xPercent = 0;
  let direction = 1;
  const rafId = useRef<number | null>(null); // ✅ persist between renders

  const animation = () => {
    if (!firstText.current || !secondText.current) return; // ✅ Guard

    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    xPercent += 0.04 * direction;
    rafId.current = requestAnimationFrame(animation);
  };

  useEffect(() => {
    if (!slider.current || !infiniteRef.current) return;
    const sliderCurr = slider.current;
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: infiniteRef.current,
        scrub: 0.25,
        start: "top 90%",
        end: "bottom top",
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });

    rafId.current = requestAnimationFrame(animation);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      gsap.killTweensOf(sliderCurr);
    };
  }, []);

  return (
    <main
      ref={infiniteRef}
      className="relative flex h-[80px] md:h-[175px] overflow-hidden text-gray-50 bg-black border-t-2 border-b-2"
    >
      <div className="absolute w-full">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[10vw] md:text-[8vw] font-bold pr-12 inline-block"
          >
            Full Stack Developer • Node.js | Next.js • Python | AI & ML •
          </p>
          <p
            ref={secondText}
            className="absolute left-[287%] md:left-[192%] top-0 m-0 text-[10vw] md:text-[8vw] font-bold pr-1 inline-block -ml-12"
          >
            Full Stack Developer • Node.js | Next.js • Python | AI & ML • -
          </p>
        </div>
      </div>
    </main>
  );
};

export default InfiniteScrollText;
