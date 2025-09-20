"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import project from "../lib/project.json";

const ProjectPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".hero").forEach((row, i) => {
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
          // delay: i * 0.1, // small stagger effect per row
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-auto mt-24 bg-[#1c1c1c] rounded-t-4xl text-gray-50 px-7 py-4 pb-4">
      <div className="lg:text-[82px] text-5xl mb-8 font-semibold my-24">
        PROJECTS
      </div>

      <div className="p-4">
        <div className="space-y-8 hero border-2 border-gray-50 p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.map((elem, idx) => (
            <div
              key={idx}
              className="lol hero border-2 border-red-500 w-full h-auto flex flex-col"
            >
              <ProjectCard data={elem} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-end text-5xl my-12 group">
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
  );
};

export default ProjectPage;



// "use client";
// import React from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import { ProjectCard } from "@/components/ProjectCard";
// import Link from "next/link";
// import img1 from "../../assets/IMG-20241018-WA0011.jpg";
// import img2 from "../../assets/robot2.jpeg";
// const ProjectPage = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   useGSAP(function () {
//     gsap.from(".hero", {
//       height: "100px",
//       stagger: { amount: 0.4 },
//       scrollTrigger: {
//         trigger: ".lol",
//         start: "top 100%",
//         end: "top -140%",
//         scrub: true,
//       },
//     });
//   });
//   return (
//     <div className="w-full h-auto mt-24 bg-[#1c1c1c] rounded-t-4xl text-gray-50 px-7 py-4 pb-4">
//       <div className="lg:text-[82px] text-5xl mb-8 font-semibold mt-10">
//         {" "}
//         PROJECTS{" "}
//       </div>
//       <div className=" p-4">
//         <div className="-lg:mt-20 lol">
//           {Array(4)
//             .fill(0)
//             .map(function (elem, idx) {
//               return (
//                 <div
//                   key={idx}
//                   className="hero w-full h-[450px] md:h-[400px] lg:h-[350px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
//                 >
//                   <ProjectCard image1={img1} image2={img2} />{" "}
//                 </div>
//               );
//             })}{" "}
//         </div>{" "}
//       </div>
//       <div className="flex items-end justify-end text-5xl my-12">
//         <Link href="/projects" className="flex">
//           {" "}
//           VIEW MORE
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             className="w-12 h-12 ml-4"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />{" "}
//           </svg>{" "}
//         </Link>{" "}
//       </div>{" "}
//     </div>
//   );
// };
// export default ProjectPage;
