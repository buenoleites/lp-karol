import { whatsapp, type WhatsAppContext } from '../data/content';

export function useWhatsAppLink(context: WhatsAppContext): string {
  const message = whatsapp.messagesByContext[context];
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: 'lp_ultraformer',
    utm_campaign: context,
  });
  return `https://wa.me/${whatsapp.phoneNumber}?${params.toString()}`;
}
