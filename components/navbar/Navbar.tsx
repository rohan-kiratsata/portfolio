"use client";

import React, { useEffect, useState } from "react";
import { navbarItems } from "@/utils/content";
import { NavbarItemCardProps } from "@/types";
import { useRouter } from "next/navigation";
import { Kbd } from "@nextui-org/kbd";
import generateID from "@/utils/generateId";
import useSound from "use-sound";
import Link from "next/link";
import ContactModal from "./ContactModal";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();

  const keyToUrlMap = navbarItems.reduce((acc: any, item: any) => {
    if (item.kbd) {
      acc[item.kbd] = item.link;
    }
    return acc;
  }, {});

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.key === "/") {
        e.preventDefault();
      } else if (keyToUrlMap[e.key]) {
        router.push(keyToUrlMap[e.key]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyToUrlMap, router]);

  return (
    <>
      {/* border border-content1/30  */}
      <aside className="my-10 bg-background">
        <div className="flex flex-row items-center justify-between">
          <header className="">
            <Link href={"/"} className="">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
                <h1 className="text-black text-lg font-monorounded-full">R</h1>
              </div>
            </Link>
          </header>

          {/* Navbar */}
          <nav className="flex flex-row gap-5">
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
      </aside>
    </>
  );
}

const NavbarItem = ({ title, caption, link, kbd }: NavbarItemCardProps) => {
  // Hooks to trigger modal
  const [isModalOpen, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => setIsOpenModal(false);

  useEffect(() => {
    const openModalOnKeyPress = (e: any) => {
      if (e.key === "/") {
        openModal();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", openModalOnKeyPress);
    return () => {
      window.removeEventListener("keydown", openModalOnKeyPress);
    };
  }, []);

  const isExternalLink = (link: string) => {
    return link.startsWith("http") || link.startsWith("//");
  };

  return (
    <>
      {title === "Contact" ? (
        <>
          <div
            onClick={openModal}
            className="hover:bg-neutral-800 rounded-md h-fit p-1 cursor-pointer inline-flex gap-2"
          >
            <h3>{title}</h3> <Kbd>{kbd}</Kbd>
          </div>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      ) : (
        <>
          {isExternalLink(link) ? (
            <div className="hover:bg-neutral-800 rounded-md h-fit p-1">
              <a href={link} target="_blank" className="inline-flex gap-2">
                <span>{title}</span> <Kbd>{kbd}</Kbd>
              </a>
            </div>
          ) : (
            <div className="hover:bg-neutral-800 rounded-md h-fit p-1">
              <Link href={link} className="inline-flex gap-2">
                <span>{title}</span>
                <Kbd>{kbd}</Kbd>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};
