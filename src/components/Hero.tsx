import React from 'react';
import { Calendar, Globe, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  headline: string;
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ headline, onOpenModal }) => {
  // Realce sutil com gradiente rosa->roxo nas frases de impacto
  const renderHighlightedHeadline = (text: string) => {
    const highlightRegex = /(até 4kg em 7 dias|reset de 7 dias|7 dias|Magra 7D)/i;
    const parts = text.split(highlightRegex);

    if (parts.length === 1) {
      return <span>{text}</span>;
    }

    return (
      <>
        {parts.map((part, i) =>
          highlightRegex.test(part) ? (
            <span key={i} className="text-gradient-pink-purple font-extrabold inline-block">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:py-16 lg:py-20 bg-[#17171f]">
      {/* Background ambient radial glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#ff3d8b]/15 via-[#9b3dff]/10 to-transparent blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Texto (Mobile: Topo) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Texto pequeno acima */}
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#20202b] border border-slate-700/60 text-[#ff9f1c] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#ff9f1c] shrink-0" />
              <span>O MÉTODO QUE REPROGRAMA SEU METABOLISMO</span>
            </div>

            {/* H1 Dinâmico */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.18] mb-5 max-w-2xl text-balance">
              {renderHighlightedHeadline(headline)}
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl">
              Descubra o protocolo de reset metabólico da <strong className="text-white font-semibold">Dra. Mari Ferri</strong>, desenvolvido para estimular a queima de gordura natural com segurança, foco e reeducação alimentar.
            </p>

            {/* Dois Selos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2 bg-[#20202b] border border-slate-700/70 px-3.5 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-[#ff9f1c] shrink-0" />
                <span>Acesso por 1 ano</span>
              </div>
              <div className="flex items-center gap-2 bg-[#20202b] border border-slate-700/70 px-3.5 py-2 rounded-xl">
                <Globe className="w-4 h-4 text-[#ff3d8b] shrink-0" />
                <span>100% Online</span>
              </div>
            </div>

            {/* Botão Principal */}
            <div className="w-full sm:w-auto">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                aria-label="Abrir formulário para participar do Magra 7D"
              >
                <span>QUERO PARTICIPAR</span>
                <span className="text-xl leading-none">→</span>
              </button>
              <p className="text-xs text-slate-400 mt-2.5 flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Inscrição com garantia incondicional de 7 dias</span>
              </p>
            </div>

          </div>

          {/* Coluna de Imagem da Dra. Mari (Versão Original de Referência) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex justify-center">
              <img
                src="/src/assets/images/mari-ferri-hero.png"
                alt="Dra. Mari Ferri - Magra 7D"
                width={768}
                height={924}
                fetchPriority="high"
                className="w-72 sm:w-80 md:w-96 lg:w-[26rem] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,61,139,0.25)] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
