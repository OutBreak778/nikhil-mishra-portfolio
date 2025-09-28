"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SVG } from "./SVG";

export default function AnimateTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });

  const [showContent, setShowContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    function resize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setShowContent(false);
    setIsAnimating(true);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="relative"
        initial="initial"
        animate="enter"
        exit="exit"
        onAnimationComplete={() => {
          setIsAnimating(false);
          setShowContent(true);
        }}
      >
        {dimensions.width !== null && dimensions.height !== null && (
          <SVG width={dimensions.width} height={dimensions.height} />
        )}

        {showContent && !isAnimating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
