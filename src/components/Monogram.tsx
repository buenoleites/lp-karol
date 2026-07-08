interface MonogramProps {
  className?: string;
}

/**
 * Marca própria simples — um "K" de traço fino que ecoa o corte da Fraunces,
 * usada no header e junto ao wordmark, no lugar de depender só de tipografia.
 */
export function Monogram({ className = '' }: MonogramProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M14 10 V30 M14 20 L25 10 M16.5 22.5 L25 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
