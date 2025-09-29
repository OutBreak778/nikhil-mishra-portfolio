/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import gsap from "gsap";
import React, { useEffect, useState } from "react";
import allprojects from "@/lib/allprojects.json";
import Modal from "@/components/Modal";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const page = () => {
  const [modal, setModal] = useState({ isActive: false, index: 0 });

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
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    return () => ctx.revert(); // ✅ kills all animations on unmount
  }, []);
  const total = allprojects.length;
  return (
    <div className="w-full min-h-screen flex items-start justify-center mt-6">
      <div className="w-full h-auto max-w-6xl mx-auto text-[#1c1c1c] py-4 overflow-y-hidden mt-12">
        <p className="projectRef text-3xl font-medium text-muted-foreground ml-2 md:-ml-1 absolute -mt-9">
          Recent Works - ({total})
        </p>
        <div className="py-2 divide-y-2 max-w-6xl mx-auto border-t-2 divide-gray-300/80">
          {allprojects.map((item, index) => (
            <ProjectCard
              key={item.id}
              index={index}
              modal={modal}
              setModal={setModal}
              data={item}
              className="projectRef"
            />
          ))}

          <Modal modal={modal} projects={allprojects} />
        </div>
      </div>
    </div>
  );
};

export default page;

interface ProjectCardProps {
  data: {
    id?: string;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    github: string | null;
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
  className?: string;
}

const ProjectCard = ({
  index,
  data,
  setModal,
  className,
}: ProjectCardProps) => {
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

  const openExternal = (e: React.MouseEvent, url: string | null) => {
    e.stopPropagation();
    e.preventDefault();
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Link
      href={`/projects/${data.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} // reset index
      className={cn(
        "group relative flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto h-[350px] md:h-[170px] overflow-hidden cursor-pointer md:hover:opacity-40",
        className
      )}
    >
      <div className="hidden md:flex px-4 items-center justify-between w-full tracking-normal transition-all duration-300">
        <div className="text-[60px] font-medium transition-transform duration-700 group-hover:-translate-x-2">
          {data.title}
          {data.featured && (
            <span className="absolute left-0 bottom-3 h-1 w-full bg-[#F59E0B] rounded-full scale-x-0 group-hover:scale-x-100 duration-300 transition-transform origin-left" />
          )}
        </div>
        <div className="text-xl tracking-normal flex flex-col text-[#5e5e5e] font-medium transition-transform duration-200 group-hover:translate-x-2">
          {data.tags.join(", ")}
        </div>
      </div>
      <div className="relative group overflow-hidden md:hidden w-full h-full mx-2 my-2 p-3 hover:shadow-md">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={data.images[0]}
            fill
            loading="lazy"
            alt={data.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl border-2"
          />
        </div>

        <div className="p-4 space-y-1 border-2">
          <h3 className="text-xl font-semibold group-hover:text-[25px] transition-all duration-300 text-black group-hover:text-gray-700">
            {data.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-1">
            {data.description}
          </p>
          <div className="flex w-full space-x-3">
            <div className="w-full h-7">
              {data.demo ? (
                <div
                  onClick={(e) => openExternal(e, data.demo)}
                  className="bg-blue-500 text-white text-md font-semibold px-2 p-1 rounded-md flex items-center justify-center"
                >
                  <ExternalLink className="w-[18px] h-[18px] mr-2" />
                  Visit Live
                </div>
              ) : (
                <div className="bg-blue-500/40 cursor-not-allowed text-white text-md font-semibold px-2 p-1 rounded-md flex items-center justify-center">
                  <ExternalLink className="w-[18px] h-[18px] mr-2" />
                  Visit Live
                </div>
              )}
            </div>
            <div className="w-full h-7">
              {data.github ? (
                <div
                  onClick={(e) => openExternal(e, data.github)}
                  popoverTarget="abc"
                  popoverTargetAction="show"
                  className="bg-blue-500 text-white text-md font-semibold px-2 p-1 rounded-md flex items-center justify-center"
                >
                  <Github className="w-[18px] h-[18px] mr-2" />
                  Github
                </div>
              ) : (
                <div className="bg-blue-500/40 cursor-not-allowed text-white text-md font-semibold px-2 p-1 rounded-md flex items-center justify-center">
                  <Github className="w-[18px] h-[18px] mr-2" />
                  Github
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
