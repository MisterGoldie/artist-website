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
          sizes="(min-width: 768px) 672px, 92vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </div>

      <figcaption className="mt-4 border-t border-line pt-3">
        <p className="font-display text-xl leading-tight">{work.title}</p>
        <p className="mt-1 text-sm text-muted">
          <span className="block whitespace-nowrap">{work.medium}</span>
          <span className="block whitespace-nowrap">
            {work.dimensions ? ` · ${work.dimensions}` : ""}
            <span className="tabular-nums"> · {work.year}</span>
          </span>
        </p>

        {work.tokens?.length ? (
          <div className="mt-2 space-y-1">
            {work.tokens.map((token) => {
              const parts = [
                token.chain,
                token.collection,
                token.edition,
                token.identifier,
                token.weight,
              ].filter(Boolean);

              return (
                <p
                  key={token.url}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-muted"
                >
                  <span>{parts.join(" · ")}</span>
                  <a
                    href={token.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                  >
                    {token.label ?? "View"} &rarr;
                  </a>
                </p>
              );
            })}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
