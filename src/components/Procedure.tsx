import { procedure } from '../data/content';
import ultraformerPhoto from '../assets/ultraformer.png';

export function Procedure() {
  return (
    <section id="o-que-e" className="bg-nude py-24 max-[640px]:py-16">
      <div className="container-page grid grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] items-center gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-6">
        <img
          src={ultraformerPhoto}
          alt={procedure.photoPlaceholder}
          className="aspect-square rounded object-cover object-[20%_25%] max-[760px]:order-first max-[760px]:max-w-[220px]"
        />
        <div>
          <span className="eyebrow">{procedure.eyebrow}</span>
          <h2 className="mb-5 text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">{procedure.title}</h2>
          <p className="max-w-[62ch] opacity-85">{procedure.description}</p>
        </div>
      </div>

      <div className="container-page mt-14">
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {procedure.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded bg-offwhite p-8">
              <h3 className="mb-2.5 text-[1.1rem]">{benefit.title}</h3>
              <p className="text-[0.95rem] opacity-75">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
