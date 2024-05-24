import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <div className="my-10">{children}</div>
      </div>
    </ThemeProvider>
  );
}
