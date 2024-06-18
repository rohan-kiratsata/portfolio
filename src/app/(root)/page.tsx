import About from "@/components/about";
import Credits from "@/components/credits";
import Header from "@/components/header";
import Links from "@/components/links";
import NotesSection from "@/components/notes-section";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Projects />
        <NotesSection />
      </main>
    </>
  );
}
