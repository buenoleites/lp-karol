import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '../data/ContentContext';
import { Placeholder } from './Placeholder';
import { WhatsAppCta } from './WhatsAppCta';

const ROTATION_MS = 6000;

/**
 * Prints de avaliação que se alternam sozinhos. O timeout depende de `index`, então
 * clicar numa bolinha reinicia o ciclo em vez de trocar a foto no meio do intervalo.
 */
function ReviewRotator({ photos, className }: { photos: { src: string; alt: string }[]; className: string }) {
  const [index, setIndex] = useState(0);
  const active = photos[index];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setIndex((current) => (current + 1) % photos.length), ROTATION_MS);
    return () => clearTimeout(id);
  }, [index, photos.length]);

  return (
    <div className={`relative overflow-hidden bg-offwhite ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={active.src}
          src={active.src}
          alt={active.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2.5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Ver avaliação ${i + 1} de ${photos.length}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? 'bg-marsala' : 'bg-marsala/25 hover:bg-marsala/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

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
        {results.photos?.length ? (
          <ReviewRotator photos={results.photos} className={visualClass} />
        ) : results.photo ? (
          <img src={results.photo} alt={results.photoPlaceholder} className={`${visualClass} object-cover`} />
        ) : (
          <Placeholder label={results.photoPlaceholder} className={visualClass} />
        )}
      </div>
    </section>
  );
}
