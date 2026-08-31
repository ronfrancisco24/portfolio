import React, { useState } from "react";
import { ArrowDownToLine, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Reveal from "../components/Reveal";
import { RESUME_FILENAME, RESUME_URL } from "../content/site";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const EMAIL = "aaronmattcodes@gmail.com";

const elsewhere = [
  {
    label: "GitHub",
    handle: "github.com/ronfrancisco24",
    href: "https://github.com/ronfrancisco24",
    Icon: SiGithub,
  },
  {
    label: "LinkedIn",
    handle: "Aaron Matthew Francisco",
    href: "https://www.linkedin.com/in/aaron-matthew-francisco-141190322",
    Icon: FaLinkedinIn,
  },
];

const fieldClass =
  "w-full border-b border-clay bg-transparent px-0 py-3 font-serif text-lg text-ink placeholder:text-clay transition-colors duration-200 focus:border-bark focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = (data: FormState) => {
    if (!data.name.trim()) return "Please enter your name.";
    if (!/\S+@\S+\.\S+/.test(data.email)) return "Please enter a valid email.";
    if (!data.message.trim()) return "Please enter a message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    if (validation) {
      setError(validation);
      return;
    }

    setSubmitting(true);
    setError(null);

    // Placeholder: replace with your API call (email provider, Netlify forms, etc.)
    try {
      await new Promise((res) => setTimeout(res, 900));
      console.log("Contact form submitted:", form);

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError(
        "There was an error sending your message. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid gap-8 md:grid-cols-12 md:gap-16">
          <h2 className="label md:col-span-4">Correspondence</h2>
          <p className="max-w-xl font-serif text-2xl leading-snug text-ink md:col-span-7 md:col-start-6 sm:text-[1.75rem]">
            Working on something worth reading? Send a letter — I answer all of
            them.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-14 border-t border-clay/40 pt-12 sm:mt-20 md:grid-cols-12 md:gap-16">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-9 md:col-span-7"
          >
            <div>
              <label htmlFor="name" className="label mb-2 block">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Austen"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="label mb-2 block">
                Return address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="label mb-2 block">
                The letter
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you're building…"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div aria-live="polite" className="min-h-6">
              {error && (
                <p className="font-mono text-sm text-[#8C3B2E]">{error}</p>
              )}
              {sent && (
                <p className="font-mono text-sm text-bark-deep">
                  Thank you — your letter is on its way.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex min-h-11 cursor-pointer items-center gap-3 border border-ink px-7 py-3 font-mono text-xs tracking-[0.16em] uppercase text-ink transition-colors duration-200 hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              {submitting ? "Sending…" : "Send the letter"}
            </button>
          </form>

          <aside className="md:col-span-4 md:col-start-9">
            <h3 className="label mb-6">Elsewhere</h3>

            <ul className="border-t border-clay/40">
              <li className="border-b border-clay/40">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex min-h-11 cursor-pointer items-center gap-4 py-4 transition-colors duration-200 hover:text-bark"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-clay transition-colors duration-200 group-hover:text-bark"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm break-all text-ink transition-colors duration-200 group-hover:text-bark">
                    {EMAIL}
                  </span>
                </a>
              </li>

              {elsewhere.map(({ label, handle, href, Icon }) => (
                <li key={label} className="border-b border-clay/40">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-11 cursor-pointer items-center gap-4 py-4 transition-colors duration-200"
                    aria-label={`${label} — ${handle}`}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-clay transition-colors duration-200 group-hover:text-bark"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-sm text-ink transition-colors duration-200 group-hover:text-bark">
                      {handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="group mt-8 inline-flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 border border-ink px-5 py-4 transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              <span className="font-mono text-xs tracking-[0.16em] uppercase">
                Download résumé
              </span>
              <ArrowDownToLine
                className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <p className="mt-8 font-serif leading-relaxed text-ink/90">
              Recently graduated and looking for full-stack or mobile
              engineering work. I usually reply within two days.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
