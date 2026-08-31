import Reveal from "../components/Reveal";

const workingIn = [
  "Flutter",
  "React",
  "Next.js",
  "Django",
  "TypeScript",
  "Python",
  "Dart",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
];

function About() {
  return (
    <section
      id="about"
      className="w-full border-b border-clay/40 px-6 py-20 sm:px-10 sm:py-28"
    >
      <Reveal className="mx-auto grid max-w-6xl gap-y-10 md:grid-cols-12 md:gap-x-16 md:gap-y-8">
        <h2 className="label order-1 md:col-span-4 md:col-start-1 md:row-start-1">
          Who I am
        </h2>

        {/* Bio leads on mobile; the particulars follow it. */}
        <div className="order-2 space-y-6 font-mono text-[0.9375rem] leading-[1.85] text-ink md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1">
          <p>
            Aaron is a Computer Science graduate of{" "}
            <span className="underline decoration-clay decoration-1 underline-offset-4">
              Holy Angel University
            </span>{" "}
            who builds mobile and web applications — Flutter on the phone,{" "}
            <span className="underline decoration-clay decoration-1 underline-offset-4">
              Next.js
            </span>{" "}
            and{" "}
            <span className="underline decoration-clay decoration-1 underline-offset-4">
              Django REST Framework
            </span>{" "}
            behind it, Firebase or Supabase underneath.
          </p>

          <p>
            He spent four months as a full-stack developer at Geopro Global
            Solutions, building analytical dashboards and the REST endpoints
            that fed them, and two years leading mobile development for Google
            Developer Groups at Holy Angel — mostly teaching Flutter to people
            who had never shipped an app before.
          </p>

          <p>
            The work he likes best is the unglamorous middle: taking a real
            requirement, finding the shape of the data underneath it, and
            trimming the interface until nothing unnecessary is left. He treats
            a codebase like a manuscript — drafted fast, then edited slowly,
            until every line earns its place.
          </p>
        </div>

        <aside className="order-3 md:col-span-4 md:col-start-1 md:row-start-2">
          <div className="border-t border-clay/40 pt-6">
            <h3 className="label mb-4 normal-case tracking-[0.08em] text-clay">
              Mostly working in
            </h3>
            <ul className="space-y-1.5">
              {workingIn.map((tool) => (
                <li key={tool} className="font-mono text-[0.8125rem] text-ink">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-clay/40 pt-6">
            <h3 className="label mb-2 normal-case tracking-[0.08em] text-clay">
              Based in
            </h3>
            <p className="font-mono text-[0.8125rem] text-ink">
              Pampanga, Philippines
            </p>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}

export default About;
