"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import project from "../lib/project.json";
import Modal from "./Modal";

const ProjectPage = () => {
  const [modal, setModal] = useState({ isActive: false, index: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".hero").forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          // delay: i * 0.1, 
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-auto mt-36 text-[#1c1c1c] py-4 overflow-y-hidden">
      <div className="lg:text-[82px] md:text-end text-6xl md:text-7xl my-24 text-center md:px-36">
        <span className="font-semibold text-gray-900 w-full text-end rounded-full px-8">
        PROJECTS
        </span>
      </div>

      <div
        className="mt-24 divide-y-2 max-w-6xl mx-auto border-t-2 py-2 divide-gray-300/80"
      >
        <p className="divide-none border-none -mt-12 text-xl text-muted-foreground ml-12">
          Recent Works
        </p>
        {project.map((item, index) => (
          <ProjectCard
            key={item.id}
            index={index}
            modal={modal}
            setModal={setModal}
            data={item}
          />
        ))}
        <Modal modal={modal} projects={project} />

      <div className="flex items-end justify-end text-5xl my-20 md:-mr-24 mr-4 group">
        <Link
          href="/projects"
          className="flex group-hover:scale-105 transition-all duration-200"
        >
          VIEW MORE
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-12 h-12 ml-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      </div>

    </div>
  );
};

export default ProjectPage;