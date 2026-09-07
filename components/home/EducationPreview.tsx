import { educationTopics } from '@/lib/content';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';

export default function EducationPreview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Education"
          title="Quantitative learning, taught with rigor"
          description="Practical, institutional instruction in the methods and tools of systematic finance."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {educationTopics.map((topic) => (
            <span
              key={topic.title}
              className="rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700"
            >
              {topic.title}
            </span>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/education" variant="primary" withArrow>
            Explore education
          </Button>
        </div>
      </Container>
    </section>
  );
}
