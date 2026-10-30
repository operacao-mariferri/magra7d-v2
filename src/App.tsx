/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { siteConfig } from './config/siteConfig.ts';
import { TrackingParams, TestimonialItem } from './types/index.ts';
import { extractTrackingParams, getHeadlineFromUtmContent } from './utils/utm.ts';
import { initClarity, initMetaPixel } from './utils/tracking.ts';

// Components
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { OfferSummary } from './components/OfferSummary.tsx';
import { SocialProof } from './components/SocialProof.tsx';
import { TheTruth } from './components/TheTruth.tsx';
import { WhatIsEvent } from './components/WhatIsEvent.tsx';
import { WhatYouGet } from './components/WhatYouGet.tsx';
import { OfferPricing } from './components/OfferPricing.tsx';
import { AboutMari } from './components/AboutMari.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';
import { LeadModal } from './components/LeadModal.tsx';
import { StickyMobileCta } from './components/StickyMobileCta.tsx';
import { LegalModal } from './components/LegalModals.tsx';

export default function App() {
  const [trackingParams, setTrackingParams] = useState<TrackingParams>({});
  const [headline, setHeadline] = useState<string>('');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [testimonialsList, setTestimonialsList] = useState<TestimonialItem[]>(siteConfig.testimonials);

  useEffect(() => {
    // 1. Extração de parâmetros de rastreamento e UTMs da URL
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const params = extractTrackingParams(search);
    setTrackingParams(params);

    // 2. Determinação do H1 Dinâmico baseado em utm_content
    const dynamicH1 = getHeadlineFromUtmContent(params.utm_content);
    setHeadline(dynamicH1);

    // 3. Inicialização de ferramentas de medição (Meta Pixel & Clarity)
    initMetaPixel();
    initClarity();

    // 4. Suporte a pré-visualização de depoimentos via query (?preview_testimonials=1)
    const urlParams = new URLSearchParams(search);
    if (urlParams.get('preview_testimonials') === '1') {
      setTestimonialsList([
        {
          id: 'demo1',
          name: 'Juliana Mendes',
          city: 'São Paulo - SP',
          text: 'Consegui desinchar muito na primeira semana. O mais impressionante foi não sentir aquela ansiedade louca por doces à tarde!',
          weightLossKg: '-3.8kg em 7 dias',
        },
        {
          id: 'demo2',
          name: 'Carla Rossi',
          city: 'Belo Horizonte - MG',
          text: 'Já tinha tentado dietas restritivas que me deixavam fraca. O protocolo da Dra. Mari é prático e fácil de seguir na correria do dia a dia.',
          weightLossKg: '-3.2kg em 7 dias',
        },
        {
          id: 'demo3',
          name: 'Fernanda Lima',
          city: 'Curitiba - PR',
          text: 'Minha disposição mudou da água para o vinho. Roupas que não serviam voltaram a fechar com conforto.',
          weightLossKg: '-4.1kg em 7 dias',
        },
      ]);
    }
  }, []);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#17171f] text-slate-100 flex flex-col font-sans selection:bg-[#ff3d8b] selection:text-white">
      
      {/* 0. Top Bar Navigation Contract */}
      <Header onOpenModal={handleOpenLeadModal} />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 1) HERO */}
        <Hero 
          headline={headline || "Perca até 4kg em 7 dias sem dietas malucas, sem academia e sem passar fome."} 
          onOpenModal={handleOpenLeadModal} 
        />

        {/* 2) RESUMO DA OFERTA (logo abaixo do hero) */}
        <OfferSummary onOpenModal={handleOpenLeadModal} />

        {/* 3) PROVA SOCIAL: "Quem já fez o Magra 7D" (só renderiza se houver itens preenchidos) */}
        <SocialProof testimonials={testimonialsList} />

        {/* 4) "A VERDADE QUE NINGUÉM TE CONTA" */}
        <TheTruth />

        {/* 5) "O QUE É O MAGRA 7D" */}
        <WhatIsEvent />

        {/* 6) "O QUE VOCÊ VAI RECEBER" */}
        <WhatYouGet onOpenModal={handleOpenLeadModal} />

        {/* 7) OFERTA / PREÇO */}
        <OfferPricing onOpenModal={handleOpenLeadModal} />

        {/* 8) "QUEM É A DRA. MARI FERRI?" */}
        <AboutMari />

        {/* 9) PERGUNTAS FREQUENTES (acordeão) */}
        <FaqSection />

        {/* 10) CTA FINAL */}
        <FinalCta onOpenModal={handleOpenLeadModal} />
      </main>

      {/* RODAPÉ */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Botão Fixo de Celular (Após scroll do hero) */}
      <StickyMobileCta onOpenModal={handleOpenLeadModal} />

      {/* Modal de Inscrição / Captura de Lead */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        trackingParams={trackingParams}
      />

      {/* Modais Legais (Privacidade e Termos) */}
      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
