import React from 'react';
import { CreditCard, QrCode, Barcode, Lock } from 'lucide-react';

export const PaymentTrust: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-50 p-6 md:p-8 flex flex-col items-center gap-6 w-full">
      
      <div className="flex flex-col items-center gap-2">
        <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
          Pagamento Processado Por:
        </span>
        
        {/* Braip Logo Simulation */}
        <div className="flex items-baseline">
          <span className="text-[#0f172a] text-3xl font-bold tracking-tight lowercase">braip</span>
          <span className="bg-[#ff6b00] w-2.5 h-2.5 rounded-full ml-1 mb-1"></span>
        </div>
      </div>

      {/* Payment Methods Icons - Blue for Banking Trust */}
      <div className="flex items-center gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
          <CreditCard size={28} className="text-blue-700" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-blue-900 uppercase">Crédito</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
          <QrCode size={28} className="text-blue-700" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-blue-900 uppercase">Pix</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
          <Barcode size={28} className="text-blue-700" strokeWidth={1.5} />
          <span className="text-[10px] font-bold text-blue-900 uppercase">Boleto</span>
        </div>
      </div>

      {/* SSL Secure Badge - Green Theme (Reverted as requested) */}
      <div className="bg-emerald-50 rounded-full px-6 py-2.5 flex items-center gap-2 border border-emerald-100 w-full justify-center max-w-xs">
        <Lock size={14} className="text-emerald-600" />
        <span className="text-emerald-800 text-xs font-bold uppercase tracking-wide">
          Ambiente Seguro SSL
        </span>
      </div>

    </div>
  );
};