import { createContext, useContext, type ReactNode } from 'react';
import type { SiteContent } from './types';

const ContentContext = createContext<SiteContent | null>(null);

interface ContentProviderProps {
  content: SiteContent;
  children: ReactNode;
}

/** Entrega a copy/fotos da página atual para todos os componentes de seção. */
export function ContentProvider({ content, children }: ContentProviderProps) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): SiteContent {
  const content = useContext(ContentContext);
  if (!content) {
    throw new Error('useContent deve ser usado dentro de <ContentProvider>.');
  }
  return content;
}
