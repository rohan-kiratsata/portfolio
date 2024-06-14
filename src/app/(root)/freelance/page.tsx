import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/content";
import { categorizedProjects } from "@/lib/utils";
import { ProjectItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Freelance() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {categorizedProjects.freelance.map((project: ProjectItem) => (
          <FreelanceCard
            title={project.title}
            url={project.link}
            description={project.description}
          />
        ))}
        <Card className="p-3.5 !flex !flex-col gap-3">
          <div className="flex-1">
            <CardHeader className="p-0">
              <CardTitle className="text-base text-neutral-500 font-mono tracking-tight">
                more wip...
              </CardTitle>
              <CardContent className="text-base p-0 text-neutral-500">
                <p>
                  I get ideas all day, only if I had enough time to build all of
                  them.
                </p>
              </CardContent>
            </CardHeader>
          </div>
        </Card>
      </div>
    </>
  );
}

function FreelanceCard({
  title,
  description,
  icon,
  url,
}: {
  title: string;
  description: string;
  icon?: string;
  url: string;
}) {
  return (
    <Card className="p-3.5 hover:bg-neutral-900 cursor-pointer">
      <Link href={url} className="!flex !flex-col gap-3">
        {icon ? (
          <Image alt={`${title} icon`} width={14} height={14} src={url}></Image>
        ) : (
          <div className="h-16 w-16 bg-neutral-800 rounded-sm"></div>
        )}
        <div className="flex-1">
          <CardHeader className="p-0">
            <CardTitle className="text-lg font-mono tracking-tight">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base p-0 text-neutral-500">
            <p>{description}</p>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
