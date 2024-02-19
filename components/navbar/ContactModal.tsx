import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence from Framer Motion
import { PiX } from "@/utils/iconImports";

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
            className="bg-zinc-800 py-8 px-5 rounded-md w-[400px]"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-sans font-medium">Contact</h2>
              <div className="hover:bg-neutral-700 p-1 rounded-lg cursor-pointer">
                <PiX onClick={onClose} size={18} />
              </div>
            </div>
            <div className="">
              {/* Email */}
              <div className="">
                <h5>Email</h5>
                <div className="">kiratsatarohan@gmail.com</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
