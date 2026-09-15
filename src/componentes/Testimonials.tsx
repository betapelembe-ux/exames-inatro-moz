import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle, MapPin, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Histórias Reais de Sucesso em Moçambique</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Quem estudou pelo guia passou à primeira. Veja os relatos:
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Estudantes de várias províncias que deixaram o medo de lado e garantiram a aprovação no exame teórico sem complicações.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-sky-500/30 transition-all shadow-lg shadow-black/40"
            >
              <div>
                {/* Photo of student holding license */}
                {review.image && (
                  <div className="mb-5 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative aspect-[16/10] group">
                    <img
                      src={review.image}
                      alt={`Aprovado com a carta de condução - ${review.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 shadow-md">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Carta em Mãos • Aprovado(a)</span>
                    </div>
                  </div>
                )}

                {/* Stars & Score badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {review.score}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-sky-500/40"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sky-950 border border-sky-500/40 flex items-center justify-center font-bold text-sky-300 text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      <span>{review.city} • {review.drivingSchool}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400">
                  {review.verifiedDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom credibility banner */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Mais de 3.420 candidatos aprovados em Maputo, Gaza, Inhambane, Sofala, Manica, Tete, Zambézia, Nampula, Cabo Delgado e Niassa.</span>
        </div>
      </div>
    </section>
  );
};
