import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/work/ProjectCard";
import { projectsContent } from "@/utils/content";
import generateID from "@/utils/generateId";
import { Divider } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody } from "@nextui-org/table";
import Example from "./example.mdx";

import React from "react";

export default function Work() {
  return (
    <>
      <div className="w-[80%] mx-auto my-5">
        <PageTitle title="Work" />
        <h4 className="text-lg text-content1">On-going projects</h4>
        {/* <Example /> */}
        {projectsContent.map((item) => {
          if (item.onGoing) {
            return (
              <ProjectCard
                onGoing={item.onGoing}
                year={item.year}
                link={item.link}
                title={item.title}
                category={item.category}
                description={item.description}
                projectType={item.projectType}
                key={generateID("PROJECT")}
              />
            );
          }
        })}
        <h4 className="text-lg text-content1">Previous Projects</h4>
        {projectsContent.map((item) => {
          if (!item.onGoing) {
            return (
              <ProjectCard
                onGoing={item.onGoing}
                year={item.year}
                link={item.link}
                title={item.title}
                category={item.category}
                description={item.description}
                projectType={item.projectType}
                key={generateID("PROJECT")}
              />
            );
          }
        })}
      </div>
    </>
  );
}
