import React, { useState } from "react";

interface CrypticTextProps {
  children: React.ReactNode;
}

export default function CrypticEffect({ children }: CrypticTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: any = null;

  const handleMouseOver = (event: any) => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join();

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOut = (event: any) => {
    clearInterval(interval);
    setIsHovered(false);

    event.target.innerText = children;
  };

  return (
    <>
      <h1
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        data-value={children}
      >
        {children}
      </h1>
    </>
  );
}
