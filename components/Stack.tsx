import React from "react";
import {
  DockerIcon,
  ExpressIcon,
  NextIcon,
  PostgreIcon,
  ReactIcon,
  RubyIcon,
  TailwindIcon,
} from "@/utils/iconImports";
import generateID from "@/utils/generateId";
import { Kbd } from "@nextui-org/react";

type Props = {};

export default function Stack({}: Props) {
  const techStack = [
    {
      name: "React",
      icon: <ReactIcon size={42} />,
      docLink: "https://react.dev/",
    },
    {
      name: "Next",
      icon: <NextIcon size={42} />,
      docLink: "https://nextjs.org/",
    },
    {
      name: "Tailwind",
      icon: <TailwindIcon size={42} />,
      docLink: "https://tailwindcss.com/",
    },
    {
      name: "Express",
      icon: <ExpressIcon size={42} />,
      docLink: "https://expressjs.com/",
    },
    {
      name: "Ruby",
      icon: <RubyIcon size={32} />,
      docLink: "https://www.ruby-lang.org/en/",
    },
    {
      name: "PostgreSQL",
      icon: <PostgreIcon size={48} />,
      docLink: "https://www.postgresql.org/",
    },
    {
      name: "Docker",
      icon: <DockerIcon size={52} />,
      docLink: "https://www.docker.com/",
    },
  ];
  return (
    <div className="w-full grid grid-cols-3">
      {techStack.map((item) => {
        return (
          <>
            <a
              href={item.docLink}
              target="_blank"
              rel="noreferrer noopener"
              key={generateID("STACK")}
            >
              <div className="flex items-center justify-center hover:bg-neutral-700 h-[250px] relative">
                <div>{item.icon}</div>
                <Kbd className="font-mono text-xs absolute bottom-3 right-3">
                  {item.name}
                </Kbd>
              </div>
            </a>
          </>
        );
      })}
    </div>
  );
}
