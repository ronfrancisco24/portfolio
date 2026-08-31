import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { formatDate, notes } from "../content/notes";

const latest = notes.slice(0, 3);

function Marginalia() {
  return (
    <section
      id="marginalia"
      className="w-full border-b border-clay/40 bg-linen px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-10 md:grid-cols-12 md:gap-16">
          <h2 className="label md:col-span-4">Marginalia</h2>

          <blockquote className="md:col-span-7 md:col-start-6">
            <p className="font-display text-chapter font-normal text-ink italic">
              &ldquo;And so I just kept writing to myself.&rdquo;
            </p>
            <footer className="label mt-6 not-italic">
              <span aria-hidden="true" className="mr-2.5 text-clay">
                &#8213;
              </span>
              Kimberly Novosel, <cite>Loved</cite>
            </footer>
          </blockquote>
        </Reveal>

        <Reveal className="mt-14 border-t border-clay/60 sm:mt-20">
          {latest.map((note) => (
            <article key={note.slug} className="border-b border-clay/60">
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
                  <h3 className="font-display text-2xl leading-snug font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-bark sm:text-[1.75rem]">
                    {note.title}
                  </h3>
                  <p className="mt-3 max-w-prose font-serif leading-relaxed text-ink/90">
                    {note.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <Link
            to="/notes"
            className="label group inline-flex min-h-11 cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-ink"
          >
            All notes
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default Marginalia;
