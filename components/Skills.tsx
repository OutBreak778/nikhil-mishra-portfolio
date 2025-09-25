import { cn } from "@/lib/utils";
import React from "react";
const Skills = () => {
  return (
    <div className="max-w-[90rem] w-full mx-auto mt-24 mb-10 px-6 pb-12">
      {" "}
      {/* PB keeps footer safe */}
      <div>
        <h1 className="uppercase text-6xl font-semibold">My Skills</h1>
        <p className="text-muted-foreground text-xl font-medium -mt-2 mb-4">
          From UI to backend, AI experiments to real-world websites
        </p>
      </div>
      {/* TOP ROW: 3-column bento — use auto-rows so each column cell equals height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:[grid-auto-rows:1fr] mb-3">
        <CardWrapper hover="hover:bg-red-500/80 hover:text-white">
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
        </CardWrapper>

        <CardWrapper hover="hover:bg-[#F59E0B] hover:text-white">
          <SkillCards
            title="Backend"
            skills={[
              "Node.Js",
              "Express.Js",
              "Python",
              "Flask",
              "REST API",
              "FastAPI",
              "JWT Authentication & Authorization",
            ]}
            expandedDetails={[
              "Scalable Node.js applications with Express",
              "RESTful API and FastAPI design",
              "Authentication and authorization systems (JWT, Clerk)",
            ]}
          />
        </CardWrapper>

        <CardWrapper hover="hover:bg-green-500/80 hover:text-white">
          <SkillCards
            title="Database"
            skills={["MongoDB", "SQL", "MYSQL", "Vercel"]}
            expandedDetails={[
              "MongoDB document design and aggregation",
              "Cloud platforms: Vercel, Render, Mongo Atlas",
            ]}
          />
        </CardWrapper>
      </div>
      {/* BOTTOM ROW: 2-column row — also equalized heights with auto-rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:[grid-auto-rows:1fr]">
        <CardWrapper hover="hover:bg-violet-500/70 hover:text-white">
          <SkillCards
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
              "Authentication management using Clerk",
              "API testing and debugging with Postman",
              "Maintain clean, formatted code using ESLint and Prettier",
            ]}
          />
        </CardWrapper>

        <CardWrapper hover="hover:bg-blue-500/70 hover:text-white">
          <SkillCards
            title="AI & ML — Projects & Experiments"
            skills={[
              "python",
              "Pandas",
              "PyTorch",
              "Tensorflow",
              "Computer vision",
              "Model Training",
            ]}
            expandedDetails={[
              "Simple Image Classifier — build it on google colab to classify the person image happy or not",
              "Data preprocessing scripts & EDA — GitHub",
            ]}
          />
        </CardWrapper>
      </div>
    </div>
  );
};

const CardWrapper: React.FC<{ children: React.ReactNode; hover?: string }> = ({
  children,
  hover = "",
}) => {
  return (
    <div
      className={cn(
        "border-2 shadow-sm rounded-xl transition-all duration-300 p-6 flex flex-col h-full min-h-[230px] md:min-h-[270px]",
        hover
      )}
    >
      {children}
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
