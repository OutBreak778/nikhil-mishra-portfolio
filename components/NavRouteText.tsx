import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "@/lib/navAnimation";
import { cn } from "@/lib/utils";

interface NavRouteTextProps {
  data: {
    title: string;
    href: string;
    index: string | number;
  };
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const NavRouteText = ({
  data,
  isActive,
  setSelectedIndicator,
}: NavRouteTextProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center bg-black w-full"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      {...anim(slide)}
      {...anim(scale)}
    >
      <Link
        href={href}
        className={cn(
          "font-medium w-full flex items-center",
          isActive ? "text-[#F59E0B]" : "text-white hover:text-[#F59E0B]"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 58 58"
        >
          <circle
            cx="29"
            cy="29"
            r="10"
            stroke="black"
            strokeWidth="4"
            fill={isActive ? "white" : "black" }
          />
        </svg>
        {title}
      </Link>
    </motion.div>
  );
};

export default NavRouteText;
