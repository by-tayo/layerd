import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function readMarkdownDir(dirName: string) {
  const directory = path.join(process.cwd(), "src/content", dirName);
  return fs
    .readdirSync(directory)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fileContents = fs.readFileSync(path.join(directory, filename), "utf8");
      const { data, content } = matter(fileContents);
      return { slug, data, content };
    });
}

export function readMarkdownFile(dirName: string, slug: string) {
  const directory = path.join(process.cwd(), "src/content", dirName);
  const fileContents = fs.readFileSync(path.join(directory, `${slug}.md`), "utf8");
  const { data, content } = matter(fileContents);
  return { slug, data, content };
}
