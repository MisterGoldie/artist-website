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
    "Michael Hollingsworth (Goldie) is a narrative driven expressionist artist based in the Chicagoland area. His preferred medium is acrylic painting and he has been working as a professional artist for a number of years.",
    "Michael's work is characterized by a unique combination of abstract and expressionism. His work is often mixed media, incorporating acrylic paints, oil pens, paper, and more. Michael’s work is characterized by bold brushstrokes and vibrant colors, which capture the raw emotion and energy of the human experience. He works primarily with acrylics on canvas, using a variety of techniques to achieve a range of textures and effects. Michael's art is heavily influenced by the late Jean - Michel Basquiat, and he aims to leave a legacy much like that of Jean - Michel.",
    "Michael has exhibited art in numerous galleries and museums across the country, including China and the United Kingdom. He has had numerous speaking engagements throughout the United States, highlighting his career and accomplishments thus far within not only the web2 space but the web3 space as well. Michael has also worked with a number of notable clients, including Rolling Stone Magazine and Coinbase.",
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
  image?: string;
  width?: number;
  height?: number;
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
  {
    slug: "crudeboys",
    title: "Crudeboys",
    year: "2024",
    kind: "Dogecoin project",
    summary:
      "Crudely drawn characters centered around the standard 52 card playing deck.",
    image: "/art/crudeboys.PNG",
    width: 1500,
    height: 500,
    href: "https://doggy.market/nfts/crudeboys",
    linkLabel: "Dogecoin marketplace",
  },
  {
    slug: "cupscriptions",
    title: "Cupscriptions",
    year: "2023",
    kind: "Ethscription PFP project",
    summary:
      "Cupscriptions is a 5,000 count art passion project created by Goldie. The goal is to bring ethscriptions to a new underexposed audience of art talent, collectors, and communities to the ethscription ecosystem.",
    image: "/art/cupscriptions.PNG",
    width: 1500,
    height: 500,
    href: "https://cupscriptions.vercel.app/",
    linkLabel: "Cupscriptions website",
  },
  {
    slug: "scary-garys",
    title: "Scary Garys",
    year: "2022",
    kind: "Ethereum PFP project",
    summary:
      "The concept of the Scary Garys digital collectibles is inspired by the nickname of Goldie’s hometown Gary, Indiana. Throughout this series Goldie aims to transform the narrative of his hometown into a new light. The collection consists of 750 generative NFTs featuring a wide variety of entirely unique attributes. This project is accompanied by various benefits to supporters of Goldie, like access to airdrops, giveaways, and future projects.",
    image: "/art/scarygarys.jpg",
    width: 1600,
    height: 892,
    href: "https://opensea.io/collection/scary-garys",
    linkLabel: "OpenSea collection",
  },
];

// Placeholders — replace with your own work. `kind` decides which section of
// /works a piece lands in; digital pieces can add a collection and a
// marketplace link.
export const works: Work[] = [
  {
    slug: "lastdays",
    title: "Last Days In October",
    year: "2026",
    medium: "Digital work",
    dimensions: "2000 × 2000 px",
    image: "/art/lastdays.jpg",
    width: 1600,
    height: 1600,
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
    slug: "monster-maxie",
    title: "Monster Maxie",
    year: "2025",
    medium: "Digital work",
    dimensions: "1300 × 1500 px",
    image: "/art/maxiemonster.PNG",
    width: 1300,
    height: 1500,
    kind: "digital",
  },
  {
    slug: "raymone",
    title: "Raymone",
    year: "2023",
    medium: "Digital painting",
    image: "/art/raymone.jpeg",
    width: 1170,
    height: 1170,
    kind: "digital",
    tokens: [
      {
        chain: "Zora",
        standard: "ERC-721",
        collection: "Characters",
        identifier: "Token #2",
        url: "https://opensea.io/item/zora/0xf0ad795f0a2cfb5fd3cdc419bfc58a18feef2ca1/2",
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
    width: 1250,
    height: 1600,
    kind: "physical",
  },
  {
    slug: "gacy",
    title: "Gacy",
    year: "2021",
    medium: "Acrylic paint and oil pen",
    dimensions: "11 × 14 in",
    image: "/art/gacy.jpeg",
    width: 1240,
    height: 1600,
    kind: "physical",
  },
  {
    slug: "the-ufo",
    title: "The UFO",
    year: "2021",
    medium: "Oil pastels and acrylic paint",
    dimensions: "16 × 20 in",
    image: "/art/theufo.jpeg",
    width: 1273,
    height: 1600,
    kind: "physical",
  },
  {
    slug: "guess-whos-coming-to-dinner",
    title: "Guess Who's Coming to Dinner",
    year: "2021",
    medium: "Acrylic paint and oil pen",
    dimensions: "16 × 20 in",
    image: "/art/guesswho.jpeg",
    width: 1243,
    height: 1600,
    kind: "physical",
    tokens: [
      {
        chain: "Ethereum",
        standard: "ERC-721",
        collection: "KnownOrigin",
        identifier: "Token #1792000",
        url: "https://opensea.io/item/ethereum/0xabb3738f04dc2ec20f4ae4462c3d069d02ae045b/1792000",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "not-lickitung",
    title: "Not Lickitung",
    year: "2022",
    medium: "Acrylic and oil pen",
    dimensions: "11 × 14 in",
    image: "/art/notlickitung.jpeg",
    width: 1600,
    height: 1248,
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
    width: 1261,
    height: 1600,
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
    width: 1600,
    height: 1598,
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
    slug: "steven",
    title: "Steven",
    year: "2024",
    medium: "Acrylic paint and oil pen",
    dimensions: "11 × 14 in",
    image: "/art/steven.jpg",
    width: 1233,
    height: 1600,
    kind: "physical",
  },
];

/** Newest first. Sorting here means adding a work never needs manual reordering.
 *  Handles plain years and ranges like "2024–2025" by reading the leading year. */
const yearNum = (work: Work) => Number(work.year.slice(0, 4));

export const worksByYear: Work[] = [...works].sort((a, b) => yearNum(b) - yearNum(a));

/** Home page selection. Mark a work `featured: true` to control it directly;
 *  with nothing marked, fall back to the three most recent so the section is
 *  never empty. */
export const featuredWorks = (() => {
  const marked = worksByYear.filter((work) => work.featured);
  return marked.length > 0 ? marked : worksByYear.slice(0, 3);
})();
