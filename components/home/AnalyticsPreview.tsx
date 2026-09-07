import { analyticsCapabilities } from '@/lib/content';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';
import BarPattern from '../data-viz/BarPattern';

export default function AnalyticsPreview() {
  const featured = analyticsCapabilities.slice(0, 3);

  return (
    <section className="bg-ink-950 py-24 text-ink-100 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            dark
            eyebrow="Quantitative analytics"
            title="Analytics that clarify risk and performance"
            description="Portfolio, risk, and performance analysis built to be transparent, repeatable, and decision-relevant."
          />
          <div className="mt-8 space-y-5">
            {featured.map((item) => (
              <div key={item.title} className="border-l-2 border-accent pl-4">
                <h3 className="font-serif text-lg text-ink-100">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-300">{item.description}</p>
              </div>
            ))}
          </div>
          <Button href="/analytics" variant="secondary" dark withArrow className="mt-9">
            Explore analytics
          </Button>
        </div>

        <div className="rounded-sm border border-ink-800 bg-ink-900/60 p-6 sm:p-8" aria-hidden="true">
          <div className="flex items-center justify-between border-b border-ink-800 pb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Exposure profile
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <BarPattern className="mt-6 h-56 w-full text-accent/60" />
          <div className="mt-6 grid grid-cols-3 gap-3 text-center font-mono text-[11px] uppercase tracking-wider text-ink-500">
            <span>Risk</span>
            <span>Return</span>
            <span>Factor</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
