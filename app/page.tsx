import Link from "next/link";
import { WorkCard } from "@/components/work-card";
import { featuredWorks, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          {site.role}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/works"
            className="border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-paper"
          >
            See the work
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            {site.email}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-8">
        <div className="flex items-baseline justify-between border-t border-line pt-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted">
            Selected works
          </h2>
          <Link
            href="/works"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            All works &rarr;
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-20">
          {featuredWorks.map((work, index) => (
            <WorkCard key={work.slug} work={work} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-6">
        <div className="border-y border-line py-14">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="font-display text-2xl leading-snug text-balance sm:text-3xl">
              &ldquo;I create based on feeling, I create based on my reality.
              The uneven lines and colors are a representation of the world
              and its imperfections.&rdquo;
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
              {site.name}, artist notes
            </footer>
          </blockquote>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/about"
            className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            About the artist
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
