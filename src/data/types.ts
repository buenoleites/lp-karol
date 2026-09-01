// Contrato de conteúdo compartilhado pelas duas LPs (Ultraformer em `/`, Glúteos em `/gluteos/`).
// Cada página fornece um `SiteContent` via <ContentProvider>; os componentes leem com useContent().

export type WhatsAppContext = 'menu' | 'hero' | 'avaliacao' | 'depoimento' | 'final' | 'fab';

export interface WhatsAppConfig {
  phoneNumber: string;
  messagesByContext: Record<WhatsAppContext, string>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  cornerTag: string;
  title: string;
  subtitle: string;
  benefits: { icon: string; text: string }[];
  ctaLabel: string;
  badgeText: string;
  microcopy: string;
  /** Foto real; quando ausente, renderiza <Placeholder label={photoPlaceholder}>. */
  photo?: string;
  photoPlaceholder: string;
}

export interface StatsContent {
  items: { number: string; label: string }[];
  photo?: string;
  photoPlaceholder: string;
  addressLabel: string;
  address: string;
}

/** Foto recortada em fundo branco (aparelho) + frase grande, ou foto de ambiente + título e texto. */
export type ProcedureContent =
  | {
      photoStyle: 'cutout';
      photo: string;
      photoAlt: string;
      statement: string;
    }
  | {
      photoStyle: 'cover';
      photo?: string;
      photoPlaceholder: string;
      eyebrow: string;
      title: string;
      text: string;
    };

export interface ConcernCategory {
  title: string;
  text: string;
  photoPlaceholder: string;
  photo?: string;
  /** Antes/depois lado a lado (2:1): mostrar inteiro no quadrado, com faixas. */
  photoFit?: 'cover' | 'contain';
}

export interface ConcernSelectorContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: ConcernCategory[];
  note: string;
}

export interface AuthorityContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  statement: string;
  ctaLabel: string;
  badgeText: string;
  photo?: string;
  photoPlaceholder: string;
}

export interface SecurityContent {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { title: string; text: string }[];
  photo?: string;
  photoPlaceholder: string;
  ctaCell: { title: string; ctaLabel: string };
}

export interface ResultsContent {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  rating?: { stars: number; label: string };
  quote: string;
  author: string;
  ctaLabel: string;
  photo?: string;
  photoPlaceholder: string;
}

export interface PricingContent {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { label: string; value: string; text?: string }[];
  statement: string;
  ctaLabel: string;
}

export interface FaqContent {
  title: string;
  items: { question: string; answer: string }[];
}

export interface FinalCtaContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  microcopy: string;
  location: string;
}

export interface FooterContent {
  name: string;
  location: string;
}

export interface SiteContent {
  /** Identifica a página no UTM (`utm_medium=lp_<slug>`). */
  slug: string;
  whatsapp: WhatsAppConfig;
  nav: NavItem[];
  wordmark: string;
  logo: string;
  hero: HeroContent;
  trustBar: string[];
  stats: StatsContent;
  procedure: ProcedureContent;
  concernSelector: ConcernSelectorContent;
  authority: AuthorityContent;
  security: SecurityContent;
  results: ResultsContent;
  pricing?: PricingContent;
  faq?: FaqContent;
  finalCta: FinalCtaContent;
  footer: FooterContent;
}
