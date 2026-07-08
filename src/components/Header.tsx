import { nav, wordmark } from '../data/content';
import logo from '../assets/logo.png';
import { WhatsAppCta } from './WhatsAppCta';

export function Header() {
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
          className="hidden rounded-full border border-marsala px-[22px] py-[10px] text-[0.85rem] text-marsala transition-colors hover:bg-marsala hover:text-offwhite min-[641px]:inline-block"
        >
          Falar no WhatsApp
        </WhatsAppCta>
      </div>
    </header>
  );
}
