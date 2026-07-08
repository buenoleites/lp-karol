import { commitments } from '../data/content';

export function Commitments() {
  return (
    <section className="py-24 max-[640px]:py-16">
      <div className="container-page">
        <div className="section-heading">
          <span className="eyebrow">{commitments.eyebrow}</span>
          <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{commitments.title}</h2>
        </div>

        <ol className="list-none border-t border-wine/20">
          {commitments.items.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-[100px_1fr] gap-8 border-b border-wine/20 py-10 max-[640px]:grid-cols-1 max-[640px]:gap-2"
            >
              <span className="font-serif text-2xl text-transparent" style={{ WebkitTextStroke: '1px #642C39' }}>
                {item.number}
              </span>
              <div>
                <h3 className="mb-2.5 text-[1.25rem]">{item.title}</h3>
                <p className="max-w-[60ch] opacity-80">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
