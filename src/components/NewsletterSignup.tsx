"use client";

import { useState } from "react";

// TODO: once a Mailchimp/ConvertKit/Substack account exists, replace this
// handler with a real POST to that service's signup endpoint.
export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Newsletter
        </h2>
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          New posts in your inbox. No spam, no upsell — just the writing.
        </p>
      </div>
      {status === "submitted" ? (
        <p className="text-zinc-700 dark:text-zinc-300">
          You&apos;re on the list. The newsletter&apos;s still being set up, but
          you&apos;ll get the first send when it goes out.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-black outline-none focus:border-black sm:max-w-xs dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50"
          />
          <button
            type="submit"
            className="rounded-md bg-black px-5 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
