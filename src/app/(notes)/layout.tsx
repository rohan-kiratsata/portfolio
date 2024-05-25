import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../(root)/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export default function NoteLayout({
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
          <div className="max-w-2xl mx-auto">
            <Header />
            <div className="my-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
