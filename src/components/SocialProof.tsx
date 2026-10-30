import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { TestimonialItem } from '../types/index.ts';

interface SocialProofProps {
  testimonials: TestimonialItem[];
}

export const SocialProof: React.FC<SocialProofProps> = ({ testimonials }) => {
  // A seção só aparece se a lista tiver itens reais preenchidos (com texto)
  const validTestimonials = testimonials.filter(
    (item) => item && item.text && item.text.trim().length > 0
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Se não houver depoimentos reais cadastrados, a seção NÃO é renderizada
  // (Conforme regra estrita: "A seção só aparece se a lista tiver itens. Deixe 3 exemplos vazios para eu preencher.")
  if (validTestimonials.length === 0) {
    return null;
  }

  const current = validTestimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + validTestimonials.length) % validTestimonials.length);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#17171f] border-t border-b border-slate-800/60" id="depoimentos">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff9f1c]">
            Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
            Quem já fez o <span className="text-gradient-pink-purple">Magra 7D</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Histórias de alunas que transformaram seus hábitos e reprogramaram seu metabolismo.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-[#20202b] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
          <Quote className="w-10 h-10 text-[#ff3d8b]/30 mb-4" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Foto ou Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-800 border-2 border-[#ff3d8b] shrink-0 flex items-center justify-center">
              {current.imageUrl ? (
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-slate-400" />
              )}
            </div>

            {/* Conteúdo do Depoimento */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic mb-4">
                "{current.text}"
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-t border-slate-750 pt-3">
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">
                    {current.name}
                  </h4>
                  {current.city && (
                    <span className="text-xs text-slate-400">
                      {current.city}
                    </span>
                  )}
                </div>

                {current.weightLossKg && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full self-center md:self-auto">
                    {current.weightLossKg}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Navegação do carrossel */}
          {validTestimonials.length > 1 && (
            <div className="flex items-center justify-end gap-2 mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-slate-400 tabular-nums px-2">
                {currentIndex + 1} / {validTestimonials.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
