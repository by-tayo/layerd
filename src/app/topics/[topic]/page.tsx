import Link from "next/link";
import { getAllTopics, getPostsByTopic } from "@/lib/posts";

export function generateStaticParams() {
  return getAllTopics().map((topic) => ({ topic: topic.toLowerCase() }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const posts = getPostsByTopic(decodeURIComponent(topic));
  const label = posts[0]?.topic ?? decodeURIComponent(topic);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Link
            href="/topics"
            className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← All topics
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {label}
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                {post.title}
              </h2>
              {post.subtitle && (
                <p className="text-zinc-600 dark:text-zinc-400">
                  {post.subtitle}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
