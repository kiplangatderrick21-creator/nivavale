// ---------------------------------------------------------------------------
// Central site configuration.
// Replace placeholder values marked with "TODO" before launch.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Nivavale',
  tagline: 'Quantitative Intelligence. Built for Better Decisions.',
  description:
    'Nivavale is a quantitative intelligence and technology firm focused on quantitative research, financial analytics, data, algorithmic systems, alpha research, and quantitative education.',
  // TODO: replace with your production domain before launch.
  url: 'https://nivavale.com',
  // TODO: set to your real contact email, e.g. 'hello@nivavale.com'.
  // When null, email links are hidden automatically across the site.
  email: null as string | null,
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Technology', href: '/technology' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export const footerDescription =
  'A quantitative intelligence and technology firm. Research, analytics, and systems for better decisions.';
