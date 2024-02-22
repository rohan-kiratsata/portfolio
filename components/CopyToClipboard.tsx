/**
 *  Component to copy content to clipboard when clicked
 *
 * @param {object} props - The props object
 * @param {string} props.content - The content to be copied
 * @param {React.ReactNode} props.children - The child component to render
 * @returns {JSX.Element} - JSX element for this components
 */

import React, { useState } from "react";
import { CopyToClipboardProps } from "@/types";

const CopyToClipboard = ({ content, children }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);

  // Handles copying
  const handleCopy = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500); // resetting the hook to `false` after 1.5s
      })
      .catch((err) => console.error("Failed to Copy:", err));
  };

  return <div onClick={handleCopy}>{children}</div>;
};

export default CopyToClipboard;
