import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { worksByYear, type WorkKind } from "@/content/site";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Digital and physical work — on-chain editions alongside paintings on panel, board, and canvas.",
};

// Section order is decided here: digital first, since that's the primary
// practice. Swap the entries to lead with physical work instead.
const sections: { kind: WorkKind; title: string; blurb: string }[] = [
  {
    kind: "digital",
    title: "Digital",
    blurb: "On-chain editions and 1-of-1 digital paintings.",
  },
  {
    kind: "physical",
    title: "Physical",
    blurb:
      "Paintings on panel, board, and canvas. Available through the studio.",
  },
];

export default function WorksPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-4">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Works</h1>
      <p className="mt-4 max-w-xl text-muted">
        Two bodies of work: digital editions minted on-chain, and physical
        paintings made on canvas.
      </p>

      {sections.map((section) => {
        const items = worksByYear.filter((work) => work.kind === section.kind);
        if (items.length === 0) return null;

        return (
          <section key={section.kind} className="mt-20">
            <div className="flex items-baseline justify-between gap-4 border-t border-line pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted">
                {section.title}
              </h2>
              <p className="shrink-0 text-sm tabular-nums text-muted">
                {items.length} {items.length === 1 ? "work" : "works"}
              </p>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted">{section.blurb}</p>

            <div className="mx-auto mt-12 max-w-2xl space-y-20">
              {items.map((work, index) => (
                <WorkCard key={work.slug} work={work} priority={index === 0} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
