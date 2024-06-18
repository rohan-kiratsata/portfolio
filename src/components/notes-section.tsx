import { readNotes } from "@/lib/notes";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function NotesSection() {
  const notes = readNotes();
  console.log(notes);
  return (
    <>
      <div className="">
        <h2 className="heading">notes</h2>
        <div className="grid grid-cols-1 gap-1 mt-5">
          {notes.map((note: any) => {
            return (
              <NoteCard
                title={note.front_matter.title}
                description={note.content}
                url={note.filePath}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

const NoteCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link href={url} className="border-none group">
      <h2
        className={buttonVariants({
          variant: "link",
          size: "sm",
          className: "!m-0 !p-0 !text-base underline",
        })}
      >
        {title}
      </h2>
      <p className="text-sm text-neutral-500    ">{description}</p>
    </Link>
  );
};
