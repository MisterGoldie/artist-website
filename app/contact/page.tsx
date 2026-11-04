import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about available work, events, and commissions.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        For available work, event information, or commissions, email is the simplest
        way to reach me. I usually reply within a few days.
      </p>

      <div className="mt-12 border-y border-line text-center">
        <div className="border-b border-line py-10">
          <a
            href={`mailto:${site.email}`}
            className="font-display text-2xl break-words transition-colors hover:text-accent sm:text-4xl"
          >
            {site.email}
          </a>
        </div>
        <div className="py-10">
          <a
            href={`mailto:${site.secondaryEmail}`}
            className="font-display text-2xl break-words transition-colors hover:text-accent sm:text-4xl"
          >
            {site.secondaryEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
