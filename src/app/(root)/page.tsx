import About from "@/components/about";
import Freelance from "@/components/freelance";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3">
        <About />
        <Projects />
        <Freelance />
      </main>
    </>
  );
}
