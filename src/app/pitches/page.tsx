import Link from "next/link";
import { getAllPitches } from "@/lib/pitches";

export default function PitchesPage() {
  const pitches = getAllPitches();

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Pitches
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            The case for or against holding something — thesis, risks, and
            the reasoning laid out so you can judge it yourself.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {pitches.map((pitch) => (
            <Link
              key={pitch.slug}
              href={`/pitches/${pitch.slug}`}
              className="flex flex-col gap-2 border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
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
              <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
                {pitch.title}
              </h2>
              {pitch.subtitle && (
                <p className="text-zinc-600 dark:text-zinc-400">
                  {pitch.subtitle}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
