import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <section className="bg-ink-950 py-32 text-ink-100">
      <Container className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Page not found.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-soft"
        >
          Return home
        </Link>
      </Container>
    </section>
  );
}
