import React from "react";

interface TimelineItemProps {
  date?: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  align?: "left" | "right" | "center";
}

/**
 * TimelineItem
 *
 * A single entry for a vertical timeline. Uses Tailwind CSS utility classes.
 * This component is intentionally flexible and uses sensible defaults so it
 * can be used as a placeholder while you wire up real content.
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
  date = "Date TBD",
  title,
  subtitle,
  description = "Description coming soon...",

  align = "left",
}) => {
  const isCenter = align === "center";

  const rightSide = align === "right";

  return (
    <div className="w-full relative">
      {/* center vertical line (visible on md+) */}
      <div
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2"
        aria-hidden="true"
      />

      {/* Timeline row: two-column layout on md+, stacked on small screens */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-stretch">
          {/* Left column */}
          <div className="md:w-1/2 w-full md:pr-8">
            {(!rightSide || isCenter) && (
              <div className="bg-transparent text-white md:text-left text-center">
                <div className="text-sm text-white/70 mb-1">{date}</div>
                <h3 className="text-2xl font-bold leading-snug">{title}</h3>
                {subtitle && (
                  <div className="text-sm text-white/80 italic mt-1">
                    {subtitle}
                  </div>
                )}
                <p className="mt-3 text-white/90">{description}</p>
              </div>
            )}
          </div>

          {/* Center node: glowing white ball only */}
          <div className="flex items-center justify-center md:w-12 mx-auto my-4 md:my-0 relative">
            <div className="w-4 h-4 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </div>

          {/* Right column */}
          <div className="md:w-1/2 w-full md:pl-8">
            {(rightSide || isCenter) && (
              <div className="bg-transparent text-white md:text-right text-center">
                <div className="text-sm text-white/70 mb-1">{date}</div>
                <h3 className="text-2xl font-bold leading-snug">{title}</h3>
                {subtitle && (
                  <div className="text-sm text-white/80 italic mt-1">
                    {subtitle}
                  </div>
                )}
                <p className="mt-3 text-white/90">{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
