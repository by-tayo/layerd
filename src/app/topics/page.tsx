import Link from "next/link";
import { getAllTopics, getPostsByTopic } from "@/lib/posts";

export default function TopicsPage() {
  const topics = getAllTopics();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Topics
        </h1>
        <div className="flex flex-col gap-6">
          {topics.map((topic) => {
            const count = getPostsByTopic(topic).length;
            return (
              <Link
                key={topic}
                href={`/topics/${encodeURIComponent(topic.toLowerCase())}`}
                className="flex items-center justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800"
              >
                <span className="text-xl font-semibold text-black dark:text-zinc-50">
                  {topic}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {count} {count === 1 ? "post" : "posts"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
