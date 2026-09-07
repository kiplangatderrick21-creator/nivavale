import { technologyStack } from '@/lib/content';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';

export default function TechnologyPreview() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Technology & systems"
          title="Engineering built for research"
          description="A technology philosophy centered on Python, reproducibility, and dependable data infrastructure."
        />
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {technologyStack.map((item) => (
              <div key={item.title} className="rounded-sm border border-ink-200 bg-white p-5">
                <h3 className="font-serif text-base text-ink-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
          <Button href="/technology" variant="secondary" withArrow className="mt-8">
            Our technology approach
          </Button>
        </div>
      </Container>
    </section>
  );
}
