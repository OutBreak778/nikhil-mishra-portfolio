"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  data: {
    id?: string;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    github: string;
    demo: string | null;
    featured: boolean;
    slug: string;
  };
  modal: {
    isActive: boolean;
    index: number;
  };
  setModal: Dispatch<SetStateAction<{ isActive: boolean; index: number }>>;
  index: number;
}

export const ProjectCard = ({ index, data, setModal }: ProjectCardProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setModal({ isActive: true, index });
  };
  const handleMouseLeave = () => {
    if (!isMobile) setModal({ isActive: false, index: -1 });
  };
  return (
    <Link
      href={`/projects/${data.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} // reset index
      className="group relative flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto h-[350px] md:h-[200px] overflow-hidden cursor-pointer md:hover:opacity-40"
    >
      <div className="hidden md:flex px-4 items-center justify-between w-full tracking-normal transition-all duration-300">
        <div className="text-[80px] font-semibold transition-transform duration-700 group-hover:-translate-x-2">
          {data.title}
          {
            data.featured && 
          <span className="absolute left-0 bottom-6 h-1 w-full bg-[#F59E0B] rounded-full scale-x-0 group-hover:scale-x-100 duration-300 transition-transform origin-left"></span>
          }
        </div>
        <div className="text-xl tracking-normal flex flex-col text-[#1b1b1b] font-medium transition-transform duration-200 group-hover:translate-x-2">
          {data.tags.join(", ")}
        </div>
      </div>
      <div className="relative overflow-hidden md:hidden w-full h-full mx-2 my-2 p-3">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={data.images[0]}
            fill
            alt={data.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl border-2"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-1 border-2 -mt-0.5">
          {/* Title */}
          <h3 className="text-xl font-semibold text-black transition-colors duration-200 group-hover:text-gray-700">
            {data.title}
          </h3>

          {/* Separator */}
          <div className="w-full h-px bg-gray-300" />

          {/* Description (Tags) */}
          <p className="text-sm text-gray-600 leading-relaxed flex justify-between">
            {data.description}
            {data.featured && (
              <Badge
                variant="default"
                className="bg-[#F59E0B] text-sm font-medium text-gray-900 rounded-md px-2 py-1"
              >
                featured
              </Badge>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};
