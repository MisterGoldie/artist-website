"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const nav = [
  { href: "/works", label: "Works" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight hover:text-accent"
        >
          {site.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] sm:justify-end sm:gap-x-6 sm:tracking-[0.18em]">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-accent underline decoration-line underline-offset-8"
                        : "text-muted transition-colors hover:text-ink"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
