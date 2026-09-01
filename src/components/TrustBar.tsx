import { useContent } from '../data/ContentContext';

export function TrustBar() {
  const { trustBar } = useContent();
  return (
    <section className="bg-wine py-[18px] text-offwhite">
      <div className="container-page flex flex-wrap items-center justify-center gap-5 text-center text-[0.85rem] tracking-wide max-[640px]:flex-col max-[640px]:gap-1.5">
        {trustBar.map((item, i) => (
          <span key={item} className="flex items-center gap-5 max-[640px]:gap-0">
            {i > 0 && <span className="mr-5 h-1 w-1 rounded-full bg-champagne max-[640px]:hidden" />}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
