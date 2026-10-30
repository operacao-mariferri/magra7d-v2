import React from 'react';
import { Video, Calendar, Clock, MonitorPlay } from 'lucide-react';
import { siteConfig } from '../config/siteConfig.ts';

export const WhatIsEvent: React.FC = () => {
  const details = [
    {
      icon: Video,
      label: "Formato",
      value: siteConfig.eventDetails.formato,
    },
    {
      icon: Calendar,
      label: "Data de Início",
      value: siteConfig.eventDetails.dataInicio,
    },
    {
      icon: Clock,
      label: "Duração por Dia",
      value: siteConfig.eventDetails.duracaoPorDia,
    },
    {
      icon: MonitorPlay,
      label: "Onde Assistir",
      value: siteConfig.eventDetails.ondeAssistir,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#17171f] border-t border-slate-800/80" id="como-funciona">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Bloco Inicial com Imagem Nutrição Saudável */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-14">
          <div className="md:col-span-5 flex justify-center order-2 md:order-1">
            <div className="relative w-56 sm:w-64 md:w-full max-w-[280px]">
              <img
                src="/src/assets/images/nutrition-body.png"
                alt="Nutrição saudável e corpo em forma - Magra 7D"
                width={768}
                height={742}
                loading="lazy"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(255,61,139,0.2)]"
              />
            </div>
          </div>

          <div className="md:col-span-7 text-center md:text-left order-1 md:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9b3dff]">
              Metodologia & Estrutura
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4 leading-tight">
              O que é o <span className="text-gradient-pink-purple">Magra 7D</span>?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O Magra 7D é um evento online intensivo criado pela Dra. Mari Ferri para ajudar você a emagrecer de forma saudável em 7 dias. Ele combina técnicas de jejum, nutrição e exercícios, sem passar fome ou sentir fraqueza.
            </p>
          </div>
        </div>

        {/* 2 Cards Visuais Oficiais: Protocolo & Detox */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#20202b] rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl group">
            <div className="overflow-hidden bg-slate-900 aspect-[428/350]">
              <img
                src="/src/assets/images/card-protocolo.png"
                alt="Protocolo de emagrecimento rápido"
                width={428}
                height={350}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 bg-gradient-to-t from-[#20202b] to-[#25202b]">
              <h3 className="text-lg font-bold text-white mb-1">
                Protocolo de emagrecimento rápido
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Aprenda táticas comprovadas para acelerar a queima de gordura de forma saudável.
              </p>
            </div>
          </div>

          <div className="bg-[#20202b] rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl group">
            <div className="overflow-hidden bg-slate-900 aspect-[428/350]">
              <img
                src="/src/assets/images/card-detox.png"
                alt="Estratégias Detox"
                width={428}
                height={350}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 bg-gradient-to-t from-[#20202b] to-[#202033]">
              <h3 className="text-lg font-bold text-white mb-1">
                Estratégias Detox
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Descubra métodos eficazes para desintoxicar seu corpo e melhorar seu bem-estar geral.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco Como Funciona */}
        <div className="bg-[#20202b] border border-slate-700/80 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff9f1c]" />
            Como funciona o evento
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#9b3dff]/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#9b3dff]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco "O jejum feito do jeito certo" com o Relógio Ilustrado Oficial */}
        <div className="bg-gradient-to-r from-[#20202b] via-[#20202b] to-[#252033] border border-slate-700/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d8b]">
              Jejum Consciente
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-2">
              O jejum feito do jeito certo
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
              Aprenda a fazer o jejum intermitente com segurança e orientação nutricional, respeitando os sinais de saciedade do seu organismo sem fraqueza e sem sofrimento.
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              O jejum correto não só estimula a perda de peso, como também melhora a sensibilidade metabólica e o bem-estar diário.
            </p>
          </div>

          <div className="w-48 sm:w-56 shrink-0 flex justify-center">
            <img
              src="/src/assets/images/fasting-clock.png"
              alt="O poder do jejum intermitente"
              width={768}
              height={758}
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
