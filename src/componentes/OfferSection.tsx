import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Download, Smartphone, Zap, Clock, Lock, Sparkles, HelpCircle } from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  // Simulated remaining spots or timer for authentic conversion incentive
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-gradient-to-b from-[#070e1c] via-[#050811] to-[#070e1c] border-t border-slate-800 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/90 px-3.5 py-1.5 rounded-full border border-sky-600/40 inline-block mb-3 shadow-sm">
            Oferta Especial para Estudantes MZ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Invista na sua aprovação pelo menor preço possível
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Não gaste 2.000 MT para repetir o teste no INATRO. Prepare-se com segurança por apenas 197 Meticais.
          </p>
        </div>

        {/* The Main Offer Pricing Card */}
        <div className="relative bg-[#091122] border-2 border-sky-400/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-sky-950/60">
          {/* Top highlight ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>PACOTE COMPLETO • ACESSO IMEDIATO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: What's included checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">
                Guia Oficial dos Exames de Condução Resolvidos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5">
                Tudo o que você precisa para ir para o exame sem medo e passar logo na primeira tentativa:
              </p>

              <div className="space-y-3">
                {[
                  'Caderno Completo com Mais de 750 Exames e Questões Reais do INATRO',
                  'Ficheiro PDF Otimizado para Telemóvel (Funciona 100% Offline)',
                  'Download Imediato e Acesso Vitalício'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Pricing & Checkout trigger */}
            <div className="lg:col-span-5 bg-[#050811] border border-sky-500/30 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center">
              {/* Crossed price */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-slate-400 font-medium">De:</span>
                <span className="text-sm text-slate-400 line-through font-semibold">350 Meticais</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40">
                  -43% DESCONTO
                </span>
              </div>

              {/* Main Price */}
              <div className="my-2">
                <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider block">
                  Por Apenas Pagamento Único:
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk',sans-serif]">
                    197
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-sky-400">
                    MT
                  </span>
                </div>
                <span className="text-xs text-slate-400 block mt-1">
                  (Cento e noventa e sete Meticais • Sem mensalidades)
                </span>
              </div>

              {/* Local Payment Badges */}
              <div className="w-full my-4 py-3 px-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[11px] text-slate-300 font-medium mb-2">
                  Métodos de Pagamento Moçambicanos:
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-rose-950/60 border border-rose-700/50 text-rose-300 text-xs font-bold">
                    M-Pesa (84/85)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-amber-950/60 border border-amber-700/50 text-amber-300 text-xs font-bold">
                    e-Mola (86/87)
                  </span>
                </div>
              </div>

              {/* Urgency countdown indicator */}
              <div className="flex items-center gap-2 text-xs text-amber-300 mb-4 bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-700/30 w-full justify-center">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  Preço especial expira em: <strong>{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</strong>
                </span>
              </div>

              {/* Main Button */}
              <a
                id="offer-buy-now-btn"
                href="https://checkout.escalepay.com/4631733"
                className="cursor-pointer w-full group py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-xl shadow-sky-500/25 hover:shadow-sky-400/40 active:scale-[0.98] flex items-center justify-center gap-2 text-center"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>COMPRAR GUIA POR 197 MT</span>
              </a>

              {/* Safety notice */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Pagamento 100% Seguro & Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
