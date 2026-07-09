import { security } from '../data/content';
import { WhatsAppCta } from './WhatsAppCta';
import consultorioPhoto from '../assets/consultorio.png';

export function Security() {
  return (
    <section id="seguranca" className="bg-wine py-24 text-offwhite max-[640px]:py-16">
      <div className="container-page">
        <div className="section-heading-center mb-14">
          <span className="eyebrow eyebrow-light">{security.eyebrow}</span>
          <h2 className="mb-4 text-offwhite text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{security.title}</h2>
          <p className="section-subtitle text-offwhite opacity-85">{security.subtitle}</p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {security.items.map((item) => (
            <article key={item.title} className="rounded bg-offwhite p-8 text-graphite">
              <h3 className="mb-2.5 text-[1.1rem]">{item.title}</h3>
              <p className="text-[0.95rem] opacity-75">{item.text}</p>
            </article>
          ))}

          {/* CTA vive dentro do grid, não como botão separado abaixo */}
          <div className="flex flex-col justify-center rounded bg-marsala p-8">
            <h3 className="mb-4 text-offwhite text-[1.1rem]">{security.ctaCell.title}</h3>
            <WhatsAppCta context="avaliacao" className="btn-primary-inverted w-fit">
              {security.ctaCell.ctaLabel}
            </WhatsAppCta>
          </div>

          <img
            src={consultorioPhoto}
            alt={security.photoPlaceholder}
            className="col-span-3 aspect-[21/6] w-full rounded object-cover object-[50%_75%] max-[900px]:col-span-1 max-[900px]:aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
