import React from 'react';
import { ShieldCheck, Truck, Check } from 'lucide-react';

export const FeatureBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {/* Item 1: Compra Segura */}
      <div className="bg-blue-50/50 rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-2 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-blue-100">
        <ShieldCheck className="text-blue-600" size={24} strokeWidth={2} />
        <span className="text-[10px] md:text-xs font-bold text-blue-900 uppercase tracking-tight text-center leading-none">
          Compra Segura
        </span>
      </div>
      
      {/* Item 2: Entrega Discreta */}
      <div className="bg-blue-50/50 rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-2 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-blue-100">
        <Truck className="text-blue-600" size={24} strokeWidth={2} />
        <span className="text-[10px] md:text-xs font-bold text-blue-900 uppercase tracking-tight text-center leading-none">
          Entrega Discreta
        </span>
      </div>

      {/* Item 3: Original */}
      <div className="bg-blue-50/50 rounded-xl py-4 px-2 flex flex-col items-center justify-center gap-2 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-blue-100">
        <Check className="text-blue-600" size={24} strokeWidth={2} />
        <span className="text-[10px] md:text-xs font-bold text-blue-900 uppercase tracking-tight text-center leading-none">
          Original
        </span>
      </div>
    </div>
  );
};