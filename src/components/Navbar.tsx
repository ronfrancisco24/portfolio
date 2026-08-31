import { useEffect, useState } from "react";
import { Link } from "react-router";

const links = [
  { label: "About", to: "/#about" },
  { label: "Craft", to: "/#craft" },
  { label: "Works", to: "/works" },
  { label: "Notes", to: "/notes" },
  { label: "Contact", to: "/#contact" },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 bg-paper/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-b border-clay/50" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10"
      >
        <Link
          to="/"
          className="font-display text-2xl leading-none tracking-tight text-bark transition-colors duration-200 hover:text-ink"
        >
          aaron
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="label transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 ease-out ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 ease-out ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-clay/50 bg-paper md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2 sm:px-10">
          {links.map((link) => (
            <li
              key={link.to}
              className="border-b border-clay/30 last:border-0"
            >
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="label block py-4 transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
