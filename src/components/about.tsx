import { site } from "@/config";
import { about } from "@/lib/content";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="heading">about</h2>
      <p className="text-base text-neutral-500">{about}</p>
      <Link href="https://notes.rohankiratsata.xyz" className="font-mono mt-1 text-neutral-100 hover:text-green-400">
      tech notes/blogs
      </Link>
      <p className="text-neutral-100 mt-1">
        open to new opportunitie //{" "}
        <Link href="mailto:kiratsatarohan@gmail.com">
          kiratsatarohan@gmail.com
        </Link>
      </p>
    </div>
  );
}
