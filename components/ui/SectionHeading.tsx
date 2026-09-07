export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** Set true when the heading sits on a dark background. */
  dark?: boolean;
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const titleClass = dark ? 'text-ink-100' : 'text-ink-900';
  const descClass = dark ? 'text-ink-300' : 'text-ink-600';
  const eyebrowClass = dark ? 'text-accent' : 'text-accent-600';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className={`font-mono text-xs uppercase tracking-[0.22em] ${eyebrowClass}`}>{eyebrow}</p>
      )}
      <h2 className={`mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descClass}`}>{description}</p>
      )}
    </div>
  );
}
