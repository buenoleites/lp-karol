import { footer } from '../data/content';
import { Monogram } from './Monogram';

export function Footer() {
  return (
    <footer className="bg-wine py-8 text-offwhite">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 text-[0.85rem] opacity-80 max-[640px]:flex-col max-[640px]:text-center">
        <span className="flex items-center gap-2">
          <Monogram className="h-4 w-4" />
          {footer.name}
        </span>
        <span>{footer.location}</span>
      </div>
    </footer>
  );
}
