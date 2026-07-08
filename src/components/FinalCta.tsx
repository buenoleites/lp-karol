import { finalCta } from '../data/content';
import { WhatsAppCta } from './WhatsAppCta';

export function FinalCta() {
  return (
    <section className="bg-champagne py-24 text-center max-[640px]:py-16">
      <div className="container-page section-heading-center">
        <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{finalCta.title}</h2>
        <p className="section-subtitle mb-8">{finalCta.subtitle}</p>
        <WhatsAppCta context="final" className="btn-primary">
          {finalCta.ctaLabel}
        </WhatsAppCta>
        <p className="mt-4 text-[0.85rem] opacity-75">{finalCta.microcopy}</p>
        <p className="mt-5 font-semibold text-wine">{finalCta.location}</p>
      </div>
    </section>
  );
}
