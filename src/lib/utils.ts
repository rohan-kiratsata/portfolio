import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { projects } from "./content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categorizedProjects = projects.reduce((acc: any, item: any) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {});
