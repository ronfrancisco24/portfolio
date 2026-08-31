import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { formatDate, notes } from "../content/notes";

export default function NotesIndex() {
  return (
    <section className="w-full px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="label mb-10 sm:mb-14">
          Marginalia
          <span className="mx-3 text-clay">/</span>
          {notes.length} {notes.length === 1 ? "note" : "notes"}
        </p>

        <h1 className="font-display text-chapter max-w-3xl font-medium text-ink">
          Notes kept while building.
        </h1>

        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink/90">
          Short pieces on writing software, reading data, and the parts of the
          work that don&apos;t fit in a commit message.
        </p>

        <Reveal className="mt-16 border-t border-clay/40 sm:mt-20">
          {notes.map((note) => (
            <article key={note.slug} className="border-b border-clay/40">
              <Link
                to={`/notes/${note.slug}`}
                className="group grid cursor-pointer gap-4 py-8 md:grid-cols-12 md:gap-16 md:py-10"
              >
                <p className="label md:col-span-4">
                  {formatDate(note.date)}
                  <span className="mx-2 text-clay">·</span>
                  {note.readingTime} min
                </p>

                <div className="md:col-span-7 md:col-start-6">
                  <h2 className="font-display text-2xl leading-snug font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-bark sm:text-[1.75rem]">
                    {note.title}
                  </h2>
                  <p className="mt-3 max-w-prose font-serif leading-relaxed text-ink/90">
                    {note.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
