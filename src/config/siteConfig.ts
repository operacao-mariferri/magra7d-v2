import { FaqItem, TestimonialItem } from '../types/index.ts';

export const siteConfig = {
  eventName: "Magra 7D",
  expertName: "Dra. Mari Ferri",
  expertTitle: "Nutricionista Clínica e Especialista em Emagrecimento",
  expertCrn: "CRN-3 / Registro Profissional Ativo",
  
  // Checkout URL destino
  checkoutUrl: "https://pay.kiwify.com.br/magra7d", // Substitua pelo link final de checkout da Hotmart/Kiwify/Eduzz
  
  // Preços
  priceOriginal: "R$ 197,00",
  priceCurrent: "R$ 67,00",
  installments: "9x de R$ 8,80",
  singlePayment: "R$ 67,00 à vista",
  
  // Data fixa para escassez / encerramento do cronômetro (Data e hora fixa para todos)
  // Define uma data fixa futura para a turma atual (Ex: próximo domingo às 23:59:59)
  countdownTarget: new Date(Date.now() + 48 * 3600 * 1000).toISOString(),
  
  // Detalhes do evento
  eventDetails: {
    formato: "100% Online (Aulas em vídeo + Cardápio & Guias em PDF)",
    dataInicio: "Início Imediato após a confirmação da vaga",
    duracaoPorDia: "15 a 20 minutos por dia para aplicar",
    ondeAssistir: "Plataforma de membros exclusiva (celular ou computador)",
  },

  // 3 exemplos vazios para preenchimento com casos reais e autorizados
  testimonials: [
    {
      id: "1",
      name: "",
      city: "",
      text: "",
      imageUrl: "",
      weightLossKg: "",
    },
    {
      id: "2",
      name: "",
      city: "",
      text: "",
      imageUrl: "",
      weightLossKg: "",
    },
    {
      id: "3",
      name: "",
      city: "",
      text: "",
      imageUrl: "",
      weightLossKg: "",
    },
  ] as TestimonialItem[],

  // Perguntas Frequentes (FAQ)
  faqItems: [
    {
      question: "Quero Participar! Como faço?",
      answer: "É muito simples: clique no botão verde 'QUERO PARTICIPAR', preencha seu nome, e-mail e WhatsApp no formulário rápido e prossiga para a página de pagamento 100% segura. Assim que sua inscrição for confirmada, você receberá o acesso imediatamente por e-mail e WhatsApp."
    },
    {
      question: "Tenho diabetes. Posso participar?",
      answer: "Recomendamos fortemente que converse com o seu médico assistente antes de iniciar qualquer protocolo de jejum ou mudança alimentar para adequação das suas medicações."
    },
    {
      question: "Não gosto de academia. Preciso fazer exercícios?",
      answer: "Não é necessário passar horas na academia nem puxar pesos pesados. O foco central do Magra 7D é a reeducação metabólica e a combinação estratégica dos alimentos. Sugerimos apenas movimentos leves e funcionais que você pode fazer em casa se desejar."
    },
    {
      question: "Não sei cozinhar. Vou conseguir seguir o cardápio?",
      answer: "Sim, com toda certeza! O protocolo foi desenhado para a vida real: receitas práticas, com ingredientes simples e acessíveis que você encontra em qualquer supermercado de bairro, sem preparos demorados."
    },
    {
      question: "O que acontece depois dos 7 dias?",
      answer: "Você recebe as diretrizes para manter seu metabolismo ativo, consolidar o peso perdido e não sofrer com efeito sanfona, além de manter o acesso a todo o material por 1 ano completo para revisitar quando quiser."
    },
    {
      question: "Quanto tempo é o acesso?",
      answer: "O acesso é por 1 ano completo (365 dias) a todas as aulas, protocolos, guias e futuras atualizações da turma."
    },
    {
      question: "Funciona para quem já tentou de tudo?",
      answer: "Sim. O método foi concebido exatamente para quem já sofreu com dietas restritivas que desaceleram o metabolismo. Em vez de cortar calorias bruscamente, o Magra 7D atua reprogramando as respostas hormonais e metabólicas do seu organismo."
    }
  ] as FaqItem[],

  // Três perguntas rápidas exibidas antes do botão de oferta
  offerFaqIndexes: [1, 3, 6], // diabetes, cozinhar, "já tentei de tudo"
  
  // Rastreamento
  tracking: {
    metaPixelId: "PIXEL_ID",
    clarityProjectId: "z5c4fsb5lt",
  }
};
