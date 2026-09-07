import Link from 'next/link';
import { footerDescription, nav, site } from '@/lib/site';
import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-ink-100">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent font-serif text-lg font-semibold text-ink-950">
                N
              </span>
              <span className="font-serif text-xl tracking-tight">Nivavale</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">{footerDescription}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-300 transition-colors hover:text-ink-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-ink-300 transition-colors hover:text-ink-100">
                  Contact us
                </Link>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="text-ink-300 transition-colors hover:text-ink-100">
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Quantitative intelligence and technology.</p>
        </div>
      </Container>
    </footer>
  );
}
