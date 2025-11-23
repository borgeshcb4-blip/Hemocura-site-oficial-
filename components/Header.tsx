import React from 'react';
import { Lock, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1.5">
          {/* Logo Icon */}
          <div className="relative flex items-center justify-center w-8 h-8">
             <Leaf className="text-[#10b981] w-full h-full fill-emerald-50 transform -rotate-12" strokeWidth={2} />
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col leading-none">
            <span className="text-[#10b981] font-serif font-black text-2xl tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              HEMOCURA
            </span>
            <span className="text-emerald-600/60 text-[8px] tracking-[0.3em] uppercase font-bold pl-0.5">
              Original ®
            </span>
          </div>
        </div>

        {/* Lock Icon - Security Blue */}
        <Lock className="text-blue-600" size={18} strokeWidth={2.5} />
      </div>
    </header>
  );
};