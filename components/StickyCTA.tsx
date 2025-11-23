import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-150%) skewX(-20deg); }
            50% { transform: translateX(150%) skewX(-20deg); }
            100% { transform: translateX(150%) skewX(-20deg); }
          }
          .animate-shine {
            animation: shine 2.5s infinite;
          }
        `}
      </style>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto">
          <a 
            href="https://hemocura.com/"
            target="_top"
            className="relative w-full bg-[#10b981] hover:bg-[#059669] active:scale-[0.98] transition-all duration-200 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 overflow-hidden no-underline"
          >
            
            {/* Shimmer Effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="animate-shine absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm"></div>
            </div>

            <span className="relative z-10 font-black text-lg tracking-wide uppercase">Ir para o Site Oficial</span>
            <ShieldCheck size={24} strokeWidth={2} className="relative z-10" />
          </a>
        </div>
      </div>
    </>
  );
};