import { readMarkdownDir, readMarkdownFile } from "./content";

export type PitchCall = "Long" | "Short";

export type PitchMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  ticker: string;
  call?: PitchCall;
};

export type Pitch = PitchMeta & { content: string };

export function getAllPitches(): PitchMeta[] {
  const pitches = readMarkdownDir("pitches").map(({ slug, data }) => ({
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    ticker: data.ticker as string,
    call: data.call as PitchCall | undefined,
  }));
  return pitches.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPitchBySlug(slug: string): Pitch {
  const { data, content } = readMarkdownFile("pitches", slug);
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    ticker: data.ticker as string,
    call: data.call as PitchCall | undefined,
    content,
  };
}
