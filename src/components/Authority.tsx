import { useContent } from '../data/ContentContext';
import { Placeholder } from './Placeholder';
import { RotatingBadge } from './RotatingBadge';
import { WhatsAppCta } from './WhatsAppCta';

export function Authority() {
  const { authority } = useContent();
  const visualClass =
    'absolute inset-0 h-full w-full object-cover object-[60%_35%] max-[640px]:relative max-[640px]:aspect-[4/5] max-[640px]:h-auto max-[640px]:object-[50%_40%]';

  return (
    <section className="relative min-h-[70vh] overflow-hidden max-[640px]:min-h-0 max-[640px]:bg-wine">
      {authority.photo ? (
        <img src={authority.photo} alt={authority.photoPlaceholder} className={visualClass} />
      ) : (
        <Placeholder label={authority.photoPlaceholder} className={visualClass} />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-wine/15 max-[640px]:hidden" />

      <div className="container-page relative z-[2] flex min-h-[70vh] items-end py-16 max-[640px]:min-h-0 max-[640px]:px-0 max-[640px]:py-0">
        <div className="max-w-[600px] rounded-lg bg-wine/90 p-8 text-offwhite backdrop-blur-sm max-[640px]:max-w-none max-[640px]:rounded-none max-[640px]:bg-wine max-[640px]:px-6 max-[640px]:py-10 max-[640px]:backdrop-blur-none">
          <span className="eyebrow eyebrow-light">{authority.eyebrow}</span>
          <h2 className="mb-4 text-offwhite text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{authority.title}</h2>
          {authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 max-w-[56ch] text-offwhite opacity-90">
              {paragraph}
            </p>
          ))}
          <p className="mb-8 font-serif text-[1.2rem] italic text-champagne">{authority.statement}</p>

          <div className="flex flex-wrap items-center gap-6">
            <WhatsAppCta context="avaliacao" className="btn-primary-inverted">
              {authority.ctaLabel}
            </WhatsAppCta>
            <RotatingBadge text={authority.badgeText} tone="onDark" />
          </div>
        </div>
      </div>
    </section>
  );
}
