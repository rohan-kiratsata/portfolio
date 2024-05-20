import fs from "fs";
import path, { relative } from "path";
import matter from "gray-matter";
import { readNotes } from "@/lib/notes";

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
  console.log("PARAMS:", params);

  const slugPath = params.slug;
  const fullPath = path.join(notesDirectory, `${slugPath}.md`);

  console.log("FULL PATH:", fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  console.log("FILE CONTENTS:", fileContents);
  const { data, content } = matter(fileContents);

  return (
    <div>
      <h1>{data.title || slugPath}</h1>
      <div>{content}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
