import { principles } from '@/lib/content';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';

export default function Methodology() {
  return (
    <section className="bg-ink-950 py-24 text-ink-100 sm:py-28">
      <Container>
        <SectionHeading
          dark
          eyebrow="Methodology & philosophy"
          title="How we think about quantitative work"
          description="A few principles that shape how we approach research, analytics, and engineering."
        />
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
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
  );
}
