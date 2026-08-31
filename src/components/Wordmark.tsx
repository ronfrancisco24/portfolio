/**
 * The site wordmark: the favicon's open book set against the name.
 *
 * Drawn in currentColor and sized in em, so it inherits the wordmark's
 * colour (including the hover transition) and scales with whatever type
 * size it is placed in. The favicon's clay gutter becomes an open gap
 * here, which keeps the mark to a single colour like the rest of the
 * site's line work.
 */
export default function Wordmark() {
  return (
    <span className="inline-flex items-baseline gap-[0.32em]">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-[0.66em] w-[0.66em] shrink-0 translate-y-[0.03em]"
        fill="currentColor"
      >
        <path d="M14.3 9 5.9 5.4c-.55-.15-1 .2-1 .75v14.9c0 .35.24.66.58.75L14.3 26.8Z" />
        <path d="M17.7 9 26.1 5.4c.55-.15 1 .2 1 .75v14.9c0 .35-.24.66-.58.75L17.7 26.8Z" />
      </svg>
      aaron
    </span>
  );
}
