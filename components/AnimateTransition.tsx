"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SVG } from "./SVG";

// const routes = {
//   "/": "Home",
//   "/about": "About",
//   "/contact": "Contact",
//   "/projects": "Projects",
// };

export default function AnimateTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior:"smooth" });
    }
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <div
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className="fixed -top-72 left-0 h-[calc(100vh+600px)] w-screen pointer-events-none bg-black z-50"
        />

        {dimensions.width !== null && dimensions.height !== null && (
          <SVG width={dimensions.width} height={dimensions.height} />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
