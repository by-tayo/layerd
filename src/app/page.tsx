import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <section className="flex flex-col items-center gap-8 border-b border-zinc-200 px-6 py-28 text-center sm:px-10 dark:border-zinc-800">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          A perspective on money, decisions, and the tech behind both.
        </h1>
        <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            LAY/ERD isn&apos;t trying to turn you into an expert. It&apos;s here to
            close the gap between the money decisions you&apos;re making every
            day and the stuff nobody ever actually sat you down and explained.
          </p>
        </div>
      </section>

      <section className="flex justify-center px-6 py-20 sm:px-10">
        <div className="flex max-w-2xl flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            Doesn&apos;t matter what you do — analyst, student, founder, whatever
            — you need to get personal finance. Not as a nice-to-have. As a
            baseline. That&apos;s what I&apos;m writing about here, one perspective at
            a time.
          </p>
          <p>
            And money and security kind of go hand in hand. Every account you
            open, every app you hand your balance to, every password you
            reuse — that&apos;s a security decision, not just a financial one.
            LAY/ERD covers both sides: the personal finance basics, and the
            security basics that decide whether any of it&apos;s actually safe.
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

      <section
        id="about"
        className="flex justify-center border-t border-zinc-200 bg-white px-6 py-20 sm:px-10 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            About
          </h2>
          <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Tayo is a B.B.A in Cybersecurity student, a former AML Analyst,
            and the founder of LAY/ERD. I write where finance and security
            overlap — the way money moves, what actually protects it, the
            mechanics behind fraud, and what all of that means for how you
            handle your own.
          </p>
          <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Fundamentals first — the stuff everyone should know but nobody
            gets taught — then more technical deep-dives once that
            foundation&apos;s there.
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
