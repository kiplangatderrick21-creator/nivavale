export default function LinePattern({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 160" preserveAspectRatio="none" className={className}>
      <path
        d="M0 118 C36 108 62 88 100 96 S158 120 200 92 S258 50 300 66 S362 82 400 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        opacity="0.7"
      />
      <path
        d="M0 138 C36 130 62 118 100 126 S158 150 200 120 S258 96 300 106 S362 116 400 92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        opacity="0.3"
      />
    </svg>
  );
}
