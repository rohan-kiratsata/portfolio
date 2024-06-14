"use client";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readNotes } from "@/lib/notes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const notesDirectory = path.join(process.cwd(), "notes");

console.log("NOTES: ", notesDirectory);

export async function generateStaticParams() {
  const notes = readNotes();

  return notes.map((note: any) => {
    const relativePath = note.filePath.replace(/\\/g, "/");
    console.log("RELATIVE PATH:", relativePath);
    const slug = relativePath
      .replace("/notes/", "")
      .replace(".md", "")
      .split("/");
    console.log("SLUG:", slug);
    return {
      slug: slug,
    };
  });
}

export default async function NotePage({ params }: { params: any }) {
  const router = useRouter();

  useEffect(() => {
    router.replace("/404");
  }, [router]);

  console.log("PARAMS:", params);

  const slugPath = params.slug.map(decodeURIComponent).join("/");
  const fullPath = path.join(notesDirectory, `${slugPath}.md`);

  console.log("FULL PATH:", fullPath);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return (
      <div>
        <h1>{data.title || slugPath}</h1>
        <div>{content}</div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return <div>Note not found</div>;
  }
}
