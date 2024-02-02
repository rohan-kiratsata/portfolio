"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiX } from "@/utils/iconImports";
import { onboardingContent } from "@/utils/content";
import { CardProps } from "@/types";

const Onboarding = () => {
  const [cards, setCards] = useState<CardProps[]>(onboardingContent);

  const removeCard = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const resetCards = () => {
    setCards(onboardingContent);
  };

  return (
    <div className="my-5">
      <p className="text-sm font-mono text-content1 inline-flex gap-3">
        Take a quick onboarding tour to my website!
        {cards.length === 0 ? (
          <div className="text-white" onClick={resetCards}>
            Reset Onboarding
          </div>
        ) : null}
      </p>
      <div className="flex flex-wrap justify-start items-center my-4">
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              layout
              className="py-3 h-full px-10 max-w-[300px] hover:bg-neutral-800 border-r border-neutral-800 relative text-content1 text-sm group flex flex-col"
            >
              <button
                onClick={() => removeCard(card.id)}
                className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 text-sm text-content1 p-1 rounded transition-all ease-in-out duration-75"
              >
                <PiX />
              </button>

              <div>{card.text}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
