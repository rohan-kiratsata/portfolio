import { site } from "@/config";
import { about } from "@/lib/content";
import Link from "next/link";
import React from "react";
import Header from "./header";
import Projects from "./projects";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className="p-5 border-r ">
      <Header />
      <p className="mt-5 text-lg text-neutral-500">{about}</p>
      <p className="text-base text-neutral-500 mt-3">
        Base Tech Stack :{" "}
        <span className="text-white">Next.js, Node.js and Golang</span>
      </p>
      <p className="text-base text-neutral-500">
        Currently Exploring : <span className="text-white">WebRTC, LLMs</span>
      </p>
      <div className="mt-5 flex flex-col gap-2">
        <Button className="w-full" asChild>
          <Link href="mailto:kiratsatarohan@gmail.com">
            Hire me for freelance
          </Link>
        </Button>
      </div>
    </div>
  );
}
