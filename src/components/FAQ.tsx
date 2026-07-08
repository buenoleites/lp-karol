import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faq } from '../data/content';
import { Reveal } from './Reveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="duvidas" className="py-24 max-[640px]:py-16">
      <div className="container-page">
        <div className="section-heading-center mb-14">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{faq.title}</h2>
        </div>

        <Reveal className="mx-auto max-w-[720px] border-t border-wine/10">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-wine/10">
                <button
                  className="flex w-full items-center justify-between py-6 text-left font-sans text-[1.02rem] font-medium text-wine"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span className="relative ml-4 h-3.5 w-3.5 shrink-0">
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-marsala" />
                    <span
                      className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-marsala transition-transform duration-200 ${
                        isOpen ? 'rotate-90 opacity-0' : ''
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[60ch] pb-6 opacity-80">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
