import { motion } from 'framer-motion';
import { hero } from '../data/content';
import heroPhoto from '../assets/hero.png';
import { RotatingBadge } from './RotatingBadge';
import { WhatsAppCta } from './WhatsAppCta';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export function Hero() {
  return (
    <section className="grid grid-cols-[1.05fr_1fr] items-stretch max-[900px]:grid-cols-1">
      <motion.div
        className="flex flex-col justify-center px-6 py-20 max-[900px]:order-2 max-[900px]:py-12 min-[901px]:pl-6 min-[901px]:pr-16 min-[1121px]:pl-[calc((100vw-1120px)/2+24px)]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-block w-fit rounded-sm bg-marsala px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-offwhite"
        >
          {hero.cornerTag}
        </motion.span>

        <motion.h1 variants={item} className="mb-6 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.12]">
          {hero.title}
        </motion.h1>

        <motion.p variants={item} className="mb-8 max-w-[46ch] text-[1.1rem] opacity-85">
          {hero.subtitle}
        </motion.p>

        <motion.ul variants={item} className="mb-10">
          {hero.benefits.map((benefit) => (
            <li key={benefit.text} className="flex items-center gap-3 py-2 text-[0.98rem]">
              <span className="w-[1.2em] font-semibold text-marsala">{benefit.icon}</span>
              {benefit.text}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={item} className="flex flex-wrap items-center gap-6">
          <WhatsAppCta context="hero" className="btn-primary">
            {hero.ctaLabel}
          </WhatsAppCta>
          <RotatingBadge text={hero.badgeText} />
        </motion.div>

        <motion.p variants={item} className="mt-4 text-[0.85rem] opacity-65">
          {hero.microcopy}
        </motion.p>
      </motion.div>

      <div className="relative min-h-[42vh] max-[900px]:order-1 min-[901px]:min-h-[86vh]">
        <img
          src={heroPhoto}
          alt="Dra. Karol"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
