import type { Metadata } from "next";
import { WorkCard } from "@/components/work-card";
import { works } from "@/content/site";

export const metadata: Metadata = {
  title: "Works",
  description: "Paintings and mixed-media works available through the studio.",
};

export default function WorksPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-4">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Works</h1>
      <p className="mt-4 max-w-xl text-muted">
        Recent paintings on panel, board, and linen. Availability and pricing on
        request.
      </p>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, index) => (
          <WorkCard key={work.slug} work={work} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
