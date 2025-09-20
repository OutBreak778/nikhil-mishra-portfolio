"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

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
  };
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slideshow
  useEffect(() => {
    if (data.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [data.images.length]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-[400px] md:h-[350px] lg:h-[300px] overflow-hidden hover:rounded-4xl cursor-pointer transition-all duration-200 border border-gray-800 bg-[#121212] group">
      
      {/* Left: Image slideshow */}
      <div className="lg:w-1/2 relative overflow-hidden">
        {data.images.map((image, index) => (
          <Image
            key={index}
            width={1000}
            height={1000}
            src={image}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`${data.title} - Image ${index + 1}`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured Badge */}
        {data.featured && (
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className="bg-yellow-500/90 text-black font-semibold"
            >
              Featured
            </Badge>
          </div>
        )}

        {/* Image dots */}
        {data.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {data.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {data.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-3">
          {data.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>

          {data.demo && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
            >
              <a href={data.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
