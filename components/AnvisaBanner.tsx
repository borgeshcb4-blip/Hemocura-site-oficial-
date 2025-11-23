import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AnvisaBanner: React.FC = () => {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-2xl border border-blue-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] w-full">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
        <ShieldCheck className="text-blue-600 w-5 h-5" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xs font-black text-blue-900 uppercase tracking-wide leading-none pt-1">
          Autorizado pela ANVISA
        </h3>
        <p className="text-[10px] text-slate-500 font-medium leading-relaxed text-justify">
          Produto em conformidade com a ANVISA, conforme as Resoluções da Diretoria Colegiada (RDC) nº 27/2010, nº 240/2018 e nº 243/2018.
        </p>
      </div>
    </div>
  );
};