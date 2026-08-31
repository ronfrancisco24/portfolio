export type Motif = "broadcast" | "crate" | "reading";

/**
 * Stands in for a screenshot: a letterpress-style plate carrying a line motif
 * for each project. Purely decorative — the title and description beside it
 * carry the meaning, so it is hidden from assistive technology.
 */
export default function ProjectPlate({
  motif,
  numeral,
}: {
  motif: Motif;
  numeral: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-clay/60 bg-linen"
    >
      {/* inset rule, the way a printed plate sits inside its frame */}
      <span className="pointer-events-none absolute inset-2.5 border border-clay/35" />

      {/* ghosted chapter numeral, printed under the mark */}
      <span className="pointer-events-none absolute right-6 bottom-3 font-display text-6xl leading-none font-medium tracking-tight text-bark/15 select-none">
        {numeral}
      </span>

      <svg
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative w-1/2 max-w-[10rem] text-bark/70 transition-colors duration-500 ease-out group-hover:text-bark"
      >
        {motif === "broadcast" && (
          <>
            <circle cx="60" cy="60" r="5.5" fill="currentColor" stroke="none" />
            <path d="M72.9 44.7A20 20 0 0 1 72.9 75.3" />
            <path d="M47.1 44.7A20 20 0 0 0 47.1 75.3" />
            <path d="M80.6 35.5A32 32 0 0 1 80.6 84.5" opacity="0.72" />
            <path d="M39.4 35.5A32 32 0 0 0 39.4 84.5" opacity="0.72" />
            <path d="M88.3 26.3A44 44 0 0 1 88.3 93.7" opacity="0.45" />
            <path d="M31.7 26.3A44 44 0 0 0 31.7 93.7" opacity="0.45" />
          </>
        )}

        {motif === "crate" && (
          <>
            <rect x="43" y="20" width="34" height="34" />
            <path d="M60 20v34" opacity="0.55" />
            <rect x="24" y="58" width="34" height="34" />
            <path d="M41 58v34" opacity="0.55" />
            <rect x="62" y="58" width="34" height="34" />
            <path d="M79 58v34" opacity="0.55" />
            <path d="M18 100h84" opacity="0.4" />
          </>
        )}

        {motif === "reading" && (
          <>
            <path d="M22 74c10 0 13-18 22-18s12 22 22 22 12-26 22-26 8 8 10 8" />
            <path
              d="M22 90c10 0 13-12 22-12s12 15 22 15 12-18 22-18 8 6 10 6"
              opacity="0.55"
            />
            <path d="M22 34h76" opacity="0.35" />
            <circle cx="66" cy="78" r="3.5" fill="currentColor" stroke="none" />
          </>
        )}
      </svg>
    </div>
  );
}
