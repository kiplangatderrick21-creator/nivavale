const bars = [
  0.35, 0.6, 0.45, 0.75, 0.55, 0.85, 0.65, 1, 0.5, 0.8, 0.42, 0.7, 0.38, 0.62, 0.88, 0.52,
];

export default function BarPattern({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 160" preserveAspectRatio="none" className={className}>
      {bars.map((height, index) => {
        const barHeight = height * 150;
        const y = 160 - barHeight;
        return (
          <rect
            key={index}
            x={index * 25 + 6}
            y={y}
            width="12"
            height={barHeight}
            fill="currentColor"
            opacity={0.2 + (index % 4) * 0.12}
          />
        );
      })}
    </svg>
  );
}
