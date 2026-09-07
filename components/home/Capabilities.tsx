import Link from 'next/link';
import { capabilities } from '@/lib/content';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import Container from '../layout/Container';
import { ArrowRight } from '../ui/Icon';

const links: Record<string, string> = {
  'Quantitative Research': '/research',
  'Financial Analytics': '/analytics',
  'Data & Technology': '/technology',
  'Quantitative Education': '/education',
};

export default function Capabilities() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Quantitative capability across the decision process"
          description="Nivavale's work spans research, analytics, technology, and education — the disciplines needed to turn data into disciplined decisions."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <h3 className="font-serif text-xl text-ink-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{item.description}</p>
              <Link
                href={links[item.title]}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors hover:text-accent"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
