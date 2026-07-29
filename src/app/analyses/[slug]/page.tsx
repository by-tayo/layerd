import Link from "next/link";
import { getAllAnalyses, getAnalysisBySlug } from "@/lib/analyses";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllAnalyses().map((analysis) => ({ slug: analysis.slug }));
}

export default async function AnalysisPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const analysis = getAnalysisBySlug(slug);
  const html = await marked.parse(analysis.content);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <article className="flex w-full max-w-2xl flex-col gap-6">
        <Link
          href="/analyses"
          className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All analyses
        </Link>
        {analysis.sector && (
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {analysis.sector}
          </span>
        )}
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {analysis.title}
        </h1>
        {analysis.subtitle && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {analysis.subtitle}
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
