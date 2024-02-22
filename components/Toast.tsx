/**
 *  Custom Toast component to show message/content when clicked
 *
 * @param {string} props.content - content to be rendered on toast
 * @param {React.ReactNode} props.children - render the children components
 * @returns {JSX.Element} - JSX element fot this component
 * @dependencies - `framer-motion` is used to animate the entry and exit points of toast
 *
 * @description - more options can be added like placements of the toast.
 * Currently toast is placed at top-center of screen. More styling features can be created.
 * If custom styling features are added then make sure to replace tailwind with vanilla css. Tailwind cannot dynamically concatenate strings together to form a single class name
 * Learn more: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastProps } from "@/types";

const Toast: React.FC<ToastProps> = ({ children, content }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500); // Hide toast after 1.5s
  };

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            key={"Toast"}
            initial={{ opacity: 0, y: -60, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed top-9 left-1/2 transform -translate-x-1/2 bg-gray-50 text-neutral-900 py-2 px-5 z-[9999] rounded-lg"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Toast;
