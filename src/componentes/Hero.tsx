import React from 'react';
import { CheckCircle2, ShieldCheck, Download, Star } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
  onScrollToExamples?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pb-16 md:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#050811] via-[#070d1a] to-[#050811]">
      {/* Fita de Urgência no topo absoluto da página */}
      <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 py-2.5 px-4 border-b border-amber-400/50 shadow-md relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
          <span className="flex h-2 w-2 rounded-full bg-slate-950 animate-ping shrink-0" />
          <span>⚡ Oferta válida apenas hoje</span>
          <span className="hidden sm:inline text-slate-900/60">•</span>
          <span className="hidden sm:inline normal-case font-semibold text-slate-900">
            Acesso imediato a mais de 750 exames resolvidos por apenas 197 MT
          </span>
        </div>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 text-center">
        {/* Tag / Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-4 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          <span>Para Estudantes da Escola de Condução em Moçambique</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4 font-['Space_Grotesk',sans-serif]">
          Mais de 750 exames resolvidos <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-200">da escola de condução</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          O guia digital definitivo com mais de 750 exames reais resolvidos e explicados no formato oficial dos testes do INATRO. Entenda as pegadinhas de cruzamentos e sinais no seu telemóvel, mesmo sem gastar megas de internet.
        </p>

        {/* Mini VSL - Posicionada ACIMA do botão de CTA */}
        <div className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[360px] mx-auto bg-gradient-to-b from-slate-900/95 to-[#091122]/95 border border-sky-500/30 rounded-2xl p-2 sm:p-2.5 shadow-2xl shadow-sky-950/60 mb-6">
          <div
            style={{
              position: 'relative',
              paddingTop: '224.56140350877192%',
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}
          >
            <iframe
              id="panda-c5644112-7006-400e-9db7-1b6998f8d6a5"
              src="https://player-vz-f0adb277-946.tv.pandavideo.com/embed/?v=c5644112-7006-400e-9db7-1b6998f8d6a5"
              style={{
                border: 'none',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              width="100%"
              height="100%"
              title="Vídeo Explicativo do Guia de Condução"
            />
          </div>
        </div>

        {/* Botão de CTA único (sem segundo botão) posicionado logo abaixo da mini VSL */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mb-8">
          <a
            id="hero-main-cta"
            href="https://checkout.escalepay.com/4631733"
            className="w-full cursor-pointer group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-xl shadow-sky-500/25 hover:shadow-sky-400/35 active:scale-[0.98] text-center"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 transition-transform group-hover:-translate-y-0.5" />
            <span>QUERO PASSAR À PRIMEIRA • 197 MT</span>
          </a>
        </div>

        {/* Benefícios / Pontos chave */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8 text-left">
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Exames reais dos computadores de teste</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Explicação simples sem palavras difíceis</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Download imediato no telemóvel</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Pague com M-Pesa ou e-Mola (197 MT)</span>
          </div>
        </div>

        {/* Prova Social & Garantia */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-4 border-t border-slate-800/60 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5 text-amber-300">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-200 ml-1">4.9/5</span>
            <span className="text-slate-400">(+3.400 alunos em Moçambique)</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia de 7 Dias ou 100% de volta</span>
          </div>
        </div>
      </div>
    </section>
  );
};
