import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="w-full px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="label mb-10">Error 404</p>

        <h1 className="font-display text-chapter max-w-3xl font-medium text-ink">
          This page was left out of the final draft.
        </h1>

        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink/90">
          The address you followed doesn&apos;t lead anywhere on this site — it
          may have been cut, renamed, or never written at all.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link
            to="/"
            className="label inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-ink"
          >
            Back to the beginning
          </Link>
          <Link
            to="/notes"
            className="label inline-flex min-h-11 cursor-pointer items-center transition-colors duration-200 hover:text-ink"
          >
            Read the notes
          </Link>
        </div>
      </div>
    </section>
  );
}
