"use client";

import { useState } from "react";

// TODO: replace with your real Formspree endpoint after creating a free
// account at https://formspree.io — it looks like https://formspree.io/f/xxxxxxx
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-20 sm:px-10 dark:bg-black">
      <div className="flex w-full max-w-lg flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Contact
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Questions, feedback, or just want to say hi — send a message.
          </p>
        </div>

        {status === "sent" ? (
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            Thanks — your message is in. I&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-black outline-none focus:border-black dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-black outline-none focus:border-black dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-black outline-none focus:border-black dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong — try again in a moment.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
