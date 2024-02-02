"use client";

import React, { useEffect } from "react";
import { navbarItems } from "@/utils/content";
import Link from "next/link";
import { Kbd } from "@nextui-org/kbd";
import generateID from "@/utils/generateId";
import useSound from "use-sound";
import { useRouter } from "next/navigation";

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
      if (keyToUrlMap[e.key]) {
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
      <aside className="hidden lg:flex md:w-[25%] md:h-screen md:p-5 border-r-1.5 border-neutral-800 flex-col justify-between overflow-y-scroll scrollbar-hide">
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

interface BottomNavItemProp {
  title: string;
  link: string;
  icon: JSX.Element;
}

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
