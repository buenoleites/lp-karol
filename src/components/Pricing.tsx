import { useContent } from '../data/ContentContext';
import { WhatsAppCta } from './WhatsAppCta';

/** Bloco "Valores": investimento a partir de + protocolos personalizados, no mesmo tom editorial. */
export function Pricing() {
  const { pricing } = useContent();
  if (!pricing) return null;

  return (
    <section id={pricing.id ?? 'valores'} className="py-24 max-[640px]:py-16">
      <div className="container-page grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">
        <div>
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{pricing.title}</h2>
          <p className="section-subtitle mb-6 max-w-[46ch]">{pricing.subtitle}</p>
          <p className="mb-8 font-serif text-[1.2rem] italic text-marsala">{pricing.statement}</p>
          <WhatsAppCta context="avaliacao" className="btn-primary">
            {pricing.ctaLabel}
          </WhatsAppCta>
        </div>

        <div className="grid gap-5">
          {pricing.items.map((item) => (
            <div key={item.label} className="rounded-xl border border-wine/20 bg-offwhite p-8">
              <span className="eyebrow mb-2">{item.label}</span>
              <span className="block font-serif text-[clamp(2rem,4vw,3rem)] leading-none text-wine">{item.value}</span>
              {item.text && <p className="mt-4 max-w-[40ch] text-[0.95rem] opacity-75">{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
