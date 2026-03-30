import React, { useState } from "react";
import { Mail, Globe, Link, User } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

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
    setError(null);
    const validation = validate(form);
    if (validation) {
      setError(validation);
      return;
    }

    setSubmitting(true);
    setError(null);

    // Placeholder: replace with your API call (email provider, Netlify forms, etc.)
    try {
      // Simulate network
      await new Promise((res) => setTimeout(res, 900));
      // In production you'd POST the form to your backend/service here.
      console.log("Contact form submitted:", form);

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
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
      className="max-w-6xl mx-auto px-8 py-20 text-white w-full"
    >
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Get in touch</h2>
        <p className="text-white/80 mt-2 max-w-2xl">
          I'm always open to new opportunities and conversations. Send a message
          or reach out via social links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact form */}
        <div className="md:col-span-2 bg-[#0F0F0F] border border-white/6 rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#111111] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Your name"
                aria-required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-[#111111] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
                aria-required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-lg bg-[#111111] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Tell me about your project or opportunity..."
                aria-required
              />
            </div>

            {error && <div className="text-red-400 text-sm">{error}</div>}
            {sent && (
              <div className="text-green-400 text-sm">
                Thanks — your message was sent.
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-5 py-2 shadow hover:shadow-lg transition"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

              <span className="text-sm text-white/70">or email me at</span>
              <a
                className="text-white/90 underline"
                href="mailto:your.email@example.com"
              >
                your.email@example.com
              </a>
            </div>
          </form>
        </div>

        {/* Social / contact info */}
        <aside className="flex flex-col gap-6 items-start justify-between">
          <div className="bg-[#0F0F0F] border border-white/6 rounded-2xl p-6 w-full">
            <h3 className="text-xl font-semibold mb-3">Social</h3>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
                aria-label="Email"
              >
                <div className="p-2 rounded-full bg-white/5">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>your.email@example.com</span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
                aria-label="GitHub"
              >
                <div className="p-2 rounded-full bg-white/5">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span>github.com/yourusername</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <div className="p-2 rounded-full bg-white/5">
                  <Link className="w-5 h-5 text-white" />
                </div>
                <span>linkedin.com/in/yourusername</span>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-white transition"
                aria-label="Twitter"
              >
                <div className="p-2 rounded-full bg-white/5">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span>@yourusername</span>
              </a>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-white/6 rounded-2xl p-6 w-full">
            <h3 className="text-xl font-semibold mb-3">Availability</h3>
            <p className="text-sm text-white/80 mb-3">
              Open to freelance, internships, and full-time roles. I typically
              reply within a couple of days.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Link className="w-5 h-5 text-white" />
              </a>

              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
