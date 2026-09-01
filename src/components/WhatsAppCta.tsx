import type { ReactNode } from 'react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import type { WhatsAppContext } from '../data/types';

interface WhatsAppCtaProps {
  context: WhatsAppContext;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function WhatsAppCta({ context, className, ariaLabel, children }: WhatsAppCtaProps) {
  const href = useWhatsAppLink(context);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
