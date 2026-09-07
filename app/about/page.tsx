import type { Metadata } from 'next';
import { capabilities, principles, researchApproach } from '@/lib/content';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Who Nivavale is, what the firm focuses on, its philosophy, and its approach to quantitative research.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 py-20 text-ink-100 sm:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">About Nivavale</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Quantitative intelligence, applied with discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            Nivavale is a quantitative intelligence and technology firm working at the intersection
            of research, data, analytics, and engineering.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="Who we are" title="A firm built around evidence and method" />
          <div className="space-y-5 text-base leading-relaxed text-ink-600">
            <p>
              Nivavale focuses on the disciplined application of quantitative methods to financial
              questions. Our work spans quantitative research, financial analytics, data and
              technology, and quantitative education — connected by a shared commitment to rigor,
              reproducibility, and clarity.
            </p>
            <p>
              We believe that better decisions come from better evidence. That means treating
              markets as systems to be understood through data, statistics, and computation, and
              holding every model to a high standard of honesty about what it can and cannot tell
              us.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we focus on" title="Four connected disciplines" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <Card key={item.title}>
                <h3 className="font-serif text-lg text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-20 text-ink-100 sm:py-24">
        <Container>
          <SectionHeading dark eyebrow="Philosophy" title="Principles that guide our work" />
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle.title} className="border-t border-ink-800 pt-6">
                <span className="font-serif text-3xl text-accent/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink-100">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Approach to research"
            title="A disciplined process"
            description="Our research follows a clear, repeatable sequence — from a well-formed question to a validated, honest answer."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {researchApproach.map((step, index) => (
              <li key={step.title} className="border-t border-ink-200 pt-5">
                <span className="font-mono text-xs text-accent-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-serif text-lg text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Long-term vision" title="Where we're headed" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-600">
            Our long-term ambition is to build a firm that meaningfully improves how quantitative
            work is done — through better research, better tools, and better education — and to hold
            ourselves to the standard of the institutions we admire. We measure progress by the
            quality of our methods and the trust they earn, not by shortcuts.
          </p>
          <div className="mt-10 rounded-sm border border-dashed border-ink-300 bg-white p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
              Company details — placeholder
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Founding year, team, locations, and history will be added here. This section is
              intentionally left as a placeholder so that no unverified information is published.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
