import React from 'react';
import { BENEFITS } from '../data/mockData';
import { Smartphone, Check, Download, WifiOff, CheckCircle2 } from 'lucide-react';

interface WhatYouGetProps {
  onOpenCheckout: () => void;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onOpenCheckout }) => {
  const item = BENEFITS[0];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#050811] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800/40 inline-block mb-3">
            Conteúdo Completo do Material
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            O que você vai receber no seu telemóvel por apenas 197 MT
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Criado com base no Código da Estrada de Moçambique para lhe dar segurança absoluta na sala de exames. Você descarrega em segundos e começa a estudar na mesma hora.
          </p>
        </div>

        {/* Feature Showcase Card with Image */}
        {item && (
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900/90 to-[#070e1c] border border-sky-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-sky-950/40 mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text description */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    {item.tag && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                        <WifiOff className="w-3.5 h-3.5" />
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-sky-300 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Formato idêntico aos computadores de teste do INATRO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Estude 100% offline — sem gastar megas de internet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Compatível com qualquer telemóvel (Android e iPhone)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom tag check */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-medium text-slate-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Incluso no pacote completo</span>
                </div>
              </div>

              {/* Right Column: Screenshot image */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/70 bg-white">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="100% Otimizado para Telemóvel - Questões do Exame INATRO"
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <p className="mt-3 text-center text-xs text-slate-400 font-medium">
                  Visualização real do documento no telemóvel
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Instant Access Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900 to-sky-950/60 border border-sky-800/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-400">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Receba o material completo em menos de 2 minutos
              </h4>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="cursor-pointer shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95 whitespace-nowrap"
          >
            Quero Receber Meu Guia Agora
          </button>
        </div>
      </div>
    </section>
  );
};
