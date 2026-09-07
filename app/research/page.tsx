import type { Metadata } from 'next';
import { researchAreas } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Nivavale quantitative research capabilities across factor research, alpha research, statistical modelling, machine learning, and more.',
};

export default function ResearchPage() {
  return (
    <>
      <section className="bg-ink-950 py-20 text-ink-100 sm:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Research</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
            The systematic study of markets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            We pursue quantitative research as a discipline: careful framing, rigorous statistics,
            and honest validation against data.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Areas of research"
            description="These represent the areas in which Nivavale conducts and applies research. They describe capability and method, not specific results."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.title} className="rounded-sm border border-ink-200 bg-white p-6">
                <h2 className="font-serif text-lg text-ink-900">{area.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16">
        <Container className="max-w-3xl">
          <p className="text-sm leading-relaxed text-ink-600">
            A note on expectations: research is a process of disciplined inquiry, not a promise of
            outcomes. We describe our capabilities honestly and avoid presenting research areas as
            claims of performance or results.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
