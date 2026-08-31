# aaron — personal site

A writer's-desk portfolio and notes blog. React 19 + Vite + Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Writing a note

Posts are markdown files. There is no CMS, no database, and nothing to register —
drop a file in `src/content/notes/` and it appears on the site.

1. Create `src/content/notes/my-post-title.md`. **The filename becomes the URL**
   (`/notes/my-post-title`), so keep it lowercase and hyphenated.
2. Start the file with frontmatter, then write the body in plain markdown:

   ```markdown
   ---
   title: "On writing code you can read out loud"
   date: "2026-08-14"
   excerpt: "The one-line summary shown on the notes index."
   ---

   Body copy starts here.
   ```

   Keep the quotes around `date` — unquoted, YAML turns it into a Date object
   and the sorting breaks.
3. `git commit && git push`. The host rebuilds and the note is live.

Notes sort newest-first automatically. Reading time is calculated from the word
count. The three most recent appear in the **Marginalia** section on the home
page; the full list lives at `/notes`.

Supported in the body: headings, **bold**, *italic*, lists, tables, blockquotes,
links, and fenced code blocks — all styled by `.prose-note` in `src/index.css`.
The first paragraph gets a drop cap.

## Layout

```
src/
  content/notes/*.md   the posts
  content/notes.ts     build-time loader (import.meta.glob)
  pages/               Home, NotesIndex, NotePage, NotFound
  sections/            the home-page sections
  components/          Navbar, Footer, ProjectCard, Reveal
  index.css            design tokens + prose styles
```

## Deploying

The site is a single-page app, so the host must rewrite unknown paths to
`index.html` or a hard refresh on `/notes/<slug>` will 404.

- **Netlify** — handled by `public/_redirects`, already committed.
- **Vercel** — automatic for Vite projects, nothing to do.
- **GitHub Pages** — needs a `404.html` copy of `index.html`.

Posts are rendered client-side, so search engines and link previews see an empty
shell. Fine for a personal blog; if that changes, pre-rendering is the next step.
