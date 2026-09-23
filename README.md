# am1r.net

Personal site — CV at `/`, writing at `/blog`, about at `/about`. Built after
the "Clean Personal Resume" layout: black background, two columns, a sticky
left rail, and hairline rules between sections.

Replaces the previous Jekyll blog. Old post URLs still resolve (see Redirects).

Built with [Astro](https://astro.build) — the output is static HTML with no
client-side JavaScript.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Writing posts

Posts live in `src/content/blog/` as Markdown, named `YYYY-MM-DD-slug.md` —
the same shape Jekyll used, so drafting in Obsidian works exactly as before.

```markdown
---
title: "Post Title"
date: 2026-01-20
categories: blog
draft: false          # omit to publish; true keeps it out of the build
description: ""       # optional; the list view auto-excerpts without it
---
```

The date in the **filename** builds the URL (`/blog/2026/01/20/slug/`); the one
in frontmatter is what gets displayed. Frontmatter is schema-checked at build
time, so a malformed date fails the build instead of silently mis-sorting.

`draft: true` excludes a post from the blog index, the RSS feed, and the built
routes entirely.

RSS is served from `/feed.xml` — the same path jekyll-feed used, so existing
subscribers carry over.

## Redirects

The old Jekyll permalinks were mixed-case and ended in `.html`; Astro's routes
are lowercase directories. `public/blog/**/*.html` holds one small redirect
page per old URL, copied verbatim into the build so they resolve at the exact
original path.

Astro's built-in `redirects` config can't do this — it generates a *directory*
named `Unconventional.html`, which only resolves with a trailing slash.

## Edit your content

Everything lives in **`src/data/cv.ts`**. That is the only file you need to
touch to change what the site says — name, role, summary, contact links,
experience, skills, education, recommendations, certifications.

Add or remove entries freely; the page loops over whatever is in the arrays.

## Change the look

Design tokens sit at the top of **`src/styles/global.css`**:

| Token       | Dark      | Light     | Used for                   |
| ----------- | --------- | --------- | -------------------------- |
| `--bg`      | `#000000` | `#ffffff` | page background            |
| `--fg`      | `#ffffff` | `#000000` | primary text               |
| `--muted`   | `#ababab` | `#6e6e6e` | secondary text, meta lines |
| `--rule`    | `#383838` | `#dedede` | hairline section dividers  |
| `--sidebar` | `368px`   | —         | left column width          |

Light `--muted` is **not** the template's `#ababab`. On white that lands at
2.3:1 and fails WCAG AA; `#6e6e6e` gives 5.1:1. If you change it, keep it at
or below `#767676`.

Fonts are Schibsted Grotesk (headings and UI) and Geist (bullet copy), both
loaded from Google Fonts in `src/layouts/Base.astro`.

## Theme toggle

The sun/moon button in the masthead appears on every page (it lives in
`src/components/Masthead.astro`, which both pages use).

- **Dark is the default**, because that is the template's design.
- The choice is saved to `localStorage` under the key `theme`.
- A small blocking script in the `<head>` of `src/layouts/Base.astro` applies
  the saved theme *before first paint*, so a returning light-mode visitor
  never sees a flash of black. **Keep that script inline and in the `<head>`** —
  moving it or letting a bundler defer it reintroduces the flash.
- Printing always uses the print palette, whichever theme is on screen.

To follow the visitor's OS setting instead of always starting dark, add this
to `global.css`. Anyone who has explicitly picked dark still gets dark:

```css
@media (prefers-color-scheme: light) {
  :root:not([data-theme='dark']) {
    --bg: #ffffff;
    --fg: #000000;
    --muted: #6e6e6e;
    --rule: #dedede;
    color-scheme: light;
  }
}
```

## Build

```bash
npm run build
```

Static files land in `dist/`.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes to
GitHub Pages on every push to `gh-pages`.

This **must** be an Actions workflow. GitHub Pages' built-in build only knows
Jekyll and will not build an Astro site — in the repo's Pages settings, Source
has to be set to **GitHub Actions**, not "Deploy from a branch".

`public/CNAME` carries `am1r.net` into the build so the custom domain survives
each deploy.

## Printing

There is a print stylesheet: the nav and footer drop out, colors invert to
black-on-white, and sections avoid breaking across pages. Cmd-P gives a
usable PDF of the CV.
