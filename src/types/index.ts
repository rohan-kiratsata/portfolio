export type SiteConfig = {
  name: string;
  description: string;
  author?: string;
};

export type ProjectItem = {
  title: string;
  link: string;
  description: string;
  category?: "personal" | "freelance" | "products";
  label?: "completed" | "in progress" | "archived" | "planned";
};
