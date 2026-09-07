import Button from '../ui/Button';
import Container from '../layout/Container';
import DotGrid from '../data-viz/DotGrid';
import LinePattern from '../data-viz/LinePattern';

const domains = ['Research', 'Analytics', 'Systems'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-ink-100">
      <DotGrid className="absolute inset-0 text-ink-700/40" />
      <Container className="relative grid gap-14 py-24 sm:py-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="motion-safe:animate-fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Nivavale — Quantitative Intelligence
          </p>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
            Quantitative Intelligence. Built for Better Decisions.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Nivavale is a quantitative research and technology firm. We bring together rigorous
            research, financial data, analytics, and engineering to support disciplined,
            evidence-based decisions.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/about" size="lg" withArrow>
              Explore our approach
            </Button>
            <Button href="/research" size="lg" variant="secondary" dark>
              View research
            </Button>
          </div>
        </div>

        <div className="motion-safe:animate-fade-up" aria-hidden="true">
          <div className="rounded-sm border border-ink-800 bg-ink-900/70 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-ink-800 pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                Approach
              </span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink-700" />
                <span className="h-2 w-2 rounded-full bg-ink-700" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
            </div>
            <div className="mt-6 h-40 text-accent/70">
              <LinePattern className="h-full w-full" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {domains.map((label) => (
                <div
                  key={label}
                  className="rounded-sm border border-ink-800 px-3 py-2 text-center font-mono text-[11px] uppercase tracking-wider text-ink-300"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
