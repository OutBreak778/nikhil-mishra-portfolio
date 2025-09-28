"use client"

import Link from "next/link";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";

interface ProjectsProps {
  project: {
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
}

export const Projects = ({ project }: ProjectsProps) => {
    
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".projectCardRef");
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
    <div className="max-w-6xl mx-auto">
      <header className="px-6 md:px-12 py-4">
        <h1 className="projectCardRef text-6xl md:text-[85px] font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="projectCardRef text-lg text-muted-foreground -mt-1">
          {project.description}
        </p>

        <div className="w-full md:w-1/2 lg:w-1/3 mt-16 space-x-4">
          <div className="projectCardRef space-y-6 mb-5">
            <div className="text-gray-500/60 text-md font-medium uppercase">
              Tags / Usage
            </div>
            <div className="bg-gray-400/30 max-w-5/6 w-full h-[1.5px] rounded-full" />
            <div className="font-medium text-[24px] text-gray-900">
              {project.tags.map((item) => (
                <Badge
                  className="mx-1 my-2 text-[15px]"
                  key={item}
                  variant="outline"
                >
                  <p>{item}</p>
                </Badge>
              ))}
            </div>
          </div>
          {/* <div className="space-y-6 mb-12">
              <div className="text-gray-500/60 text-md font-medium uppercase">
                Featured
              </div>
              <div className="bg-gray-400/30 max-w-5/6 w-full h-[2px] rounded-full" />
              <div className="font-medium text-2xl text-gray-900">
                {project.featured && (
                  <p className="text-xl font-semibold">Featured product</p>
                )}
              </div>
            </div> */}
        </div>
      </header>
      <div className="projectCardRef flex flex-col md:flex-row gap-4 p-4 justify-center w-full items-center mb-5">
        {project.demo ? (
          <Link
            className="border-2 flex items-center duration-300 transition-all justify-center hover:scale-105 group space-x-2 w-full p-3 text-center rounded-md bg-blue-500 text-white font-semibold"
            href={project.demo}
            target="_blank"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-105 delay-75" />
            <span className="group-hover:scale-110 duration-75 transition-all">
              Live Demo
            </span>
          </Link>
        ) : (
          <div className="border-2 flex items-center justify-center space-x-2 w-full p-3 text-center rounded-md bg-blue-500/50 cursor-not-allowed text-white font-semibold">
            <ExternalLink className="w-5 h-5 mr-2" /> <span>Live Demo</span>
          </div>
        )}
        {project.github ? (
          <Link
            className="border-2 flex items-center justify-center duration-300 transition-all hover:scale-105 group space-x-2 w-full p-3 text-center rounded-md bg-white text-black font-semibold"
            href={project.github}
            target="_blank"
          >
            <Github className="w-5 h-5 mr-2 group-hover:scale-105 delay-75" />
            <span className="group-hover:scale-110 duration-75 transition-all">
              Github
            </span>
          </Link>
        ) : (
          <div className="border-2 flex items-center justify-center space-x-2 w-full p-3 text-center cursor-not-allowed rounded-md bg-white text-black font-semibold">
            <Github className="w-5 h-5 mr-2" />
            <span>Github</span>
          </div>
        )}
      </div>

      {project.images?.length ? (
        <section className="projectCardRef grid grid-cols-1 gap-6 mb-12">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative hover:object-cover hover:translate-all hover:duration-300 w-full md:w-full h-96 md:h-[80vh] overflow-hidden hover:rounded-4xl lg border"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-all duration-300"
                // priority={i === 0}
                loading="lazy"
              />
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
};
