import { ArrowDownToLine } from "lucide-react";
import { Link } from "react-router";
import { RESUME_FILENAME, RESUME_URL } from "../content/site";

function Hero() {
  return (
    <section
      id="top"
      className="relative w-full border-b border-clay/40 px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="label mb-10 sm:mb-14">
          Aaron Matthew Francisco
          <span className="mx-3 text-clay">/</span>
          Full-stack Developer
          <span className="mx-3 text-clay">/</span>
          Pampanga, PH
        </p>

        <h1 className="font-display text-display max-w-5xl font-medium text-ink">
          I build software the way{" "}
          <em className="italic text-bark">I&apos;d write a book.</em>
        </h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-clay/40 pt-8 sm:mt-16 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="max-w-xl font-serif text-lg leading-relaxed text-ink/90">
            A Computer Science graduate building mobile and web applications —
            Flutter on the phone, Next.js and Django behind it.
          </p>

          <div className="flex shrink-0 flex-col gap-5 sm:flex-row sm:items-baseline sm:gap-9">
            <Link
              to="/works"
              className="label group inline-flex cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-ink"
            >
              See the work
              <span
                aria-hidden="true"
                className="inline-block h-px w-10 bg-clay transition-all duration-300 ease-out group-hover:w-16 group-hover:bg-bark"
              />
            </Link>

            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="label group inline-flex min-h-11 cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-ink"
            >
              <ArrowDownToLine
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              Résumé (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
