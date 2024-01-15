import React from "react";
import { socials } from "@/utils/content";
import Link from "next/link";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <>
      <aside className="md:w-[20%] md:h-screen md:p-5 border-r-1.5 border-neutral-800 flex flex-col justify-between">
        <div className="">
          <header className="mb-8">
            <h1 className="text-white text-lg">ROHAN KIRATSATA</h1>
          </header>
          {/* overview */}
          <div>
            <p className="text-sm font-medium text-content1">
              Developer, Indie Hacker and full-time freelancer based in India.
              Currently building a chrome extension for devs and designers
              @velocity-tools
            </p>
          </div>

          {/*  */}
          <nav className="flex flex-col gap-2 my-10">
            <NavbarItem
              link="/work"
              title="Work"
              caption="Some of my selected work"
            />
            <NavbarItem link="/about" title="About" caption="What i'm bout?" />
            <NavbarItem
              link="/labs"
              title="Labs"
              caption="Making things for fun"
            />
            <NavbarItem
              link="/resources"
              title="Resources"
              caption="Bunch of resources I curated in free time"
            />
          </nav>
        </div>
        {/* socials */}
        <div className="flex gap-4 mt-3">
          {socials.map((item) => (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-content1 hover:text-white text-sm w-fit transition-colors ease-in-out duration-100"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
interface NavbarItemProps {
  title: string;
  caption: string;
  link: string;
}
const NavbarItem = ({ title, caption, link }: NavbarItemProps) => {
  return (
    <>
      <Link href={link}>
        <div className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50">
          <span>{title}</span>
          <p className="text-xs text-content1 font-medium">{caption}</p>
        </div>
      </Link>
    </>
  );
};
