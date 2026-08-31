import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NotFound from "./NotFound";
import { formatDate, getNote, notes } from "../content/notes";

export default function NotePage() {
  const { slug } = useParams();
  const note = getNote(slug);

  useEffect(() => {
    if (!note) return;
    const previous = document.title;
    document.title = `${note.title} — Aaron Francisco`;
    return () => {
      document.title = previous;
    };
  }, [note]);

  if (!note) return <NotFound />;

  const index = notes.findIndex((n) => n.slug === note.slug);
  const newer = index > 0 ? notes[index - 1] : undefined;
  const older = index < notes.length - 1 ? notes[index + 1] : undefined;

  return (
    <article className="w-full px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/notes"
          className="label group inline-flex min-h-11 cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-ink"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
            aria-hidden="true"
          />
          All notes
        </Link>

        <header className="mt-10 border-b border-clay/40 pb-10 sm:mt-14">
          <p className="label mb-6">
            {formatDate(note.date)}
            <span className="mx-3 text-clay">·</span>
            {note.readingTime} min read
          </p>

          <h1 className="font-display text-chapter max-w-4xl font-medium text-ink">
            {note.title}
          </h1>
        </header>

        <div className="prose-note mt-12 max-w-[68ch] sm:mt-16">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.body}</ReactMarkdown>
        </div>

        {(newer || older) && (
          <nav
            aria-label="More notes"
            className="mt-20 grid gap-8 border-t border-clay/40 pt-10 sm:mt-24 sm:grid-cols-2"
          >
            {older ? (
              <Link
                to={`/notes/${older.slug}`}
                className="group cursor-pointer"
              >
                <span className="label inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Older
                </span>
                <p className="mt-3 font-display text-xl leading-snug font-medium text-ink transition-colors duration-200 group-hover:text-bark">
                  {older.title}
                </p>
              </Link>
            ) : (
              <span aria-hidden="true" />
            )}

            {newer && (
              <Link
                to={`/notes/${newer.slug}`}
                className="group cursor-pointer sm:text-right"
              >
                <span className="label inline-flex items-center gap-2">
                  Newer
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-3 font-display text-xl leading-snug font-medium text-ink transition-colors duration-200 group-hover:text-bark">
                  {newer.title}
                </p>
              </Link>
            )}
          </nav>
        )}
      </div>
    </article>
  );
}
