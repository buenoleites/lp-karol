// Configuração de contato — substituir pelo número real da clínica (formato: 55DDDNUMERO)
const WHATSAPP_NUMBER = '5541999999999';

const MESSAGES_BY_CONTEXT = {
  menu: 'Olá, vim pelo site e quero avaliar meu caso para Ultraformer.',
  hero: 'Olá, vim pelo site e quero avaliar meu caso para Ultraformer.',
  avaliacao: 'Olá, gostaria de agendar uma avaliação individualizada para Ultraformer.',
  depoimento: 'Olá, vi os resultados no site e quero avaliar meu caso para Ultraformer.',
  final: 'Olá, quero saber se o Ultraformer é indicado para o meu caso.',
  fab: 'Olá, vim pelo site e gostaria de falar sobre o Ultraformer.',
};

function buildWhatsAppUrl(context) {
  const message = MESSAGES_BY_CONTEXT[context] || MESSAGES_BY_CONTEXT.hero;
  const params = new URLSearchParams({
    text: message,
    utm_source: 'site',
    utm_medium: 'lp_ultraformer',
    utm_campaign: context,
  });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}

document.querySelectorAll('.js-whatsapp-cta').forEach((el) => {
  const context = el.dataset.context || 'hero';
  el.setAttribute('href', buildWhatsAppUrl(context));
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq-item').forEach((other) => {
      other.classList.remove('is-open');
      other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});
