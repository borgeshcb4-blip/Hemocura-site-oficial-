import React, { useState, useEffect } from 'react';
import { Star, TrendingUp } from 'lucide-react';

const PRODUCT_IMAGES = [
  "https://iili.io/fFnbnPs.md.png",
  "https://iili.io/fFnpicG.md.png",
  "https://iili.io/fFo9MEF.md.png",
  "https://iili.io/fFoHgoB.md.png",
  "https://iili.io/fFo2fGS.md.png",
  "https://iili.io/fFoFjvn.md.png",
  "https://iili.io/fFWEDbV.md.png"
];

export const ProductHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect: Changes image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <style>
        {`
          @keyframes shine-badge {
            0% { transform: translateX(-100%) skewX(-15deg); }
            35% { transform: translateX(200%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          .animate-shine-badge {
            animation: shine-badge 3.5s infinite linear;
          }
        `}
      </style>
      
      {/* Main Image Carousel - Rounded with Pagination Dots & Badge */}
      <div 
        className="relative w-full aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 group select-none"
      >
        
        {/* Top Right Badge - Corner Ribbon Style with Shimmer */}
        <div className="absolute top-0 right-0 bg-[#fbbf24] text-white text-[10px] font-extrabold px-6 py-2 rounded-bl-3xl z-20 uppercase tracking-widest shadow-sm pointer-events-none overflow-hidden">
          <span className="relative z-10">Top #1 Vendas</span>
          
          {/* Shimmer Effect Overlay */}
          <div className="absolute inset-0 z-0">
             <div className="animate-shine-badge absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
        </div>
        
        {/* Image Display */}
        <div className="w-full h-full relative">
            <img 
              src={PRODUCT_IMAGES[currentIndex]} 
              alt={`Hemocura Produto Imagem ${currentIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-500"
              draggable={false}
            />
            
            {/* Navigation Hint Arrows (Visible on hover on desktop, hidden on mobile usually) */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity md:block hidden"
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity md:block hidden"
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>

        {/* Pagination Dots Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 z-20">
          {PRODUCT_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
              className={`rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-6 h-1.5 bg-white' 
                  : 'w-1.5 h-1.5 bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Badges Row - Distinct Pills */}
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

      {/* Title Below Stats */}
      <h1 className="text-xl md:text-2xl font-bold text-[#0f172a] leading-tight text-center px-2 mt-1">
        Hemocura® – Alívio Natural e Discreto em Gotas
      </h1>
    </div>
  );
};