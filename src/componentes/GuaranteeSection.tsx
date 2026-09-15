import React from 'react';
import { ShieldCheck, RefreshCw, Smartphone, HeartHandshake } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#050811] border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900/80 to-[#081022] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-emerald-950/20 relative overflow-hidden">
          {/* Subtle green ambient light */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Guarantee Seal Graphic */}
            <div className="shrink-0 flex flex-col items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-1 shadow-xl shadow-emerald-950/50 flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-2 border-2 border-emerald-400/40">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 mb-0.5" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase leading-none">Garantia</span>
                  <span className="text-sm font-extrabold text-white leading-none mt-0.5">7 DIAS</span>
                  <span className="text-[8px] text-emerald-400 font-bold uppercase">100% Devolvemos</span>
                </div>
              </div>
            </div>

            {/* Guarantee Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-['Space_Grotesk',sans-serif]">
                Garantia Incondicional de Satisfação de 7 Dias
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Queremos que você estude com tranquilidade absoluta. Se após descarregar o material você achar que os mais de 750 exames resolvidos não te ajudaram ou que as explicações não facilitaram o seu estudo, <strong>nós devolvemos 100% do seu dinheiro</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <RefreshCw className="w-4 h-4 text-emerald-400" />
                  <span>Devolução direta via M-Pesa / e-Mola</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Sem burocracia ou perguntas chatas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
