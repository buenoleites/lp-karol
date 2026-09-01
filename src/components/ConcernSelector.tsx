import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContent } from '../data/ContentContext';
import type { ConcernCategory as Category } from '../data/types';
import { Placeholder } from './Placeholder';

/**
 * Componente de assinatura da página: um menu editorial onde cada queixa troca
 * a foto e o texto ao lado — encarna a mensagem central do site (avaliação
 * individualizada: cada queixa tem seu próprio contexto), inspirado no menu
 * "Nos studios d'expertise" do Beaujour.
 */
/** Fotos largas (antes/depois 2:1) são exibidas inteiras em vez de cortadas. */
function isContain(category: Category) {
  return category.photoFit === 'contain';
}

/** Foto real da categoria quando existe; placeholder enquanto o material não chega. */
function CategoryVisual({ category, className }: { category: Category; className: string }) {
  if (!category.photo) {
    return <Placeholder label={category.photoPlaceholder} className={className} />;
  }
  const fit = isContain(category) ? 'object-contain bg-nude' : 'object-cover';
  return <img src={category.photo} alt={category.photoPlaceholder} className={`${fit} object-center ${className}`} />;
}

export function ConcernSelector() {
  const { concernSelector } = useContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = concernSelector.categories[activeIndex];

  return (
    <section id="para-quem" className="py-24 max-[640px]:py-16">
      <div className="container-page">
        <div className="section-heading">
          <span className="eyebrow">{concernSelector.eyebrow}</span>
          <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{concernSelector.title}</h2>
          <p className="section-subtitle">{concernSelector.subtitle}</p>
        </div>

        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-6">
          <ul className="border-t border-wine/20">
            {concernSelector.categories.map((category, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={category.title} className="border-b border-wine/20">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`group flex w-full items-baseline justify-between py-6 text-left font-serif transition-colors ${
                      isActive ? 'text-wine' : 'text-wine/40 hover:text-wine/70'
                    }`}
                  >
                    <span className="text-[clamp(1.4rem,2.6vw,2rem)] leading-none">{category.title}</span>
                    <span
                      className={`text-lg transition-transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0 group-hover:opacity-60'}`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>

                  {/* Painel mobile: expande abaixo do item ativo, sem imagem grande fixa */}
                  <div className="min-[861px]:hidden">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6">
                            <CategoryVisual
                              category={category}
                              className={`mb-4 w-full rounded ${isContain(category) ? 'aspect-[2/1]' : 'aspect-square'}`}
                            />
                            <p className="max-w-[50ch] font-sans text-graphite opacity-80">{category.text}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative hidden aspect-square overflow-hidden rounded-xl min-[861px]:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <CategoryVisual category={active} className="h-full w-full rounded-xl border-none" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine/85 via-wine/10 to-transparent p-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-offwhite"
                >
                  {active.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[60ch] text-[0.9rem] opacity-65">{concernSelector.note}</p>
      </div>
    </section>
  );
}
