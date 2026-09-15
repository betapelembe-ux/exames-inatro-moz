import React from 'react';
import { ShieldCheck, Sparkles, Download, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#050811]/90 border-b border-sky-950/40 transition-all">
      {/* Top micro-notification bar */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-sky-200 text-xs py-1.5 px-4 text-center border-b border-sky-800/30 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-medium tracking-wide">
          Edição Moçambique 2025/2026: <strong>150+ Questões Reais Resolvidas</strong> • Apenas <strong>197 MT</strong> via M-Pesa e e-Mola
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white shadow-lg shadow-sky-900/30 border border-sky-400/30">
            <svg
              className="w-6 h-6 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
              <circle cx="7.5" cy="14.5" r="1.5" />
              <circle cx="16.5" cy="14.5" r="1.5" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-lg text-white font-['Space_Grotesk',sans-serif]">
                AUTOEXAME<span className="text-sky-400">.MZ</span>
              </span>
              <span className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Moçambique
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-tight hidden sm:block">
              Guia de Exames Resolvidos da Condução
            </p>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#beneficios" className="hover:text-sky-400 transition-colors">
            O Que Vai Receber
          </a>
          <a href="#exemplos" className="hover:text-sky-400 transition-colors">
            Exemplos Resolvidos
          </a>
          <a href="#depoimentos" className="hover:text-sky-400 transition-colors">
            Estudantes Aprovados
          </a>
          <a href="#faq" className="hover:text-sky-400 transition-colors">
            Perguntas Frequentes
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            id="header-cta-btn"
            href="https://checkout.escalepay.com/4631733"
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-[0.98] whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Baixar Guia • 197 MT</span>
          </a>
        </div>
      </div>
    </header>
  );
};
