import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "notes");

export function readNotes(directory = notesDirectory) {
  const files = fs.readdirSync(directory);
  let notes: any = [];

  files.forEach((file) => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      notes = notes.concat(readNotes(fullPath));
    } else if (path.extname(file) === ".md") {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      notes.push({
        filePath: fullPath.replace(process.cwd(), ""), // For easier handling later
        front_matter: data,
        content,
      });
    }
  });

  return notes;
}
