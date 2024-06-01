import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import { site } from "@/config";

export const metadata: Metadata = {
  title: "Rohan Kiratsata - Freelancer, Full Stack Developer",
  description: site.description,

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="layout">
            <Header />
            <div className="my-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
