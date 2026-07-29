import Link from "next/link";
import { getAllPitches, getPitchBySlug } from "@/lib/pitches";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPitches().map((pitch) => ({ slug: pitch.slug }));
}

export default async function PitchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pitch = getPitchBySlug(slug);
  const html = await marked.parse(pitch.content);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <article className="flex w-full max-w-2xl flex-col gap-6">
        <Link
          href="/pitches"
          className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All pitches
        </Link>
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {pitch.ticker}
          {pitch.call && (
            <span
              className={
                pitch.call === "Long"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              }
            >
              · {pitch.call}
            </span>
          )}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {pitch.title}
        </h1>
        {pitch.subtitle && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {pitch.subtitle}
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
