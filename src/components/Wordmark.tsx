import { wordmark } from '../data/content';
import logo from '../assets/logo.png';

export function Wordmark() {
  return (
    <section className="py-12 pb-24 text-center">
      <div className="container-page flex flex-col items-center gap-4">
        <img src={logo} alt={wordmark} className="h-16 w-auto" />
        <h2 className="font-serif text-[clamp(2.6rem,8vw,6rem)] tracking-tight text-wine">{wordmark}</h2>
      </div>
    </section>
  );
}
