import { useId } from 'react';

interface RotatingBadgeProps {
  text: string;
  tone?: 'onLight' | 'onDark';
  className?: string;
}

/** Selo circular giratório inspirado no Beaujour — detalhe de micro-interação junto ao CTA. */
export function RotatingBadge({ text, tone = 'onLight', className = '' }: RotatingBadgeProps) {
  const pathId = useId();
  const repeatedText = `${text} • ${text} •`;
  const colorClass = tone === 'onLight' ? 'fill-marsala' : 'fill-champagne';
  const iconColorClass = tone === 'onLight' ? 'text-marsala' : 'text-champagne';

  return (
    <div className={`relative h-[84px] w-[84px] shrink-0 max-[640px]:h-[68px] max-[640px]:w-[68px] ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-rotate-badge motion-reduce:animate-none"
        aria-hidden="true"
      >
        <path id={pathId} d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text className={`text-[7.5px] font-semibold uppercase tracking-wider ${colorClass}`}>
          <textPath href={`#${pathId}`} startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
      <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg ${iconColorClass}`}>
        ↗
      </span>
    </div>
  );
}
