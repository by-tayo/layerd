import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");
const markdownExt = /\.mdx?$/;

export type PostMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  topic?: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostMeta & { content: string };

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: data.title as string,
    subtitle: (data.subtitle ?? data.description) as string | undefined,
    date: data.date as string,
    topic: data.topic as string | undefined,
    tags: data.tags as string[] | undefined,
    draft: data.draft as boolean | undefined,
  };
}

function resolvePostPath(slug: string): string {
  const match = [".md", ".mdx"]
    .map((ext) => path.join(postsDirectory, `${slug}${ext}`))
    .find((filePath) => fs.existsSync(filePath));
  if (!match) {
    throw new Error(`No post found for slug "${slug}"`);
  }
  return match;
}

export function getAllPosts(): PostMeta[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((f) => markdownExt.test(f));
  const posts = files.map((filename) => {
    const slug = filename.replace(markdownExt, "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf8"
    );
    return toMeta(slug, matter(fileContents).data);
  });
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const fileContents = fs.readFileSync(resolvePostPath(slug), "utf8");
  const { data, content } = matter(fileContents);
  return { ...toMeta(slug, data), content };
}

export function getAllTopics(): string[] {
  return Array.from(
    new Set(
      getAllPosts()
        .map((post) => post.topic)
        .filter((topic): topic is string => Boolean(topic))
    )
  );
}

export function getPostsByTopic(topic: string): PostMeta[] {
  return getAllPosts().filter(
    (post) => post.topic?.toLowerCase() === topic.toLowerCase()
  );
}
