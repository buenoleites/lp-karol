import { motion, useScroll } from 'framer-motion';

/**
 * Traço de margem que vira indicador de progresso de leitura — decoração funcional:
 * os tracinhos acima do ponto atual acendem em marsala conforme a página rola.
 */
export function ScrollProgressTicks() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-0 z-[1] hidden h-screen w-[2px] min-[901px]:block"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(to bottom, #D8C3A5 0, #D8C3A5 6px, transparent 6px, transparent 26px)',
          opacity: 0.5,
        }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 origin-top"
        style={{
          scaleY: scrollYProgress,
          background:
            'repeating-linear-gradient(to bottom, #642C39 0, #642C39 6px, transparent 6px, transparent 26px)',
          height: '100%',
        }}
      />
    </div>
  );
}
