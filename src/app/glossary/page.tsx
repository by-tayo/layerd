"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/content/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary
      .map((group) => ({
        ...group,
        terms: group.terms.filter(
          (entry) =>
            entry.term.toLowerCase().includes(q) ||
            entry.definition.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.terms.length > 0);
  }, [query]);

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-2xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Glossary
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Plain-English definitions for money, credit, investing, and
            estate terms. Entries marked{" "}
            <span className="font-medium text-black dark:text-zinc-50">
              Layered Take
            </span>{" "}
            are personal perspective, not just a definition — pulled from
            actually working risk, AML, and security roles.
          </p>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a term..."
          className="w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-black outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
        />

        {filtered.length === 0 && (
          <p className="text-zinc-500 dark:text-zinc-400">
            No terms match &ldquo;{query}&rdquo;.
          </p>
        )}

        {filtered.map((group) => (
          <div key={group.category} className="flex flex-col gap-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {group.category}
            </h2>
            <div className="flex flex-col gap-6">
              {group.terms.map((entry) => (
                <div
                  key={entry.term}
                  className="flex flex-col gap-2 border-b border-zinc-200 pb-6 dark:border-zinc-800"
                >
                  <span className="text-lg font-semibold text-black dark:text-zinc-50">
                    {entry.term}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {entry.definition}
                  </span>
                  {entry.layeredTake && (
                    <div className="mt-1 border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
                      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        Layered Take
                      </span>
                      <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                        {entry.layeredTake}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}