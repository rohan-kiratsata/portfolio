import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Kiratsata - Software Engineer, Freelancer",
  authors: [{ name: "Rohan Kiratasata" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
    >
      <body>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="text-sm max-w-lg mx-auto px-5 md:px-0 my-20 font-mono">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
