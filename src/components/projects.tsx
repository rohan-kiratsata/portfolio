import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ProjectItem, projects } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const categorizedProjects = projects.reduce((acc: any, item: any) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="mt-10">
      <h2 className="heading">projects</h2>
      <div className="mt-5">
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
      {/* Freelance */}
      <div className="">
        {categorizedProjects.freelance && (
          <>
            <h3 className="heading mb-5 mt-10">freelance work</h3>
            {categorizedProjects.freelance.map((item: ProjectItem) => (
              <ProjectCard
                key={item.title}
                title={item.title}
                link={item.link}
                description={item.description}
                category={item.category}
                label={item.label}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  link,
  label,
  category,
}: ProjectItem) => {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <Link
          href={link}
          title={title}
          target="_blank"
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "!m-0 !p-0 !text-base underline",
          })}
        >
          {title}
        </Link>
        {label && label !== "completed" ? (
          <Badge variant="secondary" className="!h-fit !px-2 !py-1 !text-xs">
            {label}
          </Badge>
        ) : null}
      </div>
      <p className="text-base text-neutral-500">{description}</p>
    </div>
  );
};
