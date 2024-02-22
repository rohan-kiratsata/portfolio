import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// Importing font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohan Kiratsata",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`dark text-foreground bg-background`}>
        <Providers>
          <div className="lg:flex lg:flex-row flex-col">
            <Navbar />
            <div className="w-full h-full p-5">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
