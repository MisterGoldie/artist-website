import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — ${site.role.toLowerCase()}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        About
      </h1>

      <Image
        src="/art/livetv.jpg"
        alt="Live TV artwork"
        width={1179}
        height={649}
        sizes="(min-width: 1024px) 896px, calc(100vw - 3rem)"
        className="mt-8 h-auto w-full"
      />

      <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_2fr]">
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">
              Practice
            </dt>
            <dd className="mt-1">{site.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-muted">
              Contact
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        <div className="space-y-5 text-lg leading-relaxed">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

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
