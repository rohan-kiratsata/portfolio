"use client";

import React from "react";
import { navbarItems } from "@/utils/content";
import Link from "next/link";
import { Kbd } from "@nextui-org/kbd";
import generateID from "@/utils/generateId";
import useSound from "use-sound";
import { useDisclosure } from "@nextui-org/modal";
import { Button, Card } from "@nextui-org/react";
import ContactModal from "./ContactModal";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      {/* Sidebar for xl and 2xl screens */}
      <aside className="hidden xl:flex md:w-[25%] md:h-screen md:p-5 border-r-1.5 border-neutral-800 flex-col justify-between overflow-y-scroll">
        <div className="">
          <header className="mb-8">
            <Link href={"/"} className="w-fit">
              <h1 className="text-white text-lg">ROHAN KIRATSATA</h1>
            </Link>
          </header>

          {/* Navbar */}
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

        {/* Theme mode */}
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
        // TODO: Replace with logic to open modal
        <>
          <div className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50 flex justify-between bg-transparent">
            <div>
              <h3 className="">{title}</h3>
              <p className="text-sm text-content1 font-medium">{caption}</p>
            </div>
            <div>
              <Kbd className="text-xs rounded-md">{kbd}</Kbd>
            </div>
          </div>
        </>
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
