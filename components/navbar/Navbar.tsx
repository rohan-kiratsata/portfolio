"use client";

import React, { useEffect, useState } from "react";
import { navbarItems } from "@/utils/content";
import { BottomNavItemProp, NavbarItemCardProps } from "@/types";
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
      {/* Sidebar for xl and 2xl screens */}
      <aside className="hidden lg:flex md:w-[25%] md:h-screen md:p-5 border-r-1.5 border-neutral-800 flex-col justify-between overflow-y-scroll scrollbar-hide sticky top-0">
        <div className="">
          <header className="mb-8">
            <Link href={"/"} className="w-fit">
              <h1 className="text-white text-lg font-mono">ROHAN KIRATSATA</h1>
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

        {/* TODO: Add theme mode to overall website*/}

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

      {/* Bottom navigation for smaller screen: sm, md */}
      <nav className="lg:hidden shadow-lg py-3 fixed bottom-0 right-0 left-0">
        <div className="flex justify-around">
          {navbarItems.map((item) => (
            <BottomNavItem
              key={generateID("NAV_BOTTOM")}
              link={item.link}
              title={item.title}
              icon={item.icon} // Add icon property to each item in navbarItems
            />
          ))}
        </div>
      </nav>
    </>
  );
}

const NavbarItem = ({ title, caption, link, kbd }: NavbarItemCardProps) => {
  const [play] = useSound("/audio/nock.mp3");

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

  return (
    <>
      {title === "Contact" ? (
        <>
          <div
            onClick={openModal}
            className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50 flex justify-between bg-transparent cursor-pointer"
          >
            <div>
              <h3 className="">{title}</h3>
              <p className="text-sm text-content1 font-medium">{caption}</p>
            </div>
            <div>
              <Kbd className="text-xs rounded-md">{kbd}</Kbd>
            </div>
          </div>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      ) : (
        <Link href={link} onClick={() => play}>
          <div className="rounded-lg border-1.5 border-neutral-800 py-2.5 px-2.5 hover:border-white transition-colors ease-in-out duration-50 flex justify-between cursor-pointer">
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

function BottomNavItem({ title, link, icon }: BottomNavItemProp) {
  const [play] = useSound("/audio/nock.mp3");

  return (
    <Link href={link} onClick={() => play}>
      <div className="flex flex-col items-center">
        {icon}
        <span className="text-xs mt-1">{title}</span>
      </div>
    </Link>
  );
}
