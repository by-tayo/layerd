import fs from "fs";
import path from "path";
import matter from "gray-matter";

const markdownExt = /\.mdx?$/;

export function readMarkdownDir(dirName: string) {
  const directory = path.join(process.cwd(), "src/content", dirName);
  return fs
    .readdirSync(directory)
    .filter((f) => markdownExt.test(f))
    .map((filename) => {
      const slug = filename.replace(markdownExt, "");
      const fileContents = fs.readFileSync(path.join(directory, filename), "utf8");
      const { data, content } = matter(fileContents);
      return { slug, data, content };
    });
}

export function readMarkdownFile(dirName: string, slug: string) {
  const directory = path.join(process.cwd(), "src/content", dirName);
  const filePath = [".md", ".mdx"]
    .map((ext) => path.join(directory, `${slug}${ext}`))
    .find((candidate) => fs.existsSync(candidate));
  if (!filePath) {
    throw new Error(`No markdown file for "${slug}" in ${dirName}`);
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, data, content };
}
