"use client";

import Link from "next/link";
import { readNotes } from "@/lib/notes";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default async function NotesPage() {
  const notes = readNotes();
  console.log("NOTEs:", notes);

  const router = useRouter();

  useEffect(() => {
    router.replace("/404");
  }, [router]);

  return (
    <div>
      {notes.map((note: any, index: any) => {
        const slug = note.filePath
          .replace("/notes/", "")
          .replace(".md", "")
          .split("/");

        return (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <h2>
              <Link href={`/notes/${slug.join("/")}`}>
                {note.front_matter.title || note.filePath}
              </Link>
            </h2>
            <p>{note.content.substring(0, 200)}...</p>
            <pre>{JSON.stringify(note.front_matter, null, 2)}</pre>
          </div>
        );
      })}
    </div>
  );
}
