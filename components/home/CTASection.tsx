import Button from '../ui/Button';
import Container from '../layout/Container';
import DotGrid from '../data-viz/DotGrid';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-ink-100 sm:py-28">
      <DotGrid className="absolute inset-0 text-ink-700/30" />
      <Container className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Start a conversation
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl">
          Let&rsquo;s put data to work on your decisions.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-300">
          Whether your interest is research, analytics, technology, or education, we&rsquo;d welcome
          a conversation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg" withArrow>
            Contact Nivavale
          </Button>
          <Button href="/about" size="lg" variant="secondary" dark>
            Learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
