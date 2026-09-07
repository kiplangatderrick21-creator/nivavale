import { researchAreas } from '@/lib/content';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';

export default function ResearchPreview() {
  const featured = researchAreas.slice(0, 6);

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Research"
            title="Systematic research, from data to decision"
            description="We investigate the structure of markets with statistical rigor and a commitment to reproducibility."
          />
          <Button href="/research" variant="secondary" withArrow className="shrink-0">
            All research areas
          </Button>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((area) => (
            <div key={area.title} className="bg-white p-6">
              <h3 className="font-serif text-lg text-ink-900">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{area.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
