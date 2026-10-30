import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

interface OfferSummaryProps {
  onOpenModal: () => void;
}

export const OfferSummary: React.FC<OfferSummaryProps> = ({ onOpenModal }) => {
  return (
    <section className="py-6 px-4 sm:px-6 bg-[#17171f]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#20202b] border border-slate-700/80 rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
          
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff3d8b] via-[#9b3dff] to-[#ff9f1c]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Bloco de Preço & Oferta */}
            <div className="text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Condição Especial de Lançamento
              </span>
              <div className="mt-1 flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-sm line-through text-slate-400 font-medium">
                  De {siteConfig.priceOriginal}
                </span>
                <span className="text-xs font-bold text-[#ff9f1c] uppercase">por apenas</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {siteConfig.priceCurrent} <span className="text-sm sm:text-base font-normal text-slate-300">à vista</span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-400 font-semibold">
                ou {siteConfig.installments}
              </div>
            </div>

            {/* 3 Itens */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff3d8b] shrink-0" />
                <span className="font-medium">7 dias de conteúdo intensivo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#9b3dff] shrink-0" />
                <span className="font-medium">Protocolo de emagrecimento rápido</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff9f1c] shrink-0" />
                <span className="font-medium">Acesso por 1 ano</span>
              </div>
            </div>

            {/* Botão */}
            <div className="w-full md:w-auto shrink-0">
              <button
                onClick={onOpenModal}
                className="w-full md:w-auto px-6 py-3 text-sm font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-95 cursor-pointer whitespace-nowrap text-center"
              >
                QUERO PARTICIPAR
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
