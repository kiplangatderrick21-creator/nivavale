import type { ReactNode } from 'react';

export default function Card({
  children,
  dark = false,
  className = '',
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-sm border p-6 ${
        dark ? 'border-ink-800 bg-ink-900' : 'border-ink-200 bg-white'
      } ${className}`}
    >
      {children}
    </div>
  );
}
