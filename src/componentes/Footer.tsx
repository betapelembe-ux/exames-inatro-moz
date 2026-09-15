import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03060c] border-t border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900 items-start">
          {/* Brand Info */}
          <div className="md:col-span-7 lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-slate-950 font-black text-sm">
                MZ
              </div>
              <span className="font-extrabold text-base text-white tracking-tight font-['Space_Grotesk',sans-serif]">
                AUTOEXAME<span className="text-sky-400">.MZ</span>
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs max-w-md">
              O guia digital de apoio ao estudante da escola de condução em Moçambique. Mais de 750 exames e questões reais resolvidas e explicadas para você passar de primeira no exame teórico.
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Maputo, Matola, Beira, Nampula e todo Moçambique</span>
            </div>
          </div>

          {/* Payment & Security */}
          <div className="md:col-span-5 lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Pagamento Moçambicano
            </h4>
            <p className="text-slate-300 text-xs mb-2">
              Pagamento facilitado e imediato via:
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-semibold text-rose-300">
                M-Pesa (Vodacom)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-semibold text-amber-300">
                e-Mola (Movitel)
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} AUTOEXAME MZ • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
