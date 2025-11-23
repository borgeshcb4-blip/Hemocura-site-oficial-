import React from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { PaymentTrust } from './components/PaymentTrust';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { FeatureBadges } from './components/FeatureBadges';
import { AnvisaBanner } from './components/AnvisaBanner';
import { Star, TrendingUp } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main className="max-w-md md:max-w-6xl mx-auto px-4 pt-6 pb-24 transition-all duration-300">
        
        {/* Desktop Grid Layout */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-10 md:items-start">
          
          {/* Left Column: Images (Desktop) / Top (Mobile) */}
          <div className="w-full md:col-span-6 lg:col-span-6 md:sticky md:top-24">
            <ProductHero />
          </div>

          {/* Right Column: Product Details (Desktop) / Bottom (Mobile) */}
          <div className="w-full md:col-span-6 lg:col-span-6 flex flex-col gap-5 mt-5 md:mt-0">
            
            {/* Stats Row */}
            <div className="flex items-center gap-3 w-full px-1">
              {/* Rating Pill */}
              <div className="flex-1 bg-[#fffbeb] border border-[#fef3c7] rounded-full py-2.5 px-2 flex items-center justify-center gap-1.5 shadow-sm min-w-0">
                <div className="flex -space-x-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <span className="text-[#0f172a] font-bold text-sm">4.9</span>
                  <span className="text-gray-300 text-xs">|</span>
                  <span className="text-gray-500 text-xs font-medium truncate">Excelente</span>
                </div>
              </div>

              {/* Sales Pill */}
              <div className="flex-1 bg-white border border-gray-100 rounded-full py-2.5 px-2 flex items-center justify-center gap-2 shadow-sm min-w-0">
                <TrendingUp className="w-4 h-4 text-[#10b981] shrink-0" strokeWidth={2.5} />
                <span className="text-[#0f172a] text-sm font-bold truncate">+12.500 Vendidos</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-3xl font-bold text-[#0f172a] leading-tight text-center md:text-left px-2">
              Hemocura® – Alívio Natural e Discreto em Gotas
            </h1>

            {/* Desktop Only Description (Visible on md+) */}
            <p className="hidden md:block text-gray-600 leading-relaxed text-lg">
               A solução número 1 do Brasil para quem busca conforto e bem-estar. Fórmula exclusiva com tecnologia de rápida absorção. Recupere sua qualidade de vida hoje mesmo com garantia total de satisfação.
            </p>

            {/* Trust Badges Section */}
            <FeatureBadges />

            {/* ANVISA Banner */}
            <AnvisaBanner />

            {/* Payment Trust Section */}
            <PaymentTrust />
          </div>

        </div>

        {/* Footer Section - Full Width on Desktop */}
        <div className="md:max-w-4xl md:mx-auto mt-8 md:mt-16">
           <Footer />
        </div>

      </main>

      {/* Sticky Button */}
      <StickyCTA />
    </div>
  );
};

export default App;