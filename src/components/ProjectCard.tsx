import { ArrowUpRight, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ProjectPlate, { type Motif } from "./ProjectPlate";

export interface ProjectCardProps {
  index: number;
  title: string;
  period: string;
  role: string;
  discipline: string;
  description: string;
  motif: Motif;
  liveUrl?: string;
  repoUrl?: string;
  /** Shown in place of a link when the source isn't public. */
  note?: string;
}

export default function ProjectCard({
  index,
  title,
  period,
  role,
  discipline,
  description,
  motif,
  liveUrl,
  repoUrl,
  note,
}: ProjectCardProps) {
  const number = String(index).padStart(2, "0");

  return (
    <article className="group grid gap-8 border-t border-clay/40 py-10 md:grid-cols-12 md:gap-12 md:py-14">
      <div className="md:col-span-5">
        <ProjectPlate motif={motif} numeral={number} />
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <span className="label text-clay">Chapter {number}</span>
          <span className="label">{period}</span>
        </div>

        <h3 className="font-display text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
          {title}
        </h3>

        <p className="label mt-3 normal-case tracking-[0.08em] text-bark">
          {role}
          <span aria-hidden="true" className="mx-2 text-clay">
            ·
          </span>
          {discipline}
        </p>

        <p className="mt-5 max-w-prose font-serif text-[1.0625rem] leading-relaxed text-ink/90">
          {description}
        </p>

        {(liveUrl || repoUrl || note) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="label inline-flex min-h-11 cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-ink"
              >
                Visit the site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="label inline-flex min-h-11 cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-ink"
              >
                <SiGithub className="h-4 w-4" aria-hidden="true" />
                View repo
              </a>
            )}

            {note && (
              <span className="label inline-flex items-center gap-2 text-clay">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                {note}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
