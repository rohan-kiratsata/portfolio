import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Rohan Kiratsata - Freelancer, Full Stack Developer",
  description:
    " Full stack developer based in India, full time freelancer with exp. of 3+ years. I build cool apps and websites for startups and businesses and love coding for fun!",
  keywords: [
    "developer",
    "rohan",
    "kiratsata",
    "freelancer",
    "full stack",
    "designer",
    "full stack enginneer",
  ],
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="z-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
