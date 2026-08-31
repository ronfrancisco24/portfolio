import fm from "front-matter";

export interface NoteMeta {
  title: string;
  date: string;
  excerpt: string;
}

export interface Note extends NoteMeta {
  slug: string;
  body: string;
  readingTime: number;
}

/**
 * Every markdown file in ./notes is pulled into the bundle at build time.
 * Adding a post means adding a file — there is nothing to register here.
 */
const files = import.meta.glob("./notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const WORDS_PER_MINUTE = 220;

function slugFromPath(path: string) {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export const notes: Note[] = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = fm<NoteMeta>(raw);
    return {
      slug: slugFromPath(path),
      ...attributes,
      body,
      readingTime: Math.max(1, Math.round(body.split(/\s+/).length / WORDS_PER_MINUTE)),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getNote(slug: string | undefined) {
  return notes.find((note) => note.slug === slug);
}

export function formatDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
