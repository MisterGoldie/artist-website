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
      <div className="overflow-hidden bg-line/40">
        <Image
          src={work.image}
          alt={`${work.title} — ${work.medium}, ${work.year}`}
          width={work.width}
          height={work.height}
          priority={priority}
          sizes="(min-width: 768px) 46vw, 92vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </div>

      <figcaption className="mt-4 border-t border-line pt-3">
        <p className="font-display text-xl leading-tight">{work.title}</p>
        <p className="mt-1 text-sm text-muted">
          {work.medium}
          {work.dimensions ? ` · ${work.dimensions}` : ""}
          <span className="tabular-nums"> · {work.year}</span>
        </p>
      </figcaption>
    </figure>
  );
}
