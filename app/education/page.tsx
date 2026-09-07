import type { Metadata } from 'next';
import { educationTopics } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/layout/Container';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'Quantitative education from Nivavale: quantitative finance, algorithmic trading, statistics, financial modelling, Python for finance, and systematic research.',
};

export default function EducationPage() {
  return (
    <>
      <section className="bg-ink-950 py-20 text-ink-100 sm:py-28">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Education</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-5xl">
            Quantitative learning, taught with rigor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
            Clear, structured instruction in the methods and tools of systematic finance — designed
            to build genuine understanding, not just familiarity.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title="Subjects we teach"
            description="A foundation across the disciplines that underpin systematic, quantitative work in finance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {educationTopics.map((topic) => (
              <div key={topic.title} className="rounded-sm border border-ink-200 bg-white p-6">
                <h2 className="font-serif text-lg text-ink-900">{topic.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Our approach"
            title="An educational, not promotional, tone"
            description="We teach because better quantitative literacy leads to better decisions. Learning is built on first principles, worked examples, and honest discussion of limitations."
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
