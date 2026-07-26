import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  topic: string;
};

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf8"
    );
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title as string,
      subtitle: data.subtitle as string | undefined,
      date: data.date as string,
      topic: data.topic as string,
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const fileContents = fs.readFileSync(
    path.join(postsDirectory, `${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    topic: data.topic as string,
    content,
  };
}

export function getAllTopics(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.topic)));
}

export function getPostsByTopic(topic: string): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.topic.toLowerCase() === topic.toLowerCase()
  );
}
