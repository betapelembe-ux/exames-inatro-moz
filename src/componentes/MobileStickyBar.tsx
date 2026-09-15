import React from 'react';
import { Download, Zap } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#050811]/95 backdrop-blur-lg border-t border-sky-950/60 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white">Guia de Exames</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-900/60 text-rose-300 font-bold">
              -74%
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-black text-sky-400 font-['Space_Grotesk',sans-serif]">
              197 MT
            </span>
            <span className="text-[10px] text-slate-300 line-through">350 MT</span>
          </div>
        </div>

        <a
          id="mobile-sticky-cta"
          href="https://checkout.escalepay.com/4631733"
          className="cursor-pointer flex-1 py-3 px-4 rounded-xl font-extrabold text-xs bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95 flex items-center justify-center gap-1.5 whitespace-nowrap text-center"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>BAIXAR AGORA • 197 MT</span>
        </a>
      </div>
    </div>
  );
};
