import Link from "next/link";
import React from "react";
import { ProjectItem } from "@/types";
import { buttonVariants } from "./ui/button";
import { categorizedProjects } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="p-5 border-r overflow-y-auto h-auto">
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
              date={item.date}
            />
          ))}
      </div>
      <h2 className="heading mt-10">
        side projects {"("}built during learning phase{")"}
      </h2>
      <div className="mt-5 flex flex-col gap-3">
        {categorizedProjects.products &&
          categorizedProjects.products.map((item: ProjectItem) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              link={item.link}
              description={item.description}
              category={item.category}
              label={item.label}
              date={item.date}
            />
          ))}
      </div>
    </div>
  );
}

export const ProjectCard = ({
  title,
  description,
  link,
  date,
}: ProjectItem) => {
  return (
    <Link
      href={link}
      title={title}
      target="_blank"
      className="border p-3 rounded-lg hover:bg-neutral-900"
    >
      <div className="tracking-wide font-medium">
        {title}{" "}
        <span className="mb-1 text-xs text-neutral-500 group-hover:text-neutral-300">
          {date}
        </span>
      </div>

      <span className="flex-shrink-0 text-sm text-neutral-500 group-hover:text-neutral-300">
        {description}
      </span>
    </Link>
  );
};
