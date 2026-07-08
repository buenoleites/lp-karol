interface PlaceholderProps {
  label: string;
  className?: string;
  captionClassName?: string;
}

/** Bloco visual reservado para foto/vídeo real — substituir quando o material chegar. */
export function Placeholder({ label, className = '', captionClassName = '' }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-champagne bg-nude text-center text-[0.85rem] text-marsala ${className}`}
    >
      <span className={`px-6 ${captionClassName}`}>[{label}]</span>
    </div>
  );
}
