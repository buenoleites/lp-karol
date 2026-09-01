import { useContent } from '../data/ContentContext';

export function Stats() {
  const { stats } = useContent();
  return (
    <section className="relative overflow-hidden">
      {stats.photo ? (
        <img
          src={stats.photo}
          alt={stats.photoPlaceholder}
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 bg-marsala" />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-wine/70" />

      <div className="container-page relative z-[2] py-24 text-center max-[640px]:py-16">
        <div className="mx-auto grid max-w-[820px] grid-cols-2 gap-10 max-[640px]:grid-cols-1 max-[640px]:gap-12">
          {stats.items.map((item) => (
            <div key={item.number}>
              <span className="mb-3 block font-serif text-[clamp(2.6rem,6vw,4rem)] leading-none text-champagne">
                {item.number}
              </span>
              <p className="mx-auto max-w-[26ch] text-[0.95rem] text-offwhite opacity-85">{item.label}</p>
            </div>
          ))}
        </div>

        <address className="mx-auto mt-14 max-w-[40ch] not-italic max-[640px]:mt-10">
          <span className="eyebrow eyebrow-light mb-2">{stats.addressLabel}</span>
          <p className="font-serif text-[1.15rem] leading-snug text-offwhite">{stats.address}</p>
        </address>
      </div>
    </section>
  );
}
