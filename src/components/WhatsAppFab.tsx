import { WhatsAppCta } from './WhatsAppCta';

export function WhatsAppFab() {
  return (
    <WhatsAppCta
      context="fab"
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-marsala text-offwhite shadow-[0_8px_24px_rgba(53,20,28,0.25)] transition-transform hover:scale-[1.06] min-[861px]:hidden"
    >
      <span aria-hidden="true" className="text-2xl leading-none">
        ●
      </span>
    </WhatsAppCta>
  );
}
