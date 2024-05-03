export type ProjectItem = {
  title: string;
  link: string;
  description: string;
  category?: "personal" | "freelance" | "products";
  label?: "completed" | "in progress" | "archived" | "planned";
};

export const projects: ProjectItem[] = [
  {
    title: "tools",
    link: "https://github.com/rohan-kiratsata/tools/",
    description:
      "curated list of resources & tools for designers, developers & indie hackers.",
    label: "in progress",
    category: "personal",
  },
  {
    title: "netherite",
    link: "https://github.com/rohan-kiratsata/netherite/",
    description:
      "visual bookmarking and note taking tools without need of traditional folders",
    label: "in progress",
    category: "personal",
  },
  {
    title: "tro/ui",
    link: "/",
    description: "copy and paste tailwind ui components, without dependencies",
    label: "planned",
    category: "personal",
  },
  {
    title: "WYScale",
    link: "https://wyscale.com/",
    description: "crypto based mutual fund investment platform.",
    category: "freelance",
  },
  {
    title: "WYZth",
    link: "https://wyzth.org/",
    description: "startup building crypto ecosystem",
    category: "freelance",
  },
  {
    title: "numerous landing pages and websites",
    link: "/",
    description: "",
    category: "freelance",
  },
];
