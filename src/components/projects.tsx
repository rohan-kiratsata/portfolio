import Link from "next/link";
import React from "react";
import { ProjectItem } from "@/types";
import { buttonVariants } from "./ui/button";
import { categorizedProjects } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="mt-10">
      <h2 className="heading">projects</h2>
      <div className="mt-5 flex flex-col gap-3">
        {categorizedProjects.personal &&
          categorizedProjects.personal.map((item: ProjectItem) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              link={item.link}
              description={item.description}
              category={item.category}
              label={item.label}
            />
          ))}
      </div>
    </div>
  );
}

export const ProjectCard = ({ title, description, link }: ProjectItem) => {
  return (
    <Link
      href={link}
      title={title}
      target="_blank"
      className="flex flex-col md:flex-row md:items-center md:space-x-1 overflow-hidden w-full group"
    >
      <div className="flex-shrink-0 text-sm tracking-wide font-medium">
        {title}
      </div>
      <span className="flex-shrink-0 text-sm text-neutral-500 group-hover:text-neutral-300">
        {description}
      </span>
      <hr className="hidden md:block flex-grow border-t border-neutral-600 group-hover:border-neutral-300" />
      <span className="hidden md:inline-block flex-shrink-0 text-xs text-neutral-500 group-hover:text-neutral-300">
        {2024}
      </span>
    </Link>
  );
};
