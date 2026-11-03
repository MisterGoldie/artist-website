import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Commissions, collaborations, murals, and open studio projects outside the studio series.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-4">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Commissions, collaborations, and exhibitions that sit outside the studio
        series — including what is on the easel right now.
      </p>

      <ul className="mt-14 divide-y divide-line border-t border-line">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="grid gap-3 py-9 sm:grid-cols-[8rem_1fr] sm:gap-10"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-muted sm:pt-1.5">
              <p className="tabular-nums text-ink">{project.year}</p>
              <p className="mt-1.5 normal-case tracking-normal">
                {project.kind}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                {project.title}
              </h2>
              {project.image && project.width && project.height ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  sizes="(min-width: 640px) 672px, calc(100vw - 3rem)"
                  className="mt-6 h-auto w-full max-w-2xl"
                />
              ) : null}
              {project.with ? (
                <p className="mt-1.5 text-sm text-muted">
                  with {project.with}
                </p>
              ) : null}
              <p className="mt-3 max-w-xl leading-relaxed text-muted">
                {project.summary}
              </p>
              {project.href ? (
                <p className="mt-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                  >
                    {project.linkLabel ?? "More"} &rarr;
                  </a>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-16">
        <Link
          href="/works"
          className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Browse the works &rarr;
        </Link>
      </p>
    </section>
  );
}
