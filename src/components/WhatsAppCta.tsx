import type { ReactNode } from 'react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import type { WhatsAppContext } from '../data/content';

interface WhatsAppCtaProps {
  context: WhatsAppContext;
  className?: string;
  children: ReactNode;
}

export function WhatsAppCta({ context, className, children }: WhatsAppCtaProps) {
  const href = useWhatsAppLink(context);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
