import { projects } from "@/config/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsSection() {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-lg text-neutral-400 font-medium">projects</h1>
        <div className="mt-3 space-y-1">
          {projects.map((project: any) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="group bg-transparent hover:bg-white transition-colors duration-200 py-3 px-3 rounded-full flex items-center flex-row justify-between h-fit"
    >
      <div className="flex gap-3 items-center">
        <div className="min-h-[3.5rem] min-w-[3.5rem] w-14 h-14 rounded-full bg-purple-400 relative shrink-0 overflow-hidden">
          <Image
            fill
            src={image}
            className="absolute inset-0 object-cover h-full w-full"
            alt={title}
          />
        </div>
        <div>
          <h1 className="text-base font-medium">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      <div className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#000000"
          viewBox="0 0 256 256"
          className="transform transition-all duration-200 opacity-0 translate-x-[-8px] translate-y-[8px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      </div>
    </Link>
  );
};
