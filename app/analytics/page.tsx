import type { Metadata } from 'next';
import { analyticsCapabilities } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import CTASection from '@/components/home/CTASection';
import BarPattern from '@/components/data-viz/BarPattern';

export const metadata: Metadata = {
  title: 'Quantitative Analytics',
  description:
    'Portfolio, risk, and performance analytics built to be transparent, repeatable, and decision-relevant.',
};

export default function AnalyticsPage() {
  const [featured, ...rest] = analyticsCapabilities;

  return (
    <>
      <section className="bg-ink-950 py-20 text-ink-100 sm:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Quantitative analytics
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Clarity for risk, return, and performance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            We bring structure to the numbers that matter — turning portfolios, exposures, and
            outcomes into analysis you can act on.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Analytics disciplines"
            description="The analytical capabilities Nivavale can apply to portfolios, risk, performance, and data."
          />
          <div className="mt-12 space-y-6">
            <div className="rounded-sm border border-ink-200 bg-paper p-8">
              <h2 className="font-serif text-xl text-ink-900">{featured.title}</h2>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink-600">
                {featured.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <div key={item.title} className="rounded-sm border border-ink-200 bg-white p-6">
                  <h2 className="font-serif text-lg text-ink-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 text-ink-100 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            dark
            eyebrow="How we think"
            title="Measure, attribute, explain, act"
            description="Good analytics is a chain: measure what matters, attribute where it comes from, explain it clearly, and act with confidence."
          />
          <div className="rounded-sm border border-ink-800 bg-ink-900/60 p-6 sm:p-8" aria-hidden="true">
            <div className="flex items-center justify-between border-b border-ink-800 pb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
                Distribution
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
            <BarPattern className="mt-6 h-56 w-full text-accent/60" />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
