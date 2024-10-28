import { categorizedProjects } from "@/lib/utils";
import { ProjectCard } from "./projects";
import { ProjectItem } from "@/types";

const Freelance = () => {
  return (
    <>
      <div className="p-5 overflow-y-auto h-auto lg:h-screen">
        <h2 className="heading">freelance work</h2>
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
                date={item.date}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default Freelance;
