'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';
import Button from '../ui/Button';
import Container from './Container';
import { Close, Menu } from '../ui/Icon';

const mainNav = nav.filter((item) => item.href !== '/contact');

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-ink-100" aria-label={`${site.name} — home`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent font-serif text-lg font-semibold text-ink-950">
            N
          </span>
          <span className="font-serif text-xl tracking-tight">Nivavale</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                isActive(pathname, item.href) ? 'text-accent' : 'text-ink-200 hover:text-ink-100'
              }`}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" size="md" className="ml-3">
            Contact
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-ink-100 hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-800 bg-ink-950 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-3 py-3 text-base ${
                  isActive(pathname, item.href) ? 'text-accent' : 'text-ink-100'
                }`}
                aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-3" onClick={() => setOpen(false)}>
              Contact
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
