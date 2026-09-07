import type { Metadata } from 'next';
import { engineeringPrinciples, technologyStack } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Technology & Systems',
  description:
    'Nivavale technology philosophy: Python, data pipelines, research infrastructure, algorithmic systems, backtesting, APIs, and automated workflows.',
};

export default function TechnologyPage() {
  return (
    <>
      <section className="bg-ink-950 py-20 text-ink-100 sm:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Technology & systems
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Engineering for dependable research.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            Our technology philosophy favors simple, reproducible, and reliable systems — built
            around Python and a disciplined approach to data and automation.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Technology stack"
            title="Tools and systems"
            description="The technologies and system disciplines that shape how we work. We describe our approach honestly and do not imply that any specific system is operational beyond what is stated."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyStack.map((item) => (
              <div key={item.title} className="rounded-sm border border-ink-200 bg-white p-6">
                <h2 className="font-serif text-base text-ink-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Engineering principles" title="How we build" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPrinciples.map((item) => (
              <div key={item.title} className="border-t border-ink-300 pt-5">
                <h3 className="font-serif text-lg text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
