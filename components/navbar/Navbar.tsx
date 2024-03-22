"use client";

import React, { useEffect, useState } from "react";
import { navbarItems } from "@/utils/content";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Divider,
  Tooltip,
  ModalHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import generateID from "@/utils/generateId";
// import CrypticEffect from "../CrypticEffect";
import ContactSocials from "./ContactSocials";
import { PiNotePencil, PiX } from "@/utils/iconImports";
import CopyToClipboard from "../CopyToClipboard";
import Toast from "../Toast";

type Props = {};

export default function TopNavbar({}: Props) {
  // Hook to manage navbar mene state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Custom hooks to manage modal open
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const router = useRouter();

  // Mapping keys
  const keyToUrlMap = navbarItems.reduce((acc: any, item: any) => {
    if (item.kbd) {
      acc[item.kbd] = item.link;
    }
    return acc;
  }, {});

  useEffect(() => {
    // This function listens to key presses on keyboard and redirects to the page
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
      <Navbar
        className="my-10"
        onMenuOpenChange={setIsMenuOpen}
        position="static"
      >
        <NavbarBrand>
          <Link href={"/"}>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
              <h1 className="text-black text-lg font-monorounded-full">R</h1>
            </div>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          {navbarItems.map((item) => {
            if (item.title === "Contact") {
              return (
                <>
                  <NavbarItem
                    key={generateID("NAVBAR")}
                    className="hidden lg:flex"
                  >
                    <span
                      className="w-full text-white hover:underline font-mono tracking-wide cursor-pointer"
                      onClick={onOpen}
                    >
                      {item.title.toUpperCase()}
                    </span>
                  </NavbarItem>
                  <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    size="2xl"
                    hideCloseButton
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <div className="bg-neutral-800 py-5 px-5 rounded-lg ">
                            {/* Header */}
                            <ModalHeader className="flex justify-between px-0 pb-6 pt-1">
                              <h2 className="text-xl font-sans font-medium">
                                Contact
                              </h2>
                              <div
                                onClick={onClose}
                                className="hover:bg-neutral-700 p-1 rounded-lg cursor-pointer"
                              >
                                <PiX size={18} />
                              </div>
                            </ModalHeader>
                            <div className="">
                              {/* Email */}
                              <span className="text-lg">Email</span>
                              <div className="flex justify-between items-center">
                                <Tooltip
                                  content="Copy email"
                                  placement="bottom"
                                  key="cpy-email"
                                  delay={100}
                                  closeDelay={100}
                                  className="rounded-md"
                                >
                                  <div className="p-2 hover:bg-neutral-700 w-fit rounded-lg duration-100 text-content1 hover:text-white cursor-pointer">
                                    <CopyToClipboard content="kiratsatarohan@gmail.com">
                                      <Toast content="Copied to clipboard">
                                        <span>kiratsatarohan@gmail.com</span>
                                      </Toast>
                                    </CopyToClipboard>
                                  </div>
                                </Tooltip>
                                {/* Componse button */}
                                <Button
                                  size="sm"
                                  variant="bordered"
                                  className="border-1"
                                  as={Link}
                                  href="mailto:kiratsatarohan@gmail.com"
                                >
                                  <PiNotePencil size={18} /> Compose
                                </Button>
                              </div>

                              <Divider className="my-5 opacity-30" />

                              {/* Socials */}
                              <span className="text-lg">Around the web</span>
                              <div className="flex flex-row justify-between items-center">
                                <p className="text-content1">
                                  I&apos;m mostly active on Twitter.
                                </p>
                                <div>
                                  <ContactSocials />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </>
              );
            } else
              return (
                <NavbarItem
                  key={generateID("NAVBAR")}
                  className="hidden lg:flex"
                >
                  <Link
                    className="w-full font-mono tracking-wide"
                    href={item.link}
                    size="md"
                    underline="hover"
                  >
                    {item.title.toUpperCase()}
                  </Link>
                </NavbarItem>
              );
          })}
        </NavbarContent>
        <NavbarMenu className="my-20">
          {navbarItems.map((item) => (
            <NavbarMenuItem key={generateID("NAVBAR-MENU")} className="my-1">
              <Link
                className="w-full font-mono text-3xl"
                href={item.link}
                size="lg"
              >
                {item.title.toUpperCase()}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
