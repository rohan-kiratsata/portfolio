import { site } from "@/config";
import { about } from "@/lib/content";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="heading">about</h2>
      <p className="text-base text-neutral-500">{about}</p>
      <p className="text-neutral-300">
        <span className="text-green-400 mt-1">open to new opportunities*</span>{" "}
        //{" "}
        <Link href="mailto:kiratsatarohan@gmail.com">
          kiratsatarohan@gmail.com
        </Link>
      </p>
    </div>
  );
}
