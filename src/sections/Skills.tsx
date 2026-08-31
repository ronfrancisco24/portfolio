import Reveal from "../components/Reveal";

const craft = [
  {
    numeral: "I",
    label: "Adaptability",
    description:
      "Flutter one month, Django REST the next. I get fluent in an unfamiliar stack quickly, and I'm comfortable in the stretch where I still don't know anything.",
  },
  {
    numeral: "II",
    label: "Continuous improvement",
    description:
      `I'm always looking for ways to improve — whether it's my code, my workflow, or my understanding of a problem. I don't like settling for "it works" when I know it can work better.`,
  },
  {
    numeral: "III",
    label: "Communication",
    description:
      "I write things down. Clear pull requests, short updates, questions asked early rather than late — the unglamorous habits that keep a team moving in one direction.",
  },
  {
    numeral: "IV",
    label: "Curiosity",
    description:
      "I like understanding how things work beyond what I'm immediately asked to do. I ask questions, explore unfamiliar technologies, and enjoy learning something new when a problem takes me somewhere I haven't been before.",
  },
];


function Skills() {
  return (
    <section
      id="craft"
      className="w-full border-b border-clay/40 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-16">
          <h2 className="label md:col-span-4">The craft</h2>
          <p className="max-w-xl font-serif text-2xl leading-snug text-ink md:col-span-7 md:col-start-6 sm:text-[1.75rem]">
            Four habits I bring to a team, stated plainly.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-x-16 border-t border-clay/40 sm:mt-20 md:grid-cols-2">
          {craft.map((item) => (
            <article
              key={item.numeral}
              className="border-b border-clay/40 py-9 md:py-11"
            >
              <div className="flex gap-6">
                <span className="label mt-1 w-8 shrink-0 text-clay">
                  {item.numeral}
                </span>
                <div>
                  <h3 className="font-display text-[1.75rem] leading-tight font-medium tracking-tight text-ink">
                    {item.label}
                  </h3>
                  <p className="mt-3 font-serif leading-relaxed text-ink/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}

export default Skills;
