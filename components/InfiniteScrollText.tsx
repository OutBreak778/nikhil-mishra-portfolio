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
    const titles = gsap.utils.toArray(".infiniteRef");
    if (!titles) return;
    gsap.from(titles, {
      delay: 2.3,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
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
    xPercent += 0.08 * direction;
  };

  return (
    <main ref={infiniteRef} className="infiniteRef relative flex h-[60px] md:h-[140px] overflow-hidden text-gray-50 bg-black border-t-2 border-b-2 ">
      <div className="absolute w-full">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[8vw] sm:text-[6vw] md:text-[6vw] font-bold pr-12 inline-block"
          >
            About me - Full stack developer - Node.js & Next.js - Python & AI/ML
            -
          </p>
          <p
            ref={secondText}
            className="absolute left-[233%] md:left-[173%] top-0 m-0 text-[8vw] sm:text-[6vw] md:text-[6vw] font-bold pr-1 inline-block -ml-12"
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
