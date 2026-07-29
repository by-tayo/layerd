import Link from "next/link";
import { getAllAnalyses } from "@/lib/analyses";

export default function AnalysesPage() {
  const analyses = getAllAnalyses();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Analyses
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            How a company, sector, or market actually works — the mechanics,
            not just the headline.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {analyses.map((analysis) => (
            <Link
              key={analysis.slug}
              href={`/analyses/${analysis.slug}`}
              className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
              {analysis.sector && (
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {analysis.sector}
                </span>
              )}
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                {analysis.title}
              </h2>
              {analysis.subtitle && (
                <p className="text-zinc-600 dark:text-zinc-400">
                  {analysis.subtitle}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
