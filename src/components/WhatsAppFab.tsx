import { WhatsAppCta } from './WhatsAppCta';
import { WhatsAppIcon } from './WhatsAppIcon';

/** CTA fixo do mobile — único acesso permanente ao WhatsApp abaixo de 861px (o header esconde o botão). */
export function WhatsAppFab() {
  return (
    <WhatsAppCta
      context="fab"
      ariaLabel="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-[1.06] hover:bg-whatsappDark min-[861px]:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </WhatsAppCta>
  );
}
