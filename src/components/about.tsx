import { site } from "@/config";
import React from "react";

export default function About() {
  return (
    <div>
      <h2 className="heading">about</h2>
      <p className="text-base text-neutral-500">{site.description}</p>
    </div>
  );
}
