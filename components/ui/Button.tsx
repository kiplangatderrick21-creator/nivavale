import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-colors duration-200';

const variants: Record<Variant, Record<'dark' | 'light', string>> = {
  primary: {
    dark: 'bg-accent text-ink-950 hover:bg-accent-soft',
    light: 'bg-accent text-ink-950 hover:bg-accent-600',
  },
  secondary: {
    dark: 'border border-ink-600 text-ink-100 hover:border-accent hover:text-accent',
    light: 'border border-ink-300 text-ink-900 hover:border-accent hover:text-accent-600',
  },
  ghost: {
    dark: 'text-ink-100 hover:text-accent',
    light: 'text-ink-900 hover:text-accent-600',
  },
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  dark = false,
  withArrow = false,
  className = '',
  onClick,
  type = 'button',
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Set true when the button sits on a dark background. */
  dark?: boolean;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const classes = `${base} ${variants[variant][dark ? 'dark' : 'light']} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    const external = href.startsWith('http');
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
