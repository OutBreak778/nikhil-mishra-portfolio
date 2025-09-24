import { cn } from "@/lib/utils";
import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[90rem] w-full mx-auto h-full mt-24 px-6">
      <div className="">
        <h1 className="uppercase text-6xl font-semibold">My Skills</h1>
        <p className="text-muted-foreground text-xl font-medium -mt-2 mb-4">
          From UI to backend, AI experiments to real-world websites
        </p>
      </div>
      <div className="w-full my-10 h-full md:h-[85vh] mt-3">
        <div className="flex flex-col h-full gap-3 mt-10">
          <div className="flex flex-col md:flex-row gap-3 w-full h-full">
            <div className="border-2 shadow-sm md:shadow-none flex w-full md:w-1/3 md:h-full h-fit rounded-xl hover:rounded-[35px] transition-all duration-300 px-4 py-5 hover:bg-red-500/80 hover:text-white">
              <SkillCards
                title="Frontend"
                skills={[
                  "React.Js",
                  "Next.Js",
                  "HTML5",
                  "CSS",
                  "SCSS",
                  "Bootstrap",
                  "TailwindCSS",
                  "Typescript",
                  "Framer Motion",
                  "GSAP",
                ]}
                expandedDetails={[
                  "Advanced React patterns and performance optimization",
                  "Next.js 14+ with App Router and Server Components",
                  "Custom design systems with Tailwind CSS",
                ]}
              />
            </div>
            <div className="border-2 shadow-sm md:shadow-none flex w-full md:w-1/3 md:h-full h-fit rounded-xl hover:rounded-4xl transition-all duration-300 px-4 py-5 hover:bg-[#F59E0B] hover:text-white">
              <SkillCards
                title="Backend"
                skills={[
                  "Node.Js",
                  "Express.Js",
                  "Python",
                  "REST API",
                  "FastAPI",
                  "JWT Authentication",
                ]}
                expandedDetails={[
                  "Scalable Node.js applications with Express",
                  "RESTful API and FastAPI design",
                  "Authentication and authorization systems (JWT, Clerk)",
                ]}
              />
            </div>
            <div className="border-2 shadow-sm md:shadow-none w-full md:w-1/3 md:h-full h-fit rounded-xl hover:rounded-4xl transition-all duration-300 px-4 py-5 hover:bg-green-500/80 hover:text-white">
              <SkillCards
                className="w-full"
                title="Database"
                skills={["MongoDB", "SQL", "MYSQL", "Vercel"]}
                expandedDetails={[
                  "MongoDB document design and aggregation",
                  "Cloud platforms: Vercel, Render, Mongo Atlas",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full h-full">
            <div className="border-2 shadow-sm md:shadow-none w-full md:w-1/2 md:h-full h-fit rounded-xl hover:rounded-4xl transition-all duration-300 px-4 py-5 hover:bg-violet-500/70 hover:text-white">
              <SkillCards
                className="w-full"
                title="Tools and Frameworks"
                skills={[
                  "Git",
                  "Github",
                  "clerk",
                  "Vercel",
                  "Render",
                  "Postman",
                  "Figma (basics)",
                  "Eslint & Prettier",
                ]}
                expandedDetails={[
                  "Advanced Git workflows and branching strategies",
                  "Cloud platforms: Vercel, Render",
                  "Authentication management using Clerk ",
                  "API testing and debugging with Postman",
                  "Maintain clean, formatted code using ESLint and Prettier",
                ]}
              />
            </div>
            <div className="border-2 shadow-sm md:shadow-none w-full md:w-1/2 md:h-full h-fit rounded-xl hover:rounded-4xl transition-all duration-300 px-4 py-5 hover:bg-blue-500/70 hover:text-white">
              <SkillCards
                className="w-full"
                title="AI & ML (learning)"
                skills={[
                  "python",
                  "Pandas",
                  "PyTorch",
                  "Tensorflow",
                  "Computer vision",
                  "Model Training",
                ]}
                expandedDetails={["Still in Learning phase..."]}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

interface SkillCategoryProps {
  title: string;
  description?: string;
  color?: string;
  skills: string[];
  expandedDetails: string[];
  className?: string;
}

export const SkillCards = ({
  title,
  skills,
  expandedDetails,
  className,
}: SkillCategoryProps) => {
  return (
    <div className={cn("w-full h-full ", className)}>
      <p className="text-black text-3xl font-medium">{title}</p>
      <div className="w-full bg-gray-400/50 h-[1px]" />
      <div className=" flex justify-between flex-col h-5/6">
        <p className="font-normal text-lg mt-3">
          {skills.map((item, index) => (
            <span key={index}> • {item}</span>
          ))}
        </p>
        <p className="flex flex-col mt-5 md:mt-0">
          {expandedDetails.map((item, index) => (
            <span key={index}>- {item}</span>
          ))}
        </p>
      </div>
    </div>
  );
};
