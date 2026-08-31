---
title: "What it took to make this website"
date: "2026-08-28"
excerpt: "A list of the work behind this site: the colors, the fonts, the blog setup, and the bug that turned the whole page blank."
---

I built this site myself in React. It looks simple, and that is on purpose. But
simple still takes a while.

Here is most of what went into it.

## Colors and fonts

I started with four colors: a warm brown, a grey, and two shades of off-white.
No more than that.

Then I checked the brown against the background color. It scored 4.51 to 1,
which is just barely above the minimum for text people can read. Fine for a
heading. Tiring for a whole paragraph. So I added a darker color for body text,
and the brown became a color for headings and links instead.

I used three fonts. One serif for the big headings, one built for reading, and a
monospace font for the small labels. Three sounds like a lot, but each one has a
clear job.

## The blog

I did not want a database or an admin page. Every post here is a plain text file
in the project folder.

I write the file, save it, and push it to GitHub. The site rebuilds and the post
is live. There is nothing to log into and nothing to break.

The tool that turns those files into a web page is about 160KB. That is a lot to
send to someone who only wants the home page, so it now loads only when you open
a post.

## The parts that took longest

- **Small screens.** Every section had to work at 375 pixels wide and still look
  right at 1440.
- **Keyboard use.** You can tab through the whole site and always see where you
  are.
- **Cutting things.** A fake timeline, a skills list copied from my resume, and a
  project I had no proof for all came out.

## The bug

At one point the whole site went blank. No error message, just a white page.

The file on my computer was fine and the build worked. But the dev server had
saved an empty copy of one file and kept handing that out. One broken file was
enough to stop the entire app from loading.

The fix was to stop the server and start it again. It took much longer to find
than to fix, which is usually how it goes.
