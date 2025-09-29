"use client";
import { useEffect, useRef, ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (scrollRef.current) {
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.08,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
      }
    };
    initScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
