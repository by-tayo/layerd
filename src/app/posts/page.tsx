import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Posts
        </h1>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {post.topic}
              </span>
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
