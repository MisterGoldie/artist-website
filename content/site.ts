// Everything the site displays lives here — edit this file to make the site
// yours. No other file needs to change for text or collection updates.

export const site = {
  name: "Goldie",
  role: "Painting & visual art",
  tagline: "Colorful, raw paintings with crooked lines, cartoonish characters, and a creepy edge.",
  intro:
    "I'm Goldie, a painter from the Chicagoland area, working mainly in acrylics and mixed media. My work centers around a raw, illustrative comic style with a heavy gothic/punk influence.",
  email: "goldiesnft@gmail.com",
  secondaryEmail: "scarygarysnft@gmail.com",
  links: [
    { label: "Instagram", href: "https://www.instagram.com/GoldiesNFTart" },
    { label: "X", href: "https://x.com/GoldiesNFTart" },
    { label: "Email", href: "mailto:goldiesnft@gmail.com" },
  ],
  about: [
    "Michael Hollingsworth, known professionally as Goldie, is a narrative-driven expressionist artist based in the Chicagoland area. Working primarily in acrylics, he has built a professional practice around paintings that turn personal and cultural experience into vivid visual stories.",
    "Goldie's work moves between abstraction and expressionism, often combining acrylic paint with oil pen, paper, and other mixed media. Bold brushstrokes, saturated color, and layered surfaces give the paintings their emotional charge and sense of movement. Influenced by artists like Jean-Michel Basquiat and Tim Burton, Goldie aims to create work that feels immediate, honest, and enduring.",
    "Goldie has exhibited in galleries and museums across the United States, China, and the United Kingdom. He has also spoken throughout the United States about his career across both Web2 and Web3, and has worked with notable clients including Rolling Stone and Coinbase.",
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
  links?: { href: string; label: string }[];
  href?: string;
  linkLabel?: string;
};

// Placeholders — replace with your own commissions, collaborations, and murals.
export const projects: Project[] = [
  {
    slug: "gary-ghosts",
    title: "Gary Ghosts",
    year: "2027 (future)",
    kind: "Future project",
    summary:
      "Goldie returns with the Gary Ghosts. Gary Ghosts are based on the childhood act of pretending to be a ghost by throwing a sheet over your head. Let this collection take you back to your childhood and bring you happiness. Gary Ghosts are apart of the Scary Garys family.",
    image: "/art/garyghost.png",
    width: 2000,
    height: 2000,
  },
  {
    slug: "based-art-v6",
    title: "Based Art V6",
    year: "2024",
    kind: "Bitcoin Ordinals collection",
    summary:
      "Based Art and Goldie bring you a limited collection of 11 pieces, inscribed as 3D digital artifacts on the Bitcoin blockchain.",
    image: "/art/bitcoin.JPG",
    width: 1067,
    height: 1600,
    href: "https://www.satflow.com/ordinals/goldie",
    linkLabel: "Satflow collection",
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
  {
    slug: "rolling-stone-coinbase",
    title: "Rolling Stone & Coinbase",
    year: "2022",
    kind: "Collaboration",
    summary:
      "Rolling Stone & Coinbase partnered with 12 digital artists to reimagine the iconic Rolling Stone logo, in celebration of a new form of artistry & talent in the world of NFTs.",
    image: "/art/rollingstone.png",
    width: 1600,
    height: 1600,
    links: [
      {
        href: "https://www.rollingstone.com/culture/culture-features/rolling-stone-and-coinbase-nft-drop-1292861/",
        label: "Rolling Stone article",
      },
      {
        href: "https://og.rarible.com/token/0x1f677c0b0c3792b3031cfc41521d0629aa9ce360:58472653741693882136970028497623479695272297541097779260954760618212669259777",
        label: "Rarible",
      },
    ],
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
    medium: "Digital painting",
    dimensions: "2000 × 2000 px",
    image: "/art/lastdays.jpg",
    width: 1600,
    height: 1600,
    kind: "digital",
    featured: true,
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
    medium: "Digital painting",
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
    dimensions: "1170 × 1170 px",
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
    slug: "sobotime",
    title: "SOBOTIME!",
    year: "2023",
    medium: "Acrylic paint, oil pen, and digital",
    dimensions: "943 × 1200 px",
    image: "/art/sobotime.jpg",
    width: 943,
    height: 1200,
    kind: "digital",
  },
  {
    slug: "bruno",
    title: "Bruno",
    year: "2021",
    medium: "Acrylic paint and oil pen on canvas",
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
    medium: "Acrylic paint and oil pen on canvas",
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
    medium: "Oil pastels and acrylic paint on canvas",
    dimensions: "16 × 20 in",
    image: "/art/theufo.jpeg",
    width: 1273,
    height: 1600,
    kind: "physical",
  },
  {
    slug: "guess-whos-coming-to-brunch",
    title: "Guess Who's Coming to Brunch",
    year: "2021",
    medium: "Acrylic paint and oil pen on canvas",
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
    slug: "untitled",
    title: "Untitled",
    year: "2021",
    medium: "Acrylic paint and oil pastels",
    dimensions: "11 × 14 in",
    image: "/art/untitled.JPG",
    width: 908,
    height: 1200,
    kind: "physical",
  },
  {
    slug: "made-in-japan",
    title: "MADe In Japan",
    year: "2021",
    medium: "Acrylic paint, oil pen, and oil pastels on canvas",
    dimensions: "9 × 12 in",
    image: "/art/madeinjapan.jpeg",
    width: 1600,
    height: 1196,
    kind: "physical",
    tokens: [
      {
        chain: "Ethereum",
        standard: "ERC-721",
        url: "https://opensea.io/item/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/82072708721342058041414421871050035180110027204151684953782159087430763806721",
        label: "OpenSea",
      },
    ],
  },
  {
    slug: "not-lickitung",
    title: "Not Lickitung",
    year: "2022",
    medium: "Acrylic paint and oil pen on canvas",
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
    medium: "Acrylic paint and oil pen on canvas",
    dimensions: "11 × 14 in",
    image: "/art/dumbzombie.jpeg",
    width: 1261,
    height: 1600,
    kind: "physical",
    featured: true,
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
    slug: "hear-no-evil",
    title: "Hear no Evil (Self-Portrait)",
    year: "2022",
    medium: "Acrylic paint and oil pen on canvas",
    dimensions: "11 × 14 in",
    image: "/art/hearnoevil.JPG",
    width: 1224,
    height: 1600,
    kind: "physical",
  },
  {
    slug: "quiet",
    title: "Quiet",
    year: "2024",
    medium: "Acrylic paint and oil pen on canvas",
    dimensions: "20 × 20 in",
    image: "/art/quiet.JPG",
    width: 1600,
    height: 1598,
    kind: "physical",
    featured: true,
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
    medium: "Acrylic paint and oil pen on canvas",
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
