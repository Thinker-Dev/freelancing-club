import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";
import BreadCrumb from "../common/bread-crumb";

export function Projects() {
  return (
    <section id="projects" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Our Projects"
          subtitle="Discover some of our most impactful projects that have helped freelancers succeed."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
