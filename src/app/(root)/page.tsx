import About from "@/components/about";
import ContactButtons from "@/components/contact-buttons";
import Freelance from "@/components/freelance";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-exp";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Projects />
        <Freelance />
        {/* <WorkExperience />
        <ContactButtons /> */}
      </main>
    </>
  );
}
