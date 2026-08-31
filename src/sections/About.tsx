import Reveal from "../components/Reveal";

const workingIn = [
  "Flutter",
  "React",
  "Next.js",
  "Django REST",
  "TypeScript",
  "Python",
  "Dart",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
];

const mark = "underline decoration-clay decoration-1 underline-offset-4";

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
            <span className={mark}>Holy Angel University</span>. He builds
            mobile and web applications — <span className={mark}>Flutter</span>{" "}
            on the phone, <span className={mark}>Next.js</span> and{" "}
            <span className={mark}>Django</span> behind it, Firebase or Supabase
            underneath.
          </p>

          <p>
            He spent four months as a full-stack developer at Geopro Global
            Solutions, where he built analytical dashboards and the REST
            endpoints that fed them. He also worked as a freelance full-stack
            developer on <span className={mark}>Signal Check</span>, a traffic
            simulation app made with Next.js and Supabase that keeps working
            when the connection drops.
          </p>

          <p>
            What he enjoys most is learning. He would rather take on something
            new than repeat what he already knows well. Whatever he is given —
            a small fix or a feature nobody has built yet — he wants to do it
            as well as it can be done.
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
