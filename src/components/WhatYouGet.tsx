import React from 'react';
import { Check } from 'lucide-react';

interface WhatYouGetProps {
  onOpenModal: () => void;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onOpenModal }) => {
  const items = [
    {
      title: "7 dias de conteúdo intensivo",
      desc: "Aulas práticas com o passo a passo diário para reprogramar seus hábitos sem sobrecarga.",
    },
    {
      title: "Protocolo de emagrecimento rápido",
      desc: "Combinações alimentares anti-inflamatórias calculadas para destravar a queima de gordura.",
    },
    {
      title: "Estratégias detox",
      desc: "Limpeza metabólica suave para desinchar, melhorar a digestão e aumentar sua energia.",
    },
    {
      title: "Técnicas de jejum intermitente",
      desc: "Como jejuar com conforto e segurança, ajustado para mulheres reais e suas rotinas.",
    },
    {
      title: "Acesso por 1 ano completo",
      desc: "Reveja os materiais e repita o ciclo de reset quantas vezes quiser ao longo de 365 dias.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#17171f]" id="conteudo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff9f1c]">
            Tudo Incluso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
            O que você vai receber
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Um kit completo para transformar sua relação com a comida e conquistar resultados reais.
          </p>
        </div>

        {/* Lista com ícones de check */}
        <div className="space-y-4 mb-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#20202b] border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-colors hover:border-slate-600"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-[#22c55e] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            QUERO PARTICIPAR
          </button>
        </div>

      </div>
    </section>
  );
};
