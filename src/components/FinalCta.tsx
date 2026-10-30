import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

interface FinalCtaProps {
  onOpenModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#17171f] via-[#20202b] to-[#17171f] relative overflow-hidden text-center">
      
      {/* Background soft glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#ff3d8b]/10 to-[#9b3dff]/10 blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="inline-flex items-center gap-2 mb-4 text-[#ff9f1c] text-xs font-bold uppercase tracking-wider bg-[#17171f] px-3.5 py-1.5 rounded-full border border-slate-700/60">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sua Nova Versão Começa Aqui</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          Pronta para reprogramar seu metabolismo em <span className="text-gradient-pink-purple">7 dias</span>?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
          Junte-se à Dra. Mari Ferri por apenas <strong className="text-white">{siteConfig.priceCurrent} à vista</strong> ou {siteConfig.installments} e dê o primeiro passo definitivo.
        </p>

        <div className="max-w-md mx-auto">
          <button
            onClick={onOpenModal}
            className="w-full py-4 px-8 text-base sm:text-lg font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>QUERO PARTICIPAR</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
