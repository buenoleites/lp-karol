import { useContent } from '../data/ContentContext';
import type { WhatsAppContext } from '../data/types';

export function useWhatsAppLink(context: WhatsAppContext): string {
  const { whatsapp, slug } = useContent();
  const message = whatsapp.messagesByContext[context];
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: `lp_${slug}`,
    utm_campaign: context,
  });
  return `https://wa.me/${whatsapp.phoneNumber}?${params.toString()}`;
}
