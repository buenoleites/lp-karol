import { useContent } from '../data/ContentContext';
import { Placeholder } from './Placeholder';

export function Procedure() {
  const { procedure } = useContent();

  if (procedure.photoStyle === 'cutout') {
    return (
      <section id="o-que-e" className="bg-nude py-24 max-[640px]:py-16">
        <div className="container-page grid grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] items-center gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-8">
          {/* Aparelho inteiro recortado em branco puro (255): multiply funde o fundo ao nude,
              deixando o Ultraformer "solto" na dobra e preservando a sombra sob as rodinhas. */}
          <img
            src={procedure.photo}
            alt={procedure.photoAlt}
            className="mx-auto max-h-[600px] w-auto object-contain mix-blend-multiply max-[760px]:max-h-[380px]"
          />
          <h2 className="max-w-[16ch] text-[clamp(2rem,4.2vw,3.4rem)] leading-tight max-[760px]:mx-auto max-[760px]:text-center">
            {procedure.statement}
          </h2>
        </div>
      </section>
    );
  }

  // Variante "cover": foto de ambiente/procedimento + título e explicação curta
  return (
    <section id="o-que-e" className="bg-nude py-24 max-[640px]:py-16">
      <div className="container-page grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] items-center gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-8">
        {procedure.photo ? (
          <img
            src={procedure.photo}
            alt={procedure.photoPlaceholder}
            className="aspect-[4/5] w-full rounded-xl object-cover object-[30%_55%] max-[760px]:aspect-[4/3]"
          />
        ) : (
          <Placeholder
            label={procedure.photoPlaceholder}
            className="aspect-[4/5] w-full rounded-xl max-[760px]:aspect-[4/3]"
          />
        )}
        <div>
          <span className="eyebrow">{procedure.eyebrow}</span>
          <h2 className="mb-6 max-w-[16ch] text-[clamp(2rem,4.2vw,3.4rem)] leading-tight">{procedure.title}</h2>
          <p className="max-w-[46ch] text-[1.15rem] leading-relaxed opacity-85">{procedure.text}</p>
        </div>
      </div>
    </section>
  );
}
