import React from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { PaymentTrust } from './components/PaymentTrust';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { FeatureBadges } from './components/FeatureBadges';
import { AnvisaBanner } from './components/AnvisaBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main className="max-w-md mx-auto px-4 pt-6 flex flex-col gap-5">
        {/* Hero Section */}
        <ProductHero />

        {/* New Trust Badges Section */}
        <FeatureBadges />

        {/* ANVISA Banner */}
        <AnvisaBanner />

        {/* Payment Trust Section */}
        <PaymentTrust />

        {/* Legal Text */}
        <Footer />
      </main>

      {/* Sticky Button */}
      <StickyCTA />
    </div>
  );
};

export default App;