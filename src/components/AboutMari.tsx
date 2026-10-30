import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

export const AboutMari: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#17171f] border-t border-slate-800/80" id="sobre">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#20202b] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Foto da Dra. Mari Ferri Mentorando o Reset */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 sm:w-64 md:w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-800">
                <img
                  src="/assets/aistudio/JEZ00003_04ccfad8.jpg"
                  alt="Dra. Mari Ferri - Nutricionista Mentorando o Reset"
                  width={380}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle scrim with caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-center">
                  <span className="text-xs font-semibold text-slate-200">
                    Dra. Mari Ferri · Nutricionista
                  </span>
                </div>
              </div>
            </div>

            {/* Texto de Apresentação */}
            <div className="md:col-span-7 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d8b]">
                Mentorando o Reset
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                Quem é a <span className="text-gradient-pink-purple">Dra. Mari Ferri?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                A <strong>Dra. Mari Ferri</strong> é nutricionista, especializada em emagrecimento e saúde integral. Sua atuação é focada em descomplicar a nutrição, promovendo a reprogramação metabólica sem medidas extremas ou dietas punitivas.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                No evento Magra 7D, ela atua mentorando cada aluna pelo passo a passo de alimentação estratégica e jejum orientado para que qualquer pessoa consiga destravar o metabolismo na vida real.
              </p>

              {/* Selos de credibilidade profissional */}
              <div className="pt-4 border-t border-slate-700/70 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#ff9f1c]" />
                  <span>{siteConfig.expertCrn}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#9b3dff]" />
                  <span>Saúde Integral e Fisiologia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#ff3d8b]" />
                  <span>Emagrecimento Consciente</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
