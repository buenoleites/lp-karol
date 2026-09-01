import { useContent } from '../data/ContentContext';
import { Placeholder } from './Placeholder';
import { WhatsAppCta } from './WhatsAppCta';

/**
 * Seção em fundo vinho com foto + grid de cards e uma célula de CTA.
 * Usada como "Segurança" (Ultraformer) e como "Benefícios" (Glúteos).
 */
export function Security() {
  const { security } = useContent();
  // Com número par de cards, o CTA ocupa a última linha inteira; com ímpar, fecha o grid como 4ª célula.
  const ctaSpan = security.items.length % 2 === 0 ? 'min-[641px]:col-span-2' : '';

  return (
    <section id={security.id ?? 'seguranca'} className="bg-wine py-24 text-offwhite max-[640px]:py-16">
      <div className="container-page grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-stretch gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-8">
        {/* Foto retrato: estica junto da coluna dos cards no desktop, 3:4 no mobile */}
        <div className="relative min-h-[520px] overflow-hidden rounded max-[900px]:aspect-[3/4] max-[900px]:min-h-0">
          {security.photo ? (
            <img
              src={security.photo}
              alt={security.photoPlaceholder}
              className="absolute inset-0 h-full w-full object-cover object-[30%_55%]"
            />
          ) : (
            <Placeholder label={security.photoPlaceholder} className="absolute inset-0 h-full w-full" />
          )}
        </div>

        <div>
          <div className="mb-10 max-w-xl">
            <span className="eyebrow eyebrow-light">{security.eyebrow}</span>
            <h2 className="mb-4 text-offwhite text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{security.title}</h2>
            <p className="section-subtitle text-offwhite opacity-85">{security.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
            {security.items.map((item) => (
              <article key={item.title} className="rounded bg-offwhite p-7 text-graphite">
                <h3 className="mb-2.5 text-[1.1rem]">{item.title}</h3>
                <p className="text-[0.95rem] opacity-75">{item.text}</p>
              </article>
            ))}

            {/* CTA vive dentro do grid */}
            <div className={`flex flex-col justify-center rounded bg-marsala p-7 ${ctaSpan}`}>
              <h3 className="mb-4 text-offwhite text-[1.1rem]">{security.ctaCell.title}</h3>
              <WhatsAppCta context="avaliacao" className="btn-primary-inverted w-fit whitespace-nowrap !px-6">
                {security.ctaCell.ctaLabel}
              </WhatsAppCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
