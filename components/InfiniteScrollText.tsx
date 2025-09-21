"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const InfiniteScrollText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const infiniteRef = useRef(null)

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
 
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

    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animation);
    xPercent += 0.04 * direction;
  };

  return (
    <main ref={infiniteRef} className="relative flex h-[80px] md:h-[175px] overflow-hidden text-gray-50 bg-black border-t-2 border-b-2">
      <div className="absolute w-full">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[10vw] md:text-[8vw] font-bold pr-12 inline-block"
          >
            About me - Full stack developer - Node.js & Next.js - Python & AI/ML
            -
          </p>
          <p
            ref={secondText}
            className="absolute left-[287%] md:left-[228%] top-0 m-0 text-[10vw] md:text-[8vw] font-bold pr-1 inline-block -ml-12"
          >
            About me - Full stack developer - Node.js & Next.js - Python & AI/ML
            -
          </p>
        </div>
      </div>
    </main>
  );
};

export default InfiniteScrollText;
