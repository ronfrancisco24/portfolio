import { Code, Zap, Heart, Users } from "lucide-react";

function Skills() {
  const skills = [
    {
      id: "eagerness",
      label: "Eagerness",
      description:
        "I approach new problems with curiosity and speed — I learn quickly and adapt.",
      icon: <Zap className="w-8 h-8 text-black" />,
    },
    {
      id: "technical",
      label: "Technical",
      description:
        "Strong fundamentals in software development: clean code, system thinking and debugging.",
      icon: <Code className="w-8 h-8 text-black" />,
    },
    {
      id: "collaboration",
      label: "Collaboration",
      description:
        "I communicate clearly and enjoy working with teams to deliver usable products.",
      icon: <Users className="w-8 h-8 text-black" />,
    },
    {
      id: "craft",
      label: "Craft",
      description:
        "Attention to detail, care for UX, and polishing things until they feel right.",
      icon: <Heart className="w-8 h-8 text-black" />,
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-20 text-white w-full"
    >
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">What I deliver</h1>
        <p className="text-lg text-white/80 max-w-3xl">
          I bring a mix of technical skills, creativity, and reliability to help
          the organization build impactful, efficient, and user-centered
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div
            key={s.id}
            className="flex gap-6 p-6 rounded-2xl border border-[#2b2b2b] bg-[#0F0F0F] items-start"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_18px_rgba(255,255,255,0.12)]">
                {s.icon}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-1">{s.label}</h3>
              <p className="text-sm text-white/80">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
