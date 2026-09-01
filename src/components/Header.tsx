import { useContent } from '../data/ContentContext';
import { WhatsAppCta } from './WhatsAppCta';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Header() {
  const { nav, wordmark, logo } = useContent();
  return (
    <header className="sticky top-0 z-[100] border-b border-wine/10 bg-offwhite/90 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-[18px]">
        <a href="#" className="flex items-center gap-2.5 font-serif text-lg font-semibold text-wine">
          <img src={logo} alt={wordmark} className="h-8 w-auto" />
          {wordmark}
        </a>
        <nav className="hidden gap-8 min-[861px]:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.9rem] text-graphite/75 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppCta
          context="menu"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-6 py-[11px] text-[0.9rem] font-semibold text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-200 hover:-translate-y-px hover:bg-whatsappDark hover:shadow-[0_8px_26px_rgba(37,211,102,0.6)] min-[641px]:inline-flex"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Falar no WhatsApp
        </WhatsAppCta>
      </div>
    </header>
  );
}
