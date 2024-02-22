export interface CardProps {
  id: number;
  text: string;
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
