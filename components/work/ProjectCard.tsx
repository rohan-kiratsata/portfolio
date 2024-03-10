import React from "react";
import { ProjectCardProps } from "@/types";
import { extractDomain } from "@/utils/extractURL";
import { Link } from "@nextui-org/link";
import { PiInfo } from "@/utils/iconImports";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";

export default function ProjectCard({
  title,
  description,
  category,
  projectType,
  year,
  link,
}: ProjectCardProps) {
  return (
    <>
      <div className="max-w-full flex items-center justify-between my-2 p-2">
        {/* Year */}
        <p className="text-base">{year}</p>
        {/* Title of the project/work */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-sans">{title}</h3>
          <div className="hover:text-white text-content1 cursor-pointer">
            <Popover placement="bottom">
              <PopoverTrigger>
                <PiInfo size={18} />
              </PopoverTrigger>
              <PopoverContent className="bg-neutral-800 py-2">
                <div className="text-tiny font-mono py-1 text-content1">
                  {projectType}
                </div>
                <div className="w-[300px] text-sm">{description}</div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Link href={link} className="underline font-mono text-white">
          {extractDomain(link)}
        </Link>
        <span className="font-mono text-content1 text-sm">{category}</span>
      </div>
    </>
  );
}
