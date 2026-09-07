import type { ReactNode } from 'react';

export default function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${
        dark ? 'border-ink-700 text-ink-200' : 'border-ink-300 text-ink-600'
      }`}
    >
      {children}
    </span>
  );
}
