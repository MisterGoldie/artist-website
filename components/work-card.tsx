import Image from "next/image";
import type { Work } from "@/content/site";

export function WorkCard({
  work,
  priority = false,
}: {
  work: Work;
  priority?: boolean;
}) {
  return (
    <figure className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-line/40">
        <Image
          src={work.image}
          alt={`${work.title} — ${work.medium}, ${work.year}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-display text-lg leading-tight">{work.title}</p>
          <p className="text-sm text-muted">
            {work.medium}
            {work.dimensions ? ` · ${work.dimensions}` : ""}
          </p>
        </div>
        <p className="shrink-0 text-sm tabular-nums text-muted">{work.year}</p>
      </figcaption>
    </figure>
  );
}
