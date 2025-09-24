"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".projectRef");
      if (!titles) return;
      gsap.from(titles, {
        yPercent: 40,
        delay: 1.5,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // ✅ kills all animations on unmount
  }, []);
  return (
    <div className="projectRef w-full h-screen flex items-center justify-center text-7xl bg-white text-black">
      Hello
    </div>
  );
};

export default page;
