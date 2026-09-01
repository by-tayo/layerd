import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const html = await marked.parse(post.content);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <article className="flex w-full max-w-2xl flex-col gap-6">
        {post.topic && (
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {post.topic}
          </span>
        )}
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {post.subtitle}
          </p>
        )}
        <div
          className="prose prose-zinc max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
