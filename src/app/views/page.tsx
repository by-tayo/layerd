import Link from "next/link";
import { getAllEpisodes } from "@/lib/episodes";

export default function ViewsPage() {
  const episodes = getAllEpisodes();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Views
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            My own perspective on what&apos;s happening, plus conversations where I
            hand the mic to someone else. Each one is an episode.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {episodes.map((episode) => (
            <Link
              key={episode.slug}
              href={`/views/${episode.slug}`}
              className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Episode{episode.guest ? ` · with ${episode.guest}` : ""}
              </span>
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                {episode.title}
              </h2>
              {episode.subtitle && (
                <p className="text-zinc-600 dark:text-zinc-400">
                  {episode.subtitle}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
