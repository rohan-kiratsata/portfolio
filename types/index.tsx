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

export interface ProjectsContentProps {}
