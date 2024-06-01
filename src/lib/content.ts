export type ProjectItem = {
  title: string;
  link: string;
  description: string;
  category?: "personal" | "freelance" | "products";
  label?: "completed" | "in progress" | "archived" | "planned";
};

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
];
