// Fonte única da copy da LP de Harmonização Glútea (`/gluteos/`).
// Baseada no briefing "LANDING PAGES MES 03 — GLÚTEOS". Frases de apoio (fora do briefing)
// seguem o tom consultivo da LP do Ultraformer e devem ser validadas antes de publicar.
//
// Fotos pendentes (renderizam <Placeholder> até chegarem): preencher `photo:` com o import
// do arquivo em `src/assets/` — hero (FOTO 1), concernSelector (FOTO 2, opcional),
// security/benefícios (FOTO 4) e results (FOTO 6).

import type { SiteContent } from './types';
import logo from '../assets/logo.png';
import recepcaoPhoto from '../assets/recepcao1.png';
import clinicaPhoto from '../assets/clinica.jpg';
import atendimentoPhoto from '../assets/atendimento.jpg';

export const content: SiteContent = {
  slug: 'gluteos',

  whatsapp: {
    phoneNumber: '5541998002602',
    messagesByContext: {
      menu: 'Olá, vim pelo site e quero avaliar meu caso para harmonização glútea.',
      hero: 'Olá, vim pelo site e quero melhorar meus glúteos. Gostaria de avaliar meu caso.',
      avaliacao: 'Olá, gostaria de agendar uma avaliação para harmonização glútea.',
      depoimento: 'Olá, vi os resultados no site e quero avaliar meu caso para harmonização glútea.',
      final: 'Olá, quero transformar meu corpo. Gostaria de avaliar a harmonização glútea.',
      fab: 'Olá, vim pelo site e gostaria de falar sobre harmonização glútea.',
    },
  },

  nav: [
    { label: 'O procedimento', href: '#o-que-e' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Valores', href: '#valores' },
    { label: 'Resultados', href: '#resultados' },
  ],

  wordmark: 'Dra. Karol Cristina',
  logo,

  // 1. Cabeçalho
  hero: {
    cornerTag: 'HARMONIZAÇÃO GLÚTEA · SEM CIRURGIA',
    title: 'Conquiste glúteos mais volumosos, firmes e definidos',
    subtitle: 'Harmonização glútea com resultados naturais e progressivos, sem cirurgia.',
    benefits: [
      { icon: '✓', text: 'Mais volume' },
      { icon: '✓', text: 'Mais firmeza' },
      { icon: '✓', text: 'Mais contorno' },
    ],
    ctaLabel: 'Quero melhorar meus glúteos',
    badgeText: 'AGENDE SUA AVALIAÇÃO',
    microcopy: 'Atendimento com a Dra. Karol • Protocolo personalizado',
    photoPlaceholder: 'FOTO 1 — Resultado real (antes/depois de glúteos)',
  },

  trustBar: ['Sem cirurgia', 'Avaliação individualizada', 'Atendimento no Centro de Curitiba'],

  // 8. Localização (com números da clínica)
  stats: {
    items: [
      { number: '99%', label: 'das pacientes relatam alta satisfação com o resultado' },
      { number: '3000+', label: 'avaliações e protocolos individualizados conduzidos' },
    ],
    photo: recepcaoPhoto,
    photoPlaceholder: 'Detalhe da recepção do consultório',
    addressLabel: 'Localização',
    address: 'Rua Voluntários da Pátria, 547 - Centro de Curitiba',
  },

  // 3. Solução
  procedure: {
    photoStyle: 'cover',
    photo: clinicaPhoto,
    photoPlaceholder: 'FOTO 3 — Aplicação sendo realizada ou imagem da clínica',
    eyebrow: 'O procedimento',
    title: 'O que é a harmonização glútea?',
    text: 'Técnicas que aumentam volume, firmeza e contorno de forma segura e natural.',
  },

  // 2. Problema / identificação
  concernSelector: {
    eyebrow: 'Identificação',
    title: 'Você se sente assim?',
    subtitle:
      'Muitas pacientes chegam ao consultório com queixas parecidas. Toque em cada ponto para entender.',
    categories: [
      {
        title: 'Falta de volume',
        text: 'Glúteos com pouca projeção, mesmo com treino e alimentação em dia.',
        photoPlaceholder: 'FOTO 2 — Imagem ilustrativa (opcional)',
      },
      {
        title: 'Flacidez',
        text: 'Pele e contorno com menos sustentação e firmeza.',
        photoPlaceholder: 'FOTO 2 — Imagem ilustrativa (opcional)',
      },
      {
        title: 'Dificuldade em modelar',
        text: 'Formato que não responde ao exercício e pede um contorno mais definido.',
        photoPlaceholder: 'FOTO 2 — Imagem ilustrativa (opcional)',
      },
    ],
    note: 'A indicação depende da avaliação individual, da anatomia e do objetivo estético de cada paciente.',
  },

  // 6. Autoridade
  authority: {
    eyebrow: 'Autoridade',
    title: 'Atendimento com especialista',
    paragraphs: [
      'Procedimentos realizados com foco em resultado natural e segurança.',
      'Antes de qualquer aplicação, a Dra. Karol avalia sua anatomia, proporção e expectativa de resultado para indicar o protocolo adequado ao seu caso.',
    ],
    statement: 'O foco não é exagerar. É valorizar com critério.',
    ctaLabel: 'Quero melhorar meus glúteos',
    badgeText: 'AVALIAÇÃO PERSONALIZADA',
    photo: atendimentoPhoto,
    photoPlaceholder: 'FOTO 5 — Dra. Karol atendendo',
  },

  // 4. Benefícios
  security: {
    id: 'beneficios',
    eyebrow: 'Benefícios',
    title: 'Resultados que você vê e sente',
    subtitle: 'Mais volume, mais firmeza e um contorno mais bonito — sem cirurgia e com naturalidade.',
    items: [
      { title: 'Mais volume', text: 'Projeção e preenchimento na medida certa para o seu corpo.' },
      { title: 'Mais firmeza', text: 'Pele e tecidos com mais sustentação.' },
      { title: 'Contorno mais bonito', text: 'Formato harmônico e proporcional ao restante do corpo.' },
      { title: 'Sem cirurgia', text: 'Sem cortes, com indicação individualizada e resultado progressivo.' },
    ],
    photoPlaceholder: 'FOTO 4 — Antes e depois (glúteos)',
    ctaCell: {
      title: 'Pronta para avaliar seu caso?',
      ctaLabel: 'Quero melhorar meus glúteos',
    },
  },

  // 7. Prova social
  results: {
    id: 'resultados',
    eyebrow: 'Prova social',
    title: 'O que as pacientes dizem',
    subtitle: 'Avaliação máxima no Google e pacientes que recomendam.',
    rating: { stars: 5, label: '5 estrelas no Google' },
    quote:
      'Gostaria de deixar meu agradecimento à Dra. Karol. Ela é uma profissional extremamente atenciosa, ouve com paciência e explica tudo com muita clareza. Passa muita segurança e acolhimento. Recomendo de olhos fechados.',
    author: 'Vitoria M.',
    ctaLabel: 'Quero melhorar meus glúteos',
    photoPlaceholder: 'FOTO 6 — Prints reais de avaliações do Google',
  },

  // 5. Valores — ⚠ valor marcado no briefing como "ajustar com você"
  pricing: {
    id: 'valores',
    eyebrow: 'Valores',
    title: 'Investimento',
    subtitle: 'Cada protocolo é montado na avaliação, de acordo com a sua anatomia e o seu objetivo.',
    items: [
      { label: 'Procedimentos a partir de', value: 'R$ 2.000,00' },
      {
        label: 'Protocolos',
        value: 'Personalizados',
        text: 'Quantidade de sessões e técnica definidas para o seu caso.',
      },
    ],
    statement: 'Avaliação define o melhor resultado.',
    ctaLabel: 'Quero melhorar meus glúteos',
  },

  // 9. CTA final
  finalCta: {
    title: 'Pronta para transformar o seu corpo?',
    subtitle: 'Agende uma avaliação com a Dra. Karol e descubra o protocolo ideal para os seus glúteos.',
    ctaLabel: 'Quero transformar meu corpo',
    microcopy: 'Você será direcionada para uma conversa rápida no WhatsApp.',
    location: 'Atendimento no Centro de Curitiba',
  },

  footer: {
    name: 'Dra. Karol Cristina',
    location: 'Atendimento no Centro de Curitiba',
  },
};
