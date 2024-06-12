export type SiteConfig = {
  name: string;
  description: string;
  author?: string;
  content: Content[];
};

type Content = {
  about: string;
  projects?: ProjectItem[];
};

type ProjectItem = {
  title: string;
  link: string;
  description: string;
  category?: "personal" | "freelance" | "products";
  label?: "completed" | "in progress" | "archived" | "planned";
};
