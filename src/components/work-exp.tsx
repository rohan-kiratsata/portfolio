import { categorizedProjects } from "@/lib/utils";
import { ProjectCard } from "./projects";
import { ProjectItem } from "@/types";

const WorkExperience = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="heading">work experience</h2>
        <div className="mt-5 flex flex-col gap-3">
          {/* {categorizedProjects.WorkExperience &&
            categorizedProjects.WorkExperience.map((item: ProjectItem) => (
              <ProjectCard
                key={item.title}
                title={item.title}
                link={item.link}
                description={item.description}
                category={item.category}
                label={item.label}
              />
            ))} */}
        </div>
      </div>
    </>
  );
};
export default WorkExperience;
