import "../(root)/globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import MainSidebar from "@/components/layout/main-sidebar";

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
          <div className="max-w-7xl mx-auto bg-gray-500/20 flex flex-row py-5">
            {/* Sidebar */}

            <MainSidebar />
            <div className="my-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
