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
- `projects` — commissions, collaborations, murals, and open-studio projects
  shown on `/projects`. Each entry needs `slug`, `title`, `year`, `kind`, and
  `summary`, and optionally `with` (collaborator or client), `href`, and
  `linkLabel`. They are listed in the order written, so newest-first is just
  editing order.
- `works` — the gallery. Each entry needs `slug`, `title`, `year`, `medium`,
  `image`, `width`, `height`, and `kind`, and optionally `dimensions`,
  `tokens`, and `featured`. Works marked `featured: true` also appear on the
  home page.

### Physical vs digital work

`/works` renders up to two sections, driven by each work's `kind`:

| `kind` | Appears under |
|---|---|
| `"digital"` | Digital |
| `"physical"` | Physical |

`kind` is just what the piece is. A physical painting that is also tokenized
stays `"physical"` — the on-chain info is carried separately in `tokens` and
shows under the caption either way.

### On-chain references

Any work can carry a `tokens` array, and it renders under the caption whatever
the `kind` is. A work can hold several tokens, so the same piece can have an
Ethereum edition *and* a Bitcoin ordinal.

| Token field | Example |
|---|---|
| `chain` | `"Bitcoin"`, `"Base"`, `"Ethereum"` |
| `standard` | `"Ordinal"`, `"ERC-721"` |
| `collection` | `"GOLDIE X BASED V6"` |
| `edition` | `"XI of XI"` (optional) |
| `identifier` | `"Inscription #76,820,445"` (optional) |
| `weight` | `"72 KB glTF"` — artifact size/type (optional) |
| `url` | where the token lives |
| `label` | link text, e.g. `"ordinals.com"` (defaults to "View") |

Only `chain` and `url` are required. Everything else is optional, so a work with
no on-chain presence simply omits `tokens` and shows the plain caption.

Section order lives in the `sections` array at the top of
[`app/works/page.tsx`](app/works/page.tsx) — currently digital first, since
that's the primary practice. A section with no works in it is skipped
entirely, so the page stays sensible while you're still loading pieces in.

Page copy that isn't artist-specific (headings, button labels) lives in
`app/*/page.tsx`.

### Adding or replacing artwork

1. Drop the image into `public/art/` (e.g. `public/art/new-piece.jpg`).
2. Add an entry to `works` in `content/site.ts` pointing at `/art/new-piece.jpg`,
   with the file's real pixel `width` and `height`, and a `kind`.

`width`/`height` matter: the gallery never crops artwork, so each image renders
at its true aspect ratio. Works are shown one per row in a centred column, so a
portrait piece is simply taller than a landscape one. Getting the numbers wrong
distorts the layout, not the art — the image is scaled to the box you declare.

The six SVG files currently in `public/art/` are generated abstract
placeholders, deliberately at mixed aspect ratios so the layout can be checked
with portrait, landscape, and square pieces — delete them once real photographs
are in place. Once no SVGs are left, you can also remove the
`dangerouslyAllowSVG` setting from [`next.config.ts`](next.config.ts).

## Structure

```
app/
  layout.tsx        # shell: fonts, header, footer, metadata
  page.tsx          # home
  works/page.tsx    # full gallery
  projects/page.tsx # commissions, collaborations, murals
  about/page.tsx    # bio + exhibitions
  contact/page.tsx  # email + socials
  not-found.tsx     # 404
components/
  site-header.tsx   # nav with active-page state
  site-footer.tsx
  work-card.tsx     # one artwork: uncropped image + full caption
content/site.ts     # all site content
public/art/         # artwork images
```

## Notes

- Tailwind is pinned to `~4.1` because Tailwind 4.3 requires Node ≥ 20.19 for
  its build pipeline; this machine runs Node 20.16. Upgrading Node lets you
  move to the latest Tailwind.
- To deploy, push to GitHub and import the repo in Vercel — the defaults work
  as-is.
