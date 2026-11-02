"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const nav = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-6 px-6 py-5">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight hover:text-accent"
        >
          {site.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-baseline gap-6 text-xs uppercase tracking-[0.18em]">
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
