import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllEpisodes } from "@/lib/episodes";
import { getAllAnalyses } from "@/lib/analyses";
import { getAllPitches } from "@/lib/pitches";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const sections = [
    {
      label: "Views",
      href: "/views",
      description:
        "My perspective on what's happening, plus interviews where I hand the mic to someone else. Each one's an episode.",
      count: getAllEpisodes().length,
      unit: "episode",
      unitPlural: "episodes",
    },
    {
      label: "Analyses",
      href: "/analyses",
      description:
        "How a company, sector, or market actually works. The mechanics, not just the headline.",
      count: getAllAnalyses().length,
      unit: "analysis",
      unitPlural: "analyses",
    },
    {
      label: "Pitches",
      href: "/pitches",
      description:
        "The case for or against holding something: thesis, risks, and the reasoning laid out so you can judge it yourself.",
      count: getAllPitches().length,
      unit: "pitch",
      unitPlural: "pitches",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <section className="flex flex-col items-center gap-8 border-b border-zinc-200 px-6 py-28 text-center sm:px-10 dark:border-zinc-800">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          A perspective on money, decisions, and the tech behind both.
        </h1>
        <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            The money decisions you make every day, like saving, borrowing,
            investing, and picking which app holds your balance, mostly get made
            blind. LAY/ERD is here to close the gap between those decisions and
            the stuff nobody ever actually sat you down and explained. Not to
            make you an expert. Just to make the call less of a guess.
          </p>
        </div>
      </section>

      <section className="flex justify-center px-6 py-20 sm:px-10">
        <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            It doesn&apos;t matter what you do, whether you&apos;re an analyst, a
            student, or a founder. Personal finance isn&apos;t a nice-to-have,
            it&apos;s a baseline, and most of us are left to pick it up by trial
            and error. I&apos;m writing it down instead, one piece at a time.
          </p>
          <p>
            Money and security are the same problem from two angles. Every
            account you open, every app you trust with your balance, every
            password you reuse is a financial decision and a security decision
            at once. LAY/ERD covers both sides: the finance fundamentals, and
            the security fundamentals that decide whether any of it holds up.
          </p>
        </div>
      </section>

      <section className="flex justify-center border-t border-zinc-200 px-6 py-20 sm:px-10 dark:border-zinc-800">
        <div className="flex w-full max-w-2xl flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Latest Posts
            </h2>
            <Link
              href="/posts"
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="flex flex-col gap-1 border-b border-zinc-200 pb-6 dark:border-zinc-800"
              >
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {post.topic}
                </span>
                <span className="text-xl font-semibold text-black dark:text-zinc-50">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center border-t border-zinc-200 px-6 py-20 sm:px-10 dark:border-zinc-800">
        <div className="flex w-full max-w-2xl flex-col gap-10">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            More From LAY/ERD
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="flex flex-col gap-2 border-b border-zinc-200 pb-6 sm:border-b-0 dark:border-zinc-800"
              >
                <span className="text-xl font-semibold text-black dark:text-zinc-50">
                  {section.label}
                </span>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {section.description}
                </p>
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {section.count}{" "}
                  {section.count === 1 ? section.unit : section.unitPlural}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex justify-center border-t border-zinc-200 bg-white px-6 py-20 sm:px-10 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            About
          </h2>
          <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Hi, I&apos;m TAYO and I am a former AML Analyst and the founder of
            LAY/ERD. I cover where finance and security overlap: the way money
            moves, what actually protects it, the mechanics behind fraud, and
            what all of that means for how you handle your own.
          </p>
          <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            It comes in a few layers. Posts are the fundamentals, the stuff
            everyone should know but nobody gets taught. Views is more personal:
            my own take on what&apos;s happening, and conversations where I hand
            the mic to someone else, each one saved as an episode. Analyses is
            where I dig into how a company or market actually works. Pitches is
            where I make the case for or against holding something, reasoning
            included, so you can judge it yourself.
          </p>
        </div>
      </section>

      <section className="flex justify-center border-t border-zinc-200 px-6 py-20 sm:px-10 dark:border-zinc-800">
        <div className="w-full max-w-2xl">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
