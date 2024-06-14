import { ProjectItem } from "@/types";

export const about: string =
  "Full stack developer and freelancing for more than 4 years. I own a computer and code for living and I love what I do. Some of my other interests are chess, F1, philosophy and hardwares.";

export const projects: ProjectItem[] = [
  {
    title: "netherite",
    link: "https://github.com/rohan-kiratsata/netherite",
    description:
      "visual bookmarking and note taking tools without need of traditional folders",
    label: "in progress",
    category: "personal",
  },
  {
    title: "nlog",
    link: "https://github.com/rohan-kiratsata/nlog/",
    description:
      "an open-source markdown-based blog template built with next.js 14 and tailwindcss.",
    label: "in progress",
    category: "personal",
  },
  {
    title: "WYZth",
    link: "https://wyzth.com/",
    description:
      "worked as freelancer frontend dev for a web-3 startup. Did all of their products' design and frontend",
    category: "freelance",
  },
  {
    title: "Auralam Laminates",
    link: "https://auralamlaminates.com/",
    description:
      "just another business website, built with nuxt.js and tailwindcss.",
    category: "freelance",
  },
];
