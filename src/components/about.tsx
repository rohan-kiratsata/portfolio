import { site } from "@/config";
import { about } from "@/lib/content";
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="heading">about</h2>
      <p className="text-base text-neutral-500">{about}</p>
    </div>
  );
}
