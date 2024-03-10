// Todo: Prevent scrolling when modal is open
// Todo: Modal overflow on x-axis if the page has scroll

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiNotePencil, PiX } from "@/utils/iconImports";
import { Tooltip } from "@nextui-org/tooltip";
import { Button, Divider } from "@nextui-org/react";
import CopyToClipboard from "@/components/CopyToClipboard";
import Toast from "../Toast";
import Link from "next/link";
import ContactSocials from "./ContactSocials";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 backdrop-blur-[1px] bg-background/30 w-screen h-screen z-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-neutral-800 py-8 px-5 rounded-lg w-[600px]"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-sans font-medium">Contact</h2>
              <div
                onClick={onClose}
                className="hover:bg-neutral-700 p-1 rounded-lg cursor-pointer"
              >
                <PiX size={18} />
              </div>
            </div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
