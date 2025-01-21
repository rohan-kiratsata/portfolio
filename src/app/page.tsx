import FreelanceSection from "@/components/freelance";
import ProjectsSection from "@/components/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="my-14">
        <div>
          <h1 className="text-xl font-medium">sudorohan</h1>
          <p className="text-lg text-gray-500">
            cracked full stack engineer. I build apps for fun. part time
            freelancer, currently working as lead frontend engineer. <br />{" "}
            <span className="inline-flex gap-1">
              side quest{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kriyavat.vercel.app"
                className="font-medium text-neutral-900 flex items-center gap-1"
              >
                Kriyavat Labs <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
            </span>
          </p>
        </div>
        <div className="mt-5 space-x-3">
          <Link
            href="/"
            className="primary-btn text-base !bg-neutral-900 !text-white"
          >
            Twitter
          </Link>
          <Link href="/" className="primary-btn text-base">
            Email
          </Link>
          <Link href="/" className="primary-btn text-base">
            Github
          </Link>
        </div>
      </section>
      <ProjectsSection />
      <FreelanceSection />
    </>
  );
}
