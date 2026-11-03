import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about available work, events, and commissions.`,
};

export default function ContactPage() {
  const socials = site.links.filter((link) => !link.href.startsWith("mailto:"));

  return (
    <section className="mx-auto max-w-5xl px-6 pt-20">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        For available work, event information, or commissions, email is the simplest
        way to reach me. I usually reply within a few days.
      </p>

      <div className="mt-12 border-y border-line py-10">
        <a
          href={`mailto:${site.email}`}
          className="font-display text-2xl break-words transition-colors hover:text-accent sm:text-4xl"
        >
          {site.email}
        </a>
      </div>

      <div className="mt-12">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted">
            Elsewhere
          </h2>
          <ul className="mt-4 space-y-2 text-lg">
            {socials.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
