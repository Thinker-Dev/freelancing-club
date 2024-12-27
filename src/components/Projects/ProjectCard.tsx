import React from "react";
import { ExternalLink } from "lucide-react";
import { Project } from "./types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-primary-foreground text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="mt-4 inline-flex items-center text-primary hover:text-primary/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
