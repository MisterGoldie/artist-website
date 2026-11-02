import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-ink">{site.name}</p>
          <p className="mt-1">{site.location}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </li>
          {site.links
            .filter((link) => !link.href.startsWith("mailto:"))
            .map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          <li>
            <Link href="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto max-w-5xl px-6 pb-10 text-xs text-muted">
        © {site.copyrightYear} {site.name}. All images and text are the
        artist&rsquo;s own.
      </p>
    </footer>
  );
}
