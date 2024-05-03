import About from "@/components/about";
import Credits from "@/components/credits";
import Header from "@/components/header";
import Links from "@/components/links";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <main className="layout">
        <Header />
        <About />
        <Projects />
        {/* <Links /> */}
        <Credits />
      </main>
    </>
  );
}
