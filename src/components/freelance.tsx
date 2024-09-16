import { categorizedProjects } from "@/lib/utils";
import { ProjectCard } from "./projects";
import { ProjectItem } from "@/types";

const Freelance = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="heading">freelance</h2>
        <div className="mt-5 flex flex-col gap-3">
          {categorizedProjects.freelance &&
            categorizedProjects.freelance.map((item: ProjectItem) => (
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
        <p className="text-sm text-neutral-500 mt-3">
          The rest of my work is non-disclosed. Apart from these projects, I
          have built numerous landing pages for businesses through Upwork.
        </p>
      </div>
    </>
  );
};
export default Freelance;
