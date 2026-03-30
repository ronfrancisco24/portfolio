import React from "react";
import TimelineItem from "../components/TimelineItem";

type TimelineEntry = {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
};

const placeholderEntries: TimelineEntry[] = [
  {
    date: "2019",
    title: "Started Learning Programming",
    subtitle: "Foundations",
    description:
      "Began with basic algorithms, data structures, and small web projects. Focused on JavaScript and Python fundamentals.",
  },
  {
    date: "2020",
    title: "First College Project",
    subtitle: "Team Collaboration",
    description:
      "Built a collaborative web app for classmates to share study notes. Learned about version control and project workflows.",
  },
  {
    date: "2021",
    title: "Internship — Software Engineering",
    subtitle: "Industry Experience",
    description:
      "Worked on frontend features, bug fixes, and improved testing coverage. Gained experience with deployed applications.",
  },
  {
    date: "2023",
    title: "Open Source Contributions",
    subtitle: "Community",
    description:
      "Contributed to a couple of OSS projects: documentation, small features, and maintenance tasks. Started mentoring newer contributors.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section
      id="timeline"
      className="max-w-6xl mx-auto px-8 py-20 text-white w-full"
    >
      <div className="mb-10 text-left">
        <h2 className="text-5xl font-bold mb-4">Timeline</h2>
        <p className="text-lg text-white/80">
          A short history of milestones and highlights. (Placeholders for now.)
        </p>
      </div>

      <div className="relative">
        {/* A subtle centered vertical line on wide screens is handled by the TimelineItem,
            but we still keep this wrapper for spacing and to allow stacking on small screens. */}
        <div className="flex flex-col gap-8">
          {placeholderEntries.map((entry, idx) => {
            // Alternate left/right alignment on larger screens for visual interest
            const align = idx % 2 === 0 ? "left" : "right";
            return (
              <TimelineItem
                key={entry.date + "-" + idx}
                date={entry.date}
                title={entry.title}
                subtitle={entry.subtitle}
                description={entry.description}
                align={align as "left" | "right" | "center"}
              />
            );
          })}

          {/* An example center-aligned item (e.g., a current or ongoing entry) */}
          <TimelineItem
            key="current"
            date="Present"
            title="Currently Building"
            subtitle="Ongoing"
            description="Working on personal projects, polishing UI/UX, and exploring AI/IoT integrations."
            align="center"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
