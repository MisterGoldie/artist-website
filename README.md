# Goldie — artist website

A small, static artist portfolio built with Next.js (App Router) and Tailwind CSS.
Four pages: home, works, about, contact. No database, no CMS, no client-side JS
beyond navigation.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Editing the site

Almost everything lives in one file: [`content/site.ts`](content/site.ts).

- `site` — name, role, tagline, intro, email, studio note, social links, bio
  paragraphs, exhibition list, footer year.
- `works` — the gallery. Each entry needs `slug`, `title`, `year`, `medium`,
  `image`, and optionally `dimensions` and `featured`. Works marked
  `featured: true` also appear on the home page.

Page copy that isn't artist-specific (headings, button labels) lives in
`app/*/page.tsx`.

### Adding or replacing artwork

1. Drop the image into `public/art/` (e.g. `public/art/new-piece.jpg`).
2. Add an entry to `works` in `content/site.ts` pointing at `/art/new-piece.jpg`.

The six SVG files currently in `public/art/` are generated abstract
placeholders — delete them once real photographs are in place. Once no SVGs are
left, you can also remove the `dangerouslyAllowSVG` setting from
[`next.config.ts`](next.config.ts).

## Structure

```
app/
  layout.tsx        # shell: fonts, header, footer, metadata
  page.tsx          # home
  works/page.tsx    # full gallery
  about/page.tsx    # bio + exhibitions
  contact/page.tsx  # email + socials
  not-found.tsx     # 404
components/
  site-header.tsx   # nav with active-page state
  site-footer.tsx
  work-card.tsx     # one artwork: image, title, medium, year
content/site.ts     # all site content
public/art/         # artwork images
```

## Notes

- Tailwind is pinned to `~4.1` because Tailwind 4.3 requires Node ≥ 20.19 for
  its build pipeline; this machine runs Node 20.16. Upgrading Node lets you
  move to the latest Tailwind.
- To deploy, push to GitHub and import the repo in Vercel — the defaults work
  as-is.
