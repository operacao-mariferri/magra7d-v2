import React from 'react';
import { Flame, RefreshCw, CalendarRange, HeartPulse } from 'lucide-react';

export const TheTruth: React.FC = () => {
  const cards = [
    {
      icon: Flame,
      title: "Ativação Metabólica",
      description: "Seu corpo é estimulado desde o dia 1 a usar gordura como combustível.",
      color: "text-[#ff3d8b]",
      border: "hover:border-[#ff3d8b]/50",
    },
    {
      icon: RefreshCw,
      title: "Sem Efeito Sanfona",
      description: "Diferente de dietas restritivas, o protocolo educa seu metabolismo, não o castiga.",
      color: "text-[#9b3dff]",
      border: "hover:border-[#9b3dff]/50",
    },
    {
      icon: CalendarRange,
      title: "Protocolo de 7 Dias",
      description: "Cada dia foi desenhado para potencializar o anterior.",
      color: "text-[#ff9f1c]",
      border: "hover:border-[#ff9f1c]/50",
    },
    {
      icon: HeartPulse,
      title: "Ciclo de Reset Hormonal",
      description: "Foco nos hábitos que influenciam fome e saciedade.",
      color: "text-emerald-400",
      border: "hover:border-emerald-500/50",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#17171f]" id="a-verdade">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d8b]">
            A Verdade Que Ninguém Te Conta
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-6 leading-tight">
            Você não falhou nas dietas. <br className="hidden sm:inline" />
            <span className="text-gradient-pink-purple">As dietas falharam com você.</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              A maioria dos programas pede que você corte calorias, passe fome e viva na academia. O resultado? Seu corpo entra em modo de sobrevivência, segura gordura e você engorda de volta.
            </p>
            <p className="text-slate-200 font-medium">
              Na abordagem da Dra. Mari, o foco não é só o que você come, e sim como seu metabolismo responde ao que você come. Em 7 dias estratégicos, o protocolo ajuda seu corpo a usar melhor a energia.
            </p>
          </div>
        </div>

        {/* 4 Cards com Ícone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`bg-[#20202b] border border-slate-700/80 rounded-2xl p-6 transition-all duration-200 ${card.border} shadow-lg`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4">
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
