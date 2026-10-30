import React, { useState, useEffect } from 'react';
import { Shield, ChevronDown, Lock, CreditCard, QrCode, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

interface OfferPricingProps {
  onOpenModal: () => void;
}

export const OfferPricing: React.FC<OfferPricingProps> = ({ onOpenModal }) => {
  // Configuração do contador regressivo com prazo fixo e igual para todos
  const targetTime = new Date(siteConfig.countdownTarget).getTime();
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    expired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, expired: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  // Acordeão das 3 perguntas antes do botão
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: boolean }>({});

  const toggleAccordion = (idx: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const quickFaqIndices = siteConfig.offerFaqIndexes;

  return (
    <section className="py-14 sm:py-20 bg-[#17171f] relative" id="garantia">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Bloco de Garantia com Ícone de Escudo */}
        <div className="bg-[#20202b] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Se você participar do evento Magra 7D, aplicar as orientações e sentir que não valeu a pena, basta nos enviar um e-mail dentro do prazo de 7 dias e devolveremos 100% do seu dinheiro. Sem pegadinhas e sem ressentimentos.
            </p>
          </div>
        </div>

        {/* Card Principal da Oferta */}
        <div className="bg-[#20202b] border-2 border-[#9b3dff]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
          
          {/* Tag de Destaque */}
          <div className="inline-block bg-gradient-to-r from-[#ff3d8b] to-[#9b3dff] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-md">
            ACESSO IMEDIATO
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Comece Seu Reset Metabólico
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Garanta sua vaga agora e comece sua transformação com um investimento acessível.
          </p>

          {/* Preço em Destaque */}
          <div className="py-4 border-y border-slate-700/60 my-6">
            <div className="text-sm line-through text-slate-400 font-medium">
              De {siteConfig.priceOriginal}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#ff9f1c] my-1">
              Por apenas
            </div>
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {siteConfig.installments}
            </div>
            <div className="text-sm sm:text-base font-semibold text-emerald-400 mt-1">
              ou {siteConfig.singlePayment}
            </div>
          </div>

          {/* Primeiro Botão da Oferta */}
          <div className="max-w-md mx-auto mb-6">
            <button
              onClick={onOpenModal}
              className="w-full py-4 px-6 text-base sm:text-lg font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-[0.98] cursor-pointer"
            >
              QUERO PARTICIPAR
            </button>
          </div>

          {/* Selo Pagamento 100% Seguro & Formas de Pagamento */}
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pagamento 100% Seguro · Criptografia 256-bit</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-xs font-medium pt-1">
              <span className="flex items-center gap-1">
                <QrCode className="w-4 h-4 text-emerald-400" /> Pix Instantâneo
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="w-4 h-4 text-sky-400" /> Cartão até 9x
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4 text-amber-400" /> Boleto Bancário
              </span>
            </div>
          </div>

          {/* Contador Regressivo (Exibido se não expirado; com dimensões fixas para prevenir CLS) */}
          {!timeLeft.expired && (
            <div className="mb-10 p-5 rounded-2xl bg-slate-900/80 border border-slate-700/60 max-w-md mx-auto">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#ff9f1c] mb-3">
                VAGAS LIMITADAS PARA A TURMA ATUAL
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#20202b] rounded-xl p-2 min-h-[58px] flex flex-col justify-center">
                  <span className="text-lg sm:text-xl font-black text-white tabular-nums">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-slate-400">Dias</span>
                </div>
                <div className="bg-[#20202b] rounded-xl p-2 min-h-[58px] flex flex-col justify-center">
                  <span className="text-lg sm:text-xl font-black text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-slate-400">Horas</span>
                </div>
                <div className="bg-[#20202b] rounded-xl p-2 min-h-[58px] flex flex-col justify-center">
                  <span className="text-lg sm:text-xl font-black text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-slate-400">Min</span>
                </div>
                <div className="bg-[#20202b] rounded-xl p-2 min-h-[58px] flex flex-col justify-center">
                  <span className="text-lg sm:text-xl font-black text-[#ff3d8b] tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase text-slate-400">Seg</span>
                </div>
              </div>
            </div>
          )}

          {/* 3 Perguntas em Acordeão logo acima do botão final */}
          <div className="max-w-xl mx-auto text-left mb-8 border-t border-slate-700/60 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
              Dúvidas Frequentes Rápidas
            </h4>

            <div className="space-y-3">
              {quickFaqIndices.map((faqIndex) => {
                const item = siteConfig.faqItems[faqIndex];
                if (!item) return null;
                const isOpen = !!openAccordions[faqIndex];

                return (
                  <div
                    key={faqIndex}
                    className="border border-slate-700/70 rounded-xl bg-slate-900/50 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(faqIndex)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 text-sm font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#ff3d8b]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3.5 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-2.5">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botão Final: GARANTIR MINHA VAGA AGORA */}
          <div className="max-w-md mx-auto">
            <button
              onClick={onOpenModal}
              className="w-full py-4 px-6 text-base sm:text-lg font-extrabold tracking-wider uppercase text-white bg-[#22c55e] hover:bg-[#16a34a] rounded-full transition-all duration-200 glow-green active:scale-[0.98] cursor-pointer shadow-lg"
              aria-label="Garantir minha vaga agora no Magra 7D"
            >
              GARANTIR MINHA VAGA AGORA
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
