// Everything the site displays lives here — edit this file to make the site
// yours. No other file needs to change for text or collection updates.

export const site = {
  name: "Goldie",
  role: "Painting & visual art",
  tagline: "Paintings about light, memory, and the quiet parts of a room.",
  intro:
    "I'm Goldie, a painter working in acrylic and mixed media. My work circles around light on familiar surfaces — a windowsill, a kitchen table, the last hour of the afternoon.",
  email: "goldiesnft@gmail.com",
  location: "Studio visits by appointment",
  links: [
    { label: "Instagram", href: "https://instagram.com/goldiesnft" },
    { label: "Email", href: "mailto:goldiesnft@gmail.com" },
  ],
  about: [
    "Goldie is a painter and mixed-media artist. Trained in traditional oil technique and later drawn to acrylic and collage, the work is built in layers — sanded back, repainted, with earlier marks left showing through.",
    "The recent series returns to interiors: the corner of a studio, a chair by a window, a table just after everyone has left. The paintings are small on purpose. They ask you to stand close.",
    "Work is available through the studio, with occasional open studios and small-group viewings. Write to say hello or to ask about availability.",
  ],
  exhibitions: [
    { year: "2025", title: "Quiet Rooms", venue: "Studio open house" },
    { year: "2024", title: "Late Light", venue: "Group exhibition, local gallery" },
    { year: "2023", title: "First Marks", venue: "Self-published catalogue" },
  ],
  // Bump this when you want the footer year to change.
  copyrightYear: 2026,
};

export type WorkKind = "physical" | "digital";

/** An on-chain reference. A work can carry several — e.g. an Ethereum edition
 *  and a Bitcoin ordinal of the same piece. */
export type Token = {
  chain: string;
  standard?: string;
  collection?: string;
  /** Edition within the collection, e.g. "XI of XI". */
  edition?: string;
  /** Human-readable id, e.g. "Inscription #76,820,445". */
  identifier?: string;
  /** Artifact size and type, e.g. "72 KB glTF". */
  weight?: string;
  url: string;
  label?: string;
};

export type Work = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  /** Physical size in cm/in, or pixel dimensions for digital work. */
  dimensions?: string;
  image: string;
  /** Intrinsic pixel size of the image file. Artwork is never cropped, so the
   *  rendered box takes this aspect ratio. Update if you swap the file. */
  width: number;
  height: number;
  /** Which section of /works the piece appears in. A tokenized work is still
   *  whatever it actually is — a physical painting with an ordinal stays
   *  "physical". */
  kind: WorkKind;
  /** On-chain references. Rendered under the caption on any kind of work. */
  tokens?: Token[];
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  /** Single year or a range, e.g. "2025" or "2024–2025". */
  year: string;
  /** Commission, Collaboration, Mural, Exhibition… */
  kind: string;
  /** Collaborators, client, or venue. */
  with?: string;
  summary: string;
  href?: string;
  linkLabel?: string;
};

// Placeholders — replace with your own commissions, collaborations, and murals.
export const projects: Project[] = [
  {
    slug: "mural-main-street",
    title: "Main Street Mural",
    year: "2025",
    kind: "Mural commission",
    with: "City Arts Council",
    summary:
      "A four-metre exterior mural for a storefront wall, painted over eight days with a scaffold and a small crew. Built around the same light-and-interior vocabulary as the studio work, scaled up.",
    href: "https://instagram.com/goldiesnft",
    linkLabel: "Process photos",
  },
  {
    slug: "late-light-collaboration",
    title: "Late Light, together",
    year: "2024",
    kind: "Collaboration",
    with: "a poet and a sound artist",
    summary:
      "A joint exhibition pairing twelve paintings with twelve short texts and a looping room recording. Each painting was made in response to a text, and each text revised against the finished panel.",
  },
  {
    slug: "studio-open-house",
    title: "Open Studio Weekend",
    year: "2024",
    kind: "Open studio",
    summary:
      "Two days of open doors: works in progress on the wall, unfinished panels face-out, and the whole collection laid out for viewing. The annual chance to see things before they are resolved.",
  },
];

// Placeholders — replace with your own work. `kind` decides which section of
// /works a piece lands in; digital pieces can add a collection and a
// marketplace link.
export const works: Work[] = [
  {
    slug: "lastdays",
    title: "Last Days",
    year: "2026",
    medium: "Digital work",
    dimensions: "2000 × 2000 px",
    image: "/art/lastdays.png",
    width: 2000,
    height: 2000,
    kind: "digital",
    tokens: [
      {
        chain: "Base",
        standard: "ERC-721",
        collection: "October 2026",
        identifier: "Token #1",
        url: "https://opensea.io/item/base/0xb62e827f4cbe8005646c538a2ec9b754106fb34c/1",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "afternoon-window",
    title: "Afternoon Window",
    year: "2025",
    medium: "Generative painting, on-chain edition",
    dimensions: "4000 × 5000 px",
    image: "/art/afternoon-window.svg",
    width: 1000,
    height: 1250,
    kind: "digital",
    tokens: [
      {
        chain: "Base",
        standard: "ERC-721",
        collection: "Quiet Rooms",
        url: "https://opensea.io/collection/your-collection-name",
        label: "OpenSea",
      },
    ],
    featured: true,
  },
  {
    slug: "quiet-room",
    title: "Quiet Room",
    year: "2025",
    medium: "Generative painting, on-chain edition",
    dimensions: "4200 × 3000 px",
    image: "/art/quiet-room.svg",
    width: 1400,
    height: 1000,
    kind: "digital",
    tokens: [
      {
        chain: "Base",
        standard: "ERC-721",
        collection: "Quiet Rooms",
        url: "https://opensea.io/collection/your-collection-name",
        label: "OpenSea",
      },
    ],
    featured: true,
  },
  {
    slug: "late-light",
    title: "Late Light",
    year: "2024",
    medium: "Digital painting, 1 of 1",
    dimensions: "3300 × 3300 px",
    image: "/art/late-light.svg",
    width: 1100,
    height: 1100,
    kind: "digital",
    tokens: [
      {
        chain: "Base",
        standard: "ERC-721",
        collection: "Late Light",
        url: "https://opensea.io/collection/your-collection-name",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "bruno",
    title: "Bruno",
    year: "2021",
    medium: "Acrylic and oil pen on canvas",
    dimensions: "11 × 14 in",
    image: "/art/bruno.jpeg",
    width: 2655,
    height: 3399,
    kind: "physical",
  },
  {
    slug: "gacy",
    title: "Gacy",
    year: "2021",
    medium: "Acrylic paint and oil pen",
    dimensions: "11 × 14 in",
    image: "/art/gacy.jpeg",
    width: 1560,
    height: 2013,
    kind: "physical",
  },
  {
    slug: "not-lickitung",
    title: "Not Lickitung",
    year: "2022",
    medium: "Acrylic and oil pen",
    dimensions: "11 × 14 in",
    image: "/art/notlickitung.jpeg",
    width: 2793,
    height: 2179,
    kind: "physical",
    tokens: [
      {
        chain: "Ethereum",
        standard: "ERC-721",
        collection: "KnownOrigin",
        identifier: "Token #2511004",
        url: "https://opensea.io/item/ethereum/0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b/2511004",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "dumb-zombie",
    title: "Dumb Zombie",
    year: "2022",
    medium: "Acrylic and oil pen on canvas",
    dimensions: "11 × 14 in",
    image: "/art/dumbzombie.jpeg",
    width: 2269,
    height: 2878,
    kind: "physical",
    tokens: [
      {
        chain: "Ethereum",
        standard: "ERC-721",
        collection: "KnownOrigin",
        identifier: "Token #2770001",
        url: "https://opensea.io/item/ethereum/0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b/2770001",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "quiet",
    title: "Quiet",
    year: "2024",
    medium: "Acrylic and oil pen on canvas",
    dimensions: "20 × 20 in",
    image: "/art/quiet.JPG",
    width: 3067,
    height: 3064,
    kind: "physical",
    tokens: [
      {
        chain: "Bitcoin",
        standard: "Ordinal",
        collection: "GOLDIE X BASED V6",
        edition: "XI of XI",
        identifier: "Inscription #76,820,445",
        weight: "72 KB glTF",
        url: "https://ordinals.com/inscription/e9804a3794dd0ad7a2bbc44fc02dee7d9d6dbcf0db10e69eb4e2ac36acd4131di0",
        label: "ordinals.com",
      },
    ],
  },
  {
    slug: "kitchen-table",
    title: "Kitchen Table",
    year: "2024",
    medium: "Acrylic and graphite on canvas",
    dimensions: "50 × 50 cm",
    image: "/art/kitchen-table.svg",
    width: 1000,
    height: 1250,
    kind: "physical",
    featured: true,
  },
  {
    slug: "two-chairs",
    title: "Two Chairs",
    year: "2024",
    medium: "Acrylic on panel",
    dimensions: "45 × 60 cm",
    image: "/art/two-chairs.svg",
    width: 1500,
    height: 1000,
    kind: "physical",
  },
  {
    slug: "gold-hour",
    title: "Gold Hour",
    year: "2023",
    medium: "Oil and wax on board",
    dimensions: "25 × 35 cm",
    image: "/art/gold-hour.svg",
    width: 1000,
    height: 1250,
    kind: "physical",
  },
];

export const featuredWorks = works.filter((work) => work.featured);
