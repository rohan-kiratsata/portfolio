"use client";

import React from "react";
import { socials, navbarItems } from "@/utils/content";
import Link from "next/link";
import { Kbd } from "@nextui-org/kbd";
import generateID from "@/utils/generateId";
import useSound from "use-sound";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <>
      <aside className="md:w-[25%] md:h-screen md:p-5 border-r-1.5 border-neutral-800 flex flex-col justify-between">
        <div className="">
          <header className="mb-8">
            <Link href={"/"} className="w-fit">
              <h1 className="text-white text-lg">ROHAN KIRATSATA</h1>
            </Link>
          </header>

          {/* navbar */}
          <nav className="flex flex-col gap-2 my-10">
            {navbarItems.map((item) => {
              return (
                <NavbarItem
                  key={generateID("NAV")}
                  link={item.link}
                  title={item.title}
                  kbd={item.kbd}
                  caption={item.caption}
                />
              );
            })}
          </nav>
        </div>
        {/* socials */}
        <div className="flex gap-4 mt-3">
          <h6 className="text-content1 hover:text-white cursor-pointer transition-colors ease-in-out duration-50 ">
            LIGHT
          </h6>
          /
          <h6 className="text-content1 hover:text-white cursor-pointer transition-colors ease-in-out duration-50 ">
            DARK
          </h6>
        </div>
      </aside>
    </>
  );
}
interface NavbarItemCardProps {
  title: string;
  caption: string;
  link: string;
  kbd: string;
}
const NavbarItem = ({ title, caption, link, kbd }: NavbarItemCardProps) => {
  const [play] = useSound("/audio/nock.mp3");

  return (
    <>
      {title === "Contact" ? (
        <Link href={link} onClick={() => play}>
          <div className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50 flex justify-between">
            <div>
              <h3 className="">{title}</h3>
              <p className="text-sm text-content1 font-medium">{caption}</p>
            </div>
            <div>
              <Kbd className="text-xs rounded-md">{kbd}</Kbd>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={link} onClick={() => play}>
          <div className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50 flex justify-between">
            <div>
              <h3 className="">{title}</h3>
              <p className="text-sm text-content1 font-medium">{caption}</p>
            </div>
            <div>
              <Kbd className="text-xs rounded-md">{kbd}</Kbd>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
