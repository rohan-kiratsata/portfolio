import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohan Kiratsata - Software Engineer, Freelancer",
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
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
