import { readMarkdownDir, readMarkdownFile } from "./content";

export type EpisodeMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  guest?: string;
  videoUrl?: string;
};

export type Episode = EpisodeMeta & { content: string };

export function getAllEpisodes(): EpisodeMeta[] {
  const episodes = readMarkdownDir("episodes").map(({ slug, data }) => ({
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    guest: data.guest as string | undefined,
    videoUrl: data.videoUrl as string | undefined,
  }));
  return episodes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEpisodeBySlug(slug: string): Episode {
  const { data, content } = readMarkdownFile("episodes", slug);
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    guest: data.guest as string | undefined,
    videoUrl: data.videoUrl as string | undefined,
    content,
  };
}
