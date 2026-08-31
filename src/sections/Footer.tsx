import { Link } from "react-router";

const year = new Date().getFullYear();

const links = [
  { label: "About", to: "/#about" },
  { label: "Craft", to: "/#craft" },
  { label: "Works", to: "/works" },
  { label: "Notes", to: "/notes" },
  { label: "Contact", to: "/#contact" },
  { label: "Back to top", to: "/#top" },
];

function Footer() {
  return (
    <footer className="w-full border-t border-clay/60 bg-linen px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Link
            to="/"
            className="font-display text-4xl leading-none tracking-tight text-bark transition-colors duration-200 hover:text-ink sm:text-5xl"
          >
            aaron
          </Link>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
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
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-clay/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label normal-case tracking-[0.08em]">
            © {year} Aaron Matthew Francisco. Written and built in Pampanga.
          </p>
          <p className="label normal-case tracking-[0.08em] text-clay">
            Set in Fraunces, Newsreader &amp; JetBrains Mono.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
