import ProjectCard, { type ProjectCardProps } from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const works: Omit<ProjectCardProps, "index">[] = [
  {
    title: "HAU 1st Regional AI Conference Website for GDG-HAU",
    period: "Oct — Nov 2025",
    role: "Frontend contributor",
    discipline: "React · Tailwind CSS",
    description:
      "The official site for the first regional AI conference hosted by Google Developer Groups at Holy Angel University. I built responsive sections and interactive components for an audience arriving mostly on phones, with accessibility treated as part of the brief rather than a pass at the end.",
    motif: "broadcast",
    liveUrl: "https://aiconhau.vercel.app/",
    note: "Private repository",
  },
  {
    title: "Stock Route",
    period: "Sept 2025",
    role: "Frontend developer",
    discipline: "React · Tailwind CSS",
    description:
      "Inventory management for people who count things all day. I designed and built the interfaces for stock updates and category management, and the layouts that survive being used on a warehouse phone as readily as a desktop.",
    motif: "crate",
    repoUrl: "https://github.com/joaquingalang/stock-route",
  },
  {
    title: "Clairity",
    period: "Jan — Sept 2025",
    role: "Mobile developer",
    discipline: "Flutter · Firebase · Cloud Firestore",
    description:
      "A real-time monitor for restroom air quality, built for the janitors and administrators who act on it. I worked on the Flutter application and its Firebase layer — authentication, live Firestore updates, and the push notifications that carry an alert to someone who can do something about it.",
    motif: "reading",
    repoUrl: "https://github.com/ronfrancisco24/clairity",
  },
];

export default function Works() {
  return (
    <section className="w-full px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <p className="label mb-10 sm:mb-14">
          Selected works
          <span className="mx-3 text-clay">/</span>
          {works.length} projects
        </p>

        <h1 className="font-display text-chapter max-w-4xl font-medium text-ink">
          Three things I helped build, and what I did on each.
        </h1>

        <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink/90">
          Mobile and web applications from the last two years, all of them made
          with other people. Each entry says which part was mine.
        </p>

        <div className="mt-14 sm:mt-20">
          {works.map((work, i) => (
            <Reveal key={work.title}>
              <ProjectCard index={i + 1} {...work} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
