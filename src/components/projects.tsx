import Link from "next/link";
import React from "react";
import { ProjectItem } from "@/types";
import { Button, buttonVariants } from "./ui/button";
import { projects } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { RiArrowRightSLine } from "@remixicon/react";
import { categorizedProjects } from "@/lib/utils";
import ContactButtons from "./contact-buttons";

export default function Projects() {
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
      {/* Contact/Page Buttons */}
      {/* <ContactButtons /> */}
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
    <div className="list-item">
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
      {/*  {label && label !== "completed" ? (
          <Badge variant="secondary" className="!h-fit !px-2 !py-1 !text-xs">
            {label}
          </Badge>
        ) : null} */}{" "}
      &ndash; <span className="text-base text-neutral-500">{description}</span>
    </div>
  );
};
