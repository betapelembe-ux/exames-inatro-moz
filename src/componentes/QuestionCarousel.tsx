import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Sparkles, ZoomIn, CheckCircle2 } from 'lucide-react';

interface QuestionCarouselProps {
  onOpenCheckout: () => void;
}

// Os 8 links de imagens dos exames reais fornecidos pelo usuário:
// 1. https://ibb.co/MxLCY2J0
// 2. https://ibb.co/jP8gJx4S
// 3. https://ibb.co/0R7RQNBn
// 4. https://ibb.co/TxH9p0MW
// 5. https://ibb.co/MkW6kjNB
// 6. https://ibb.co/7dSRcrSN
// 7. https://ibb.co/7dSRcrSN
// 8. https://ibb.co/Z9R1FBG

const EXAM_SLIDES = [
  {
    id: 1,
    title: 'Exame Real Resolvido #1',
    category: 'Cruzamentos & Prioridades',
    src: '/exames/exame_1.jpg',
    fallbackSrc: 'https://i.ibb.co/B5RCXzYM/Whats-App-Image-2026-09-12-at-12-51-56.jpg',
    originalUrl: 'https://ibb.co/MxLCY2J0'
  },
  {
    id: 2,
    title: 'Exame Real Resolvido #2',
    category: 'Sinalização & Regras de Trânsito',
    src: '/exames/exame_2.jpg',
    fallbackSrc: 'https://i.ibb.co/FLhgHf7F/Whats-App-Image-2026-09-12-at-12-51-55-1.jpg',
    originalUrl: 'https://ibb.co/jP8gJx4S'
  },
  {
    id: 3,
    title: 'Exame Real Resolvido #3',
    category: 'Regras de Cedência & Manobras',
    src: '/exames/exame_3.jpg',
    fallbackSrc: 'https://i.ibb.co/KpPpmZN5/Whats-App-Image-2026-09-12-at-12-51-55.jpg',
    originalUrl: 'https://ibb.co/0R7RQNBn'
  },
  {
    id: 4,
    title: 'Exame Real Resolvido #4',
    category: 'Sinais de Perigo & Obrigação',
    src: '/exames/exame_4.jpg',
    fallbackSrc: 'https://i.ibb.co/1t9FhXGz/Whats-App-Image-2026-09-12-at-12-51-54-1.jpg',
    originalUrl: 'https://ibb.co/TxH9p0MW'
  },
  {
    id: 5,
    title: 'Exame Real Resolvido #5',
    category: 'Pegadinhas do Exame do INATRO',
    src: '/exames/exame_5.jpg',
    fallbackSrc: 'https://i.ibb.co/k2k12rcm/Whats-App-Image-2026-09-12-at-12-51-54.jpg',
    originalUrl: 'https://ibb.co/MkW6kjNB'
  },
  {
    id: 6,
    title: 'Exame Real Resolvido #6',
    category: 'Prioridade em Rotundas & Vias Rápidas',
    src: '/exames/exame_6.jpg',
    fallbackSrc: 'https://i.ibb.co/HfKxvGKp/Whats-App-Image-2026-09-12-at-12-51-53-1.jpg',
    originalUrl: 'https://ibb.co/7dSRcrSN'
  },
  {
    id: 7,
    title: 'Exame Real Resolvido #7',
    category: 'Velocidades & Distâncias de Segurança',
    src: '/exames/exame_6.jpg',
    fallbackSrc: 'https://i.ibb.co/HfKxvGKp/Whats-App-Image-2026-09-12-at-12-51-53-1.jpg',
    originalUrl: 'https://ibb.co/7dSRcrSN'
  },
  {
    id: 8,
    title: 'Exame Real Resolvido #8',
    category: 'Gabarito Oficial & Respostas Explicadas',
    src: '/exames/exame_7.jpg',
    fallbackSrc: 'https://i.ibb.co/JZWFGvm/Whats-App-Image-2026-09-12-at-12-51-52.jpg',
    originalUrl: 'https://ibb.co/Z9R1FBG'
  }
];

export const QuestionCarousel: React.FC<QuestionCarouselProps> = ({ onOpenCheckout }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % EXAM_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + EXAM_SLIDES.length) % EXAM_SLIDES.length);
  };

  const currentSlide = EXAM_SLIDES[currentIndex];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section id="exemplos" className="py-14 sm:py-20 bg-[#070d1a] border-y border-slate-800 relative select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Exemplos Reais do Material</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Veja o que vais receber
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Vais receber mais de 750 exames resolvidos da escola de condução
          </p>
        </div>

        {/* Card Principal do Carrossel */}
        <div className="relative bg-[#091122] border-2 border-sky-500/30 rounded-2xl p-3 sm:p-6 shadow-2xl shadow-sky-950/60">
          {/* Barra Superior com Contagem e Categoria */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800/60">
                {currentSlide.title}
              </span>
              <span className="hidden sm:inline text-slate-300">
                {currentSlide.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentIndex + 1} de {EXAM_SLIDES.length}</span>
            </div>
          </div>

          {/* Área da Imagem com Setas Flutuantes */}
          <div
            className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center min-h-[420px] sm:min-h-[520px] max-h-[700px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={currentSlide.id}
              src={currentSlide.src}
              alt={currentSlide.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== currentSlide.fallbackSrc) {
                  target.src = currentSlide.fallbackSrc;
                }
              }}
              className="w-full h-auto max-h-[680px] object-contain mx-auto transition-opacity duration-300"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Seta Esquerda */}
            <button
              onClick={handlePrev}
              aria-label="Imagem anterior"
              className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/80 hover:bg-sky-500 text-white hover:text-slate-950 border border-slate-700/80 hover:border-sky-400 flex items-center justify-center transition-all shadow-xl backdrop-blur-sm active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Seta Direita */}
            <button
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/80 hover:bg-sky-500 text-white hover:text-slate-950 border border-slate-700/80 hover:border-sky-400 flex items-center justify-center transition-all shadow-xl backdrop-blur-sm active:scale-95"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Pontos de Navegação (Dots) */}
          <div className="flex items-center justify-center gap-2 pt-4 pb-2">
            {EXAM_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para exame ${idx + 1}`}
                className={`cursor-pointer transition-all rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-sky-400 shadow-md shadow-sky-400/40'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Botão de Chamada para Ação abaixo do Carrossel */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                São <strong>mais de 750 exames resolvidos</strong> no guia completo!
              </span>
            </div>

            <a
              href="https://checkout.escalepay.com/4631733"
              className="w-full sm:w-auto cursor-pointer px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-sky-400 hover:bg-sky-300 text-slate-950 transition-all shadow-md shadow-sky-500/20 whitespace-nowrap active:scale-95 text-center inline-block"
            >
              Garantir os 750+ Exames (197 MT)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
