import { MotionConfig } from 'framer-motion';
import { ScrollProgressTicks } from './components/ScrollProgressTicks';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Stats } from './components/Stats';
import { Wordmark } from './components/Wordmark';
import { Commitments } from './components/Commitments';
import { Procedure } from './components/Procedure';
import { ConcernSelector } from './components/ConcernSelector';
import { Authority } from './components/Authority';
import { Security } from './components/Security';
import { Results } from './components/Results';
import { FAQ } from './components/FAQ';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgressTicks />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Wordmark />
        <Commitments />
        <Procedure />
        <ConcernSelector />
        <Authority />
        <Security />
        <Results />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </MotionConfig>
  );
}
