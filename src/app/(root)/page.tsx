import { Button } from "@/components/ui/button";
import { about, projects } from "@/lib/content";
import { categorizedProjects } from "@/lib/utils";
import { ProjectItem } from "@/types";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="text-sm max-w-lg mx-auto my-20 font-mono">
        <h1 className="font-mono text-base font-medium">rohan</h1>
        <p className="text-sm text-neutral-500 mt-1">{about}</p>
        <div className="mt-3 flex gap-3 text-sm">
          <Link
            className="hover:underline"
            href="https://github.com/rohan-kiratsata"
          >
            github
          </Link>
          <Link className="hover:underline" href="https://x.com/sudorohan">
            twitter
          </Link>
        </div>
        <div className="mt-3">
          <h2 className="font-medium text-blue-500">work</h2>
          <div className="px-2 flex flex-col items-start gap-3 mt-3">
            {categorizedProjects.personal.map((project: ProjectItem) => {
              return (
                <div className="">
                  &ndash;
                  <Link href={project.link} className="group tracking-tight">
                    <span className="group-hover:underline">
                      {project.title}
                    </span>{" "}
                    <span className="text-slate-400">
                      {project.description}
                    </span>
                  </Link>
                </div>
              );
            })}
            <h2 className="text-blue-500 font-medium">freelance</h2>
            {categorizedProjects.freelance.map((project: ProjectItem) => {
              return (
                <div className="">
                  &ndash;
                  <Link href={project.link} className="group tracking-tight">
                    <span className="group-hover:underline">
                      {project.title}
                    </span>{" "}
                    <span className="text-slate-400">{project.date}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
