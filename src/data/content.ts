// Fonte única da copy da LP — mantém o texto original da Dra. Karol (Ultraformer)
// separado da apresentação, para facilitar revisões de conteúdo sem tocar em JSX.

export const whatsapp = {
  phoneNumber: '5541999632542',
  messagesByContext: {
    menu: 'Olá, vim pelo site e quero avaliar meu caso para Ultraformer.',
    hero: 'Olá, vim pelo site e quero avaliar meu caso para Ultraformer.',
    avaliacao: 'Olá, gostaria de agendar uma avaliação individualizada para Ultraformer.',
    depoimento: 'Olá, vi os resultados no site e quero avaliar meu caso para Ultraformer.',
    final: 'Olá, quero saber se o Ultraformer é indicado para o meu caso.',
    fab: 'Olá, vim pelo site e gostaria de falar sobre o Ultraformer.',
  },
} as const;

export type WhatsAppContext = keyof typeof whatsapp.messagesByContext;

export const nav = [
  { label: 'O procedimento', href: '#o-que-e' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Dúvidas', href: '#duvidas' },
] as const;

export const hero = {
  title: 'Firmeza, contorno e naturalidade sem cirurgia.',
  subtitle:
    'Ultraformer para estimular colágeno, melhorar a flacidez e valorizar o contorno facial com indicação individualizada.',
  benefits: [
    { icon: '↑', text: 'Efeito lifting sem corte' },
    { icon: '◷', text: 'Procedimento rápido e seguro' },
    { icon: '✓', text: 'Equipamento certificado' },
    { icon: '✓', text: 'Avaliação antes da indicação' },
  ],
  ctaLabel: 'Quero avaliar meu caso',
  badgeText: 'AGENDE SUA AVALIAÇÃO',
  cornerTag: 'ULTRAFORMER · AVALIAÇÃO INDIVIDUALIZADA',
  microcopy: 'Atendimento com a Dra. Karol • Protocolo personalizado',
  photoPlaceholder: 'Dra. Karol — retrato editorial, luz natural, fundo limpo',
} as const;

export const trustBar = [
  'Equipamento certificado',
  'Avaliação individualizada',
  'Atendimento no Centro de Curitiba',
] as const;

export const stats = {
  items: [
    { number: '[XX%]', label: 'das pacientes relatam alta satisfação com o resultado' },
    { number: '[XXX+]', label: 'avaliações e protocolos individualizados conduzidos' },
  ],
  photoPlaceholder: 'Detalhe de atendimento/consultório',
  note: '*Números a confirmar com a Dra. Karol antes da publicação.',
} as const;

export const wordmark = 'Dra. Karol Cristina';

export const commitments = {
  eyebrow: 'Nosso compromisso',
  title: 'Critério antes de qualquer procedimento',
  items: [
    {
      number: '01',
      title: 'O critério vem antes do procedimento',
      text: 'Antes de qualquer procedimento, a Dra. Karol avalia sua pele, anatomia, grau de flacidez e expectativa de resultado.',
    },
    {
      number: '02',
      title: 'Naturalidade acima de exagero',
      text: 'O foco não é exagerar. É valorizar com critério, respeitando naturalidade, segurança e proporção.',
    },
    {
      number: '03',
      title: 'Segurança em cada etapa',
      text: 'O Ultraformer exige avaliação correta, técnica adequada e equipamento seguro.',
    },
  ],
} as const;

export const procedure = {
  eyebrow: 'O procedimento',
  title: 'O que é o Ultraformer?',
  description:
    'O Ultraformer é uma tecnologia de ultrassom micro e macrofocado que atua em camadas profundas da pele, estimulando colágeno e promovendo firmeza, contorno e rejuvenescimento progressivo.',
  photoPlaceholder: 'Detalhe do equipamento Ultraformer',
  benefits: [
    { title: 'Redução de flacidez', text: 'Para melhorar firmeza e sustentação da pele.' },
    { title: 'Melhora do contorno', text: 'Para valorizar linhas faciais com naturalidade.' },
    { title: 'Redução de rugas', text: 'Para suavizar sinais de envelhecimento de forma gradual.' },
  ],
} as const;

export const concernSelector = {
  eyebrow: 'Indicação',
  title: 'Onde você percebe a diferença?',
  subtitle:
    'O procedimento pode ser indicado para quem percebe perda de firmeza, papada, contorno menos definido ou flacidez em regiões específicas. Toque em cada ponto para entender.',
  categories: [
    {
      title: 'Papada',
      text: 'Firmeza e definição na linha do maxilar, sem cirurgia.',
      photoPlaceholder: 'Papada — perfil facial',
    },
    {
      title: 'Contorno facial',
      text: 'Valorização das linhas do rosto com naturalidade.',
      photoPlaceholder: 'Contorno facial',
    },
    {
      title: 'Rugas',
      text: 'Suavização progressiva dos sinais de envelhecimento.',
      photoPlaceholder: 'Textura de pele — rugas finas',
    },
    {
      title: 'Corpo',
      text: 'Abdômen, braços e coxas — firmeza onde a pele perdeu sustentação.',
      photoPlaceholder: 'Corpo — abdômen/braços/coxas',
    },
  ],
  note: 'A indicação depende da avaliação individual, grau de flacidez e objetivo estético de cada paciente.',
} as const;

export const authority = {
  eyebrow: 'Autoridade',
  title: 'Avaliação individualizada com a Dra. Karol',
  paragraphs: [
    'Antes de qualquer procedimento, a Dra. Karol avalia sua pele, anatomia, grau de flacidez e expectativa de resultado.',
    'O objetivo é indicar um protocolo coerente com o seu caso, respeitando naturalidade, segurança e proporção.',
  ],
  statement: 'O foco não é exagerar. É valorizar com critério.',
  ctaLabel: 'Quero avaliar meu caso',
  badgeText: 'AVALIAÇÃO PERSONALIZADA',
  photoPlaceholder: 'Dra. Karol atendendo paciente, tom editorial',
} as const;

export const security = {
  eyebrow: 'Segurança',
  title: 'Segurança e qualidade em primeiro lugar',
  subtitle: 'O Ultraformer exige avaliação correta, técnica adequada e equipamento seguro.',
  items: [
    { title: 'Equipamento próprio e seguro', text: 'Tecnologia certificada para protocolos faciais e corporais.' },
    { title: 'Profissional qualificada', text: 'Atendimento conduzido com técnica e responsabilidade.' },
    { title: 'Certificado e regularizado', text: 'Mais segurança na execução do procedimento.' },
  ],
  photoPlaceholder: 'Detalhe do consultório/equipamento',
  ctaCell: {
    title: 'Pronta para avaliar seu caso?',
    ctaLabel: 'Quero avaliar meu caso',
  },
} as const;

export const results = {
  eyebrow: 'Prova social',
  title: 'Resultados reais',
  subtitle: 'Resultados naturais começam com uma boa indicação.',
  quote:
    'Gostaria de deixar meu agradecimento à Dra. Karol. Ela é uma profissional extremamente atenciosa, ouve com paciência e explica tudo com muita clareza. Passa muita segurança e acolhimento. Recomendo de olhos fechados.',
  author: 'Vitoria M.',
  ctaLabel: 'Quero avaliar meu caso',
  photoPlaceholder: 'Retrato de paciente/atendimento, tom editorial',
} as const;

export const faq = {
  title: 'Dúvidas comuns',
  items: [
    {
      question: 'O Ultraformer substitui cirurgia?',
      answer:
        'Não. Ele é uma opção não cirúrgica para melhorar firmeza, contorno e flacidez, com indicação individualizada.',
    },
    {
      question: 'Quando começo a perceber resultado?',
      answer:
        'Os primeiros sinais costumam aparecer nas semanas seguintes, com evolução progressiva à medida que o colágeno é estimulado. O tempo exato varia de acordo com a avaliação individual.',
    },
    {
      question: 'Serve para qualquer pessoa?',
      answer:
        'Não. A indicação depende da avaliação individual da Dra. Karol, considerando pele, anatomia e objetivo estético de cada paciente.',
    },
    {
      question: 'Pode ser feito no rosto e no corpo?',
      answer:
        'Sim. O Ultraformer pode ser indicado tanto para a face — papada, contorno e rugas — quanto para o corpo, em regiões como abdômen, braços e coxas.',
    },
  ],
} as const;

export const finalCta = {
  title: 'Quer saber se o Ultraformer é indicado para você?',
  subtitle: 'Agende uma avaliação com a Dra. Karol e entenda qual protocolo faz mais sentido para o seu caso.',
  ctaLabel: 'Quero avaliar meu caso',
  microcopy: 'Você será direcionada para uma conversa rápida no WhatsApp.',
  location: 'Atendimento no Centro de Curitiba',
} as const;

export const footer = {
  name: 'Dra. Karol Cristina',
  location: 'Atendimento no Centro de Curitiba',
} as const;
