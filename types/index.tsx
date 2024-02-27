export interface CardProps {
  id: number;
  text: React.ReactNode;
}
export interface NavbarItemCardProps {
  title: string;
  caption: string;
  link: string;
  kbd: string;
}
export interface BottomNavItemProp {
  title: string;
  link: string;
  icon: JSX.Element;
}
export interface CopyToClipboardProps {
  content: string;
  children: JSX.Element;
}
export interface ToastProps {
  children: JSX.Element;
  content: string;
}
export interface ProjectCardProps {
  // variant: "compact" | "full";
  onGoing: boolean;
  year: string;
  link: string;
  title: string;
  description: string;
  category: string;
  projectType: "Freelance" | "Hobby" | "Side project";
}
// TODO: Create project interface
export interface ProjectsContentProps {}

export interface TableItem {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  category: "videos" | "articles" | "others";
}
