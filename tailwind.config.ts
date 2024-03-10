import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
  ],
  theme: {
    hljs: {
      theme: "atom-one-dark",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-highlightjs"),
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#131313",
            content1: "#737373",
            primary: "#fff",
          },
        },
      },
    }),
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
};
export default config;
