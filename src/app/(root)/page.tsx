import About from "@/components/about";
import ContactButtons from "@/components/contact-buttons";
import NotesSection from "@/components/notes-section";
import Projects from "@/components/projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Projects />
        {/* <NotesSection /> */}
        {/* no more wasting time splitting components and making every fucking thing dynamic */}
        {/* <div className="my-10">
          <h1 className="heading">useful links</h1>
          <ul className="">
            <li>
              <Link href="/">
              
              </Link>
            </li>
          </ul>
        </div> */}
        <ContactButtons />
      </main>
    </>
  );
}
