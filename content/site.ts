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

export type Work = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  dimensions?: string;
  image: string;
  /** Intrinsic pixel size of the image file. Artwork is never cropped, so the
   *  rendered box takes this aspect ratio. Update if you swap the file. */
  width: number;
  height: number;
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

export const works: Work[] = [
  {
    slug: "afternoon-window",
    title: "Afternoon Window",
    year: "2025",
    medium: "Acrylic and collage on panel",
    dimensions: "40 × 50 cm",
    image: "/art/afternoon-window.svg",
    width: 1000,
    height: 1250,
    featured: true,
  },
  {
    slug: "quiet-room",
    title: "Quiet Room",
    year: "2025",
    medium: "Acrylic on linen",
    dimensions: "60 × 75 cm",
    image: "/art/quiet-room.svg",
    width: 1400,
    height: 1000,
    featured: true,
  },
  {
    slug: "late-light",
    title: "Late Light",
    year: "2024",
    medium: "Oil on board",
    dimensions: "30 × 40 cm",
    image: "/art/late-light.svg",
    width: 1100,
    height: 1100,
    featured: true,
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
  },
];

export const featuredWorks = works.filter((work) => work.featured);
