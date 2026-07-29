import { readMarkdownDir, readMarkdownFile } from "./content";

export type AnalysisMeta = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  sector?: string;
};

export type Analysis = AnalysisMeta & { content: string };

export function getAllAnalyses(): AnalysisMeta[] {
  const analyses = readMarkdownDir("analyses").map(({ slug, data }) => ({
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    sector: data.sector as string | undefined,
  }));
  return analyses.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAnalysisBySlug(slug: string): Analysis {
  const { data, content } = readMarkdownFile("analyses", slug);
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string | undefined,
    date: data.date as string,
    sector: data.sector as string | undefined,
    content,
  };
}
