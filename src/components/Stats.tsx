import { stats } from '../data/content';
import { Placeholder } from './Placeholder';

export function Stats() {
  const [first, second] = stats.items;
  return (
    <section className="py-24 max-[640px]:py-16">
      <div className="container-page">
        <div className="grid grid-cols-[1fr_1.2fr_1fr] items-center gap-10 text-center max-[780px]:grid-cols-1">
          <div>
            <span className="mb-3 block font-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-marsala">
              {first.number}
            </span>
            <p className="mx-auto max-w-[26ch] text-[0.95rem] opacity-75">{first.label}</p>
          </div>

          <Placeholder label={stats.photoPlaceholder} className="aspect-[4/3] max-[780px]:order-first" />

          <div>
            <span className="mb-3 block font-serif text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-marsala">
              {second.number}
            </span>
            <p className="mx-auto max-w-[26ch] text-[0.95rem] opacity-75">{second.label}</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[60ch] text-center text-[0.9rem] opacity-65">{stats.note}</p>
      </div>
    </section>
  );
}
