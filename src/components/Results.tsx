import { useContent } from '../data/ContentContext';
import { Placeholder } from './Placeholder';
import { WhatsAppCta } from './WhatsAppCta';

export function Results() {
  const { results } = useContent();
  const visualClass = 'aspect-square w-full rounded-xl max-[900px]:order-first';

  return (
    <section id={results.id} className="bg-nude py-24 max-[640px]:py-16">
      <div className="container-page grid grid-cols-2 items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8">
        <div>
          <span className="eyebrow">{results.eyebrow}</span>
          {results.rating && (
            <p className="mb-3 flex items-center gap-3" aria-label={results.rating.label}>
              <span className="tracking-[0.15em] text-marsala" aria-hidden="true">
                {'★'.repeat(results.rating.stars)}
              </span>
              <span className="text-[0.9rem] font-semibold text-wine">{results.rating.label}</span>
            </p>
          )}
          <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{results.title}</h2>
          <p className="section-subtitle mb-4">{results.subtitle}</p>
          <blockquote className="my-6 border-l-2 border-champagne pl-6 font-serif text-[1.2rem] italic leading-snug text-graphite">
            “{results.quote}”
            <cite className="mt-4 block font-sans text-[0.9rem] font-semibold not-italic text-graphite">
              {results.author}
            </cite>
          </blockquote>
          <WhatsAppCta context="depoimento" className="btn-primary">
            {results.ctaLabel}
          </WhatsAppCta>
        </div>
        {results.photo ? (
          <img src={results.photo} alt={results.photoPlaceholder} className={`${visualClass} object-cover`} />
        ) : (
          <Placeholder label={results.photoPlaceholder} className={visualClass} />
        )}
      </div>
    </section>
  );
}
