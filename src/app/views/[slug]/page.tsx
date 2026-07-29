import Link from "next/link";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/episodes";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllEpisodes().map((episode) => ({ slug: episode.slug }));
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  const html = await marked.parse(episode.content);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <article className="flex w-full max-w-2xl flex-col gap-6">
        <Link
          href="/views"
          className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All views
        </Link>
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Episode{episode.guest ? ` · with ${episode.guest}` : ""}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {episode.title}
        </h1>
        {episode.subtitle && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {episode.subtitle}
          </p>
        )}
        {episode.videoUrl ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
            <iframe
              src={episode.videoUrl}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            Video coming soon
          </div>
        )}
        <div
          className="prose prose-zinc max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
}
