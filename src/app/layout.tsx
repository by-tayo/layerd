import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAY/ERD",
  description: "A perspective on money, decisions, and the tech behind both.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-zinc-50/90 px-6 py-3 backdrop-blur sm:px-10 dark:border-zinc-800 dark:bg-black/90">
          <Link href="/" className="flex items-center rounded-md bg-black px-3 py-2">
            <Image src="/logo.png" alt="LAY/ERD" width={120} height={40} priority />
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="/posts" className="hover:text-black dark:hover:text-zinc-50">
              Posts
            </Link>
            <Link href="/topics" className="hover:text-black dark:hover:text-zinc-50">
              Topics
            </Link>
            <Link href="/resources" className="hover:text-black dark:hover:text-zinc-50">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-zinc-50">
              Contact
            </Link>
            <a href="#about" className="hover:text-black dark:hover:text-zinc-50">
              About
            </a>
            <a
              href="https://linktr.ee/bytayo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-zinc-50"
            >
              Socials
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
