import { MotionConfig } from 'framer-motion';
import { ContentProvider } from './data/ContentContext';
import { content } from './data/content.gluteos';
import { ScrollProgressTicks } from './components/ScrollProgressTicks';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ConcernSelector } from './components/ConcernSelector';
import { Procedure } from './components/Procedure';
import { Security } from './components/Security';
import { Pricing } from './components/Pricing';
import { Authority } from './components/Authority';
import { Results } from './components/Results';
import { Stats } from './components/Stats';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

/**
 * LP Harmonização Glútea — servida em `/gluteos/`.
 * Ordem das dobras segue o briefing: cabeçalho → problema → solução → benefícios →
 * valores → autoridade → prova social → localização → CTA final.
 */
export default function AppGluteos() {
  return (
    <ContentProvider content={content}>
      <MotionConfig reducedMotion="user">
        <ScrollProgressTicks />
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <ConcernSelector />
          <Procedure />
          <Security />
          <Pricing />
          <Authority />
          <Results />
          <Stats />
          <FinalCta />
        </main>
        <Footer />
        <WhatsAppFab />
      </MotionConfig>
    </ContentProvider>
  );
}
