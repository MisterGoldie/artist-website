import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        This page isn&rsquo;t hanging here.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you were looking for has moved or was never in this show. The
        work is still on view.
      </p>
      <div className="mt-10 flex flex-wrap gap-8">
        <Link
          href="/works"
          className="border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-paper"
        >
          See the work
        </Link>
        <Link
          href="/"
          className="self-center text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Back to {site.name}
        </Link>
      </div>
    </section>
  );
}
