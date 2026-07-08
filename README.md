# LP Dra. Karol Cristina — Ultraformer

Landing page em React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/data/content.ts` — toda a copy da página em um único lugar (fonte da verdade). Editar textos aqui, não dentro dos componentes.
- `src/components/` — um componente por seção da página (Hero, Stats, Commitments, Procedure, Indication, Authority, Security, Results, FAQ, FinalCta, Footer), mais componentes reutilizáveis (`Placeholder`, `RotatingBadge`, `Reveal`, `WhatsAppCta`, `MarginTicks`).
- `src/hooks/useWhatsAppLink.ts` — monta o link do WhatsApp com mensagem e UTM por contexto (hero, avaliação, depoimento, CTA final, fab, menu).
- `tailwind.config.js` — paleta oficial do checklist premium (vinho, marsala, champagne, nude, off-white, grafite) e tipografia (Fraunces + Inter).

## Pendências antes de publicar

1. Trocar `whatsapp.phoneNumber` em `src/data/content.ts` pelo número real da clínica.
2. Substituir os componentes `<Placeholder />` pelas fotos/vídeos reais (cada um já indica o que deve entrar ali).
3. Preencher os números reais em `stats.items` (`src/data/content.ts`) e remover a nota de "a confirmar".
4. Validar as 3 respostas de FAQ reconstruídas (não estavam nos prints originais).

A versão estática anterior (HTML/CSS/JS puro) ficou preservada em `legacy-static-v2/` como referência.
