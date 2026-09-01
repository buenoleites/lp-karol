# LPs Dra. Karol Cristina — Ultraformer e Harmonização Glútea

Landing pages em React + Vite + TypeScript + Tailwind CSS + Framer Motion. Um único projeto serve duas páginas com o mesmo sistema visual:

| Página | URL | Copy | Entrada |
| --- | --- | --- | --- |
| Ultraformer | `/` | `src/data/content.ts` | `index.html` → `src/main.tsx` → `src/App.tsx` |
| Harmonização Glútea | `/gluteos/` | `src/data/content.gluteos.ts` | `gluteos/index.html` → `src/main-gluteos.tsx` → `src/AppGluteos.tsx` |

## Rodar localmente

```bash
npm install
npm run dev
# http://localhost:5173/  e  http://localhost:5173/gluteos
```

## Build de produção

```bash
npm run build     # gera dist/index.html e dist/gluteos/index.html
npm run preview
```

O `nginx.conf` do container já resolve `/gluteos` → `/gluteos/` e serve o `index.html` de cada pasta.

## Estrutura

- `src/data/types.ts` — contrato `SiteContent` compartilhado pelas duas páginas (copy, fotos, WhatsApp, seções opcionais como `pricing` e `faq`).
- `src/data/content.ts` / `src/data/content.gluteos.ts` — toda a copy e as fotos de cada página em um único lugar (fonte da verdade). Editar textos e trocar fotos aqui, não dentro dos componentes. Um campo `photo` ausente renderiza um `Placeholder` com a legenda de `photoPlaceholder`.
- `src/data/ContentContext.tsx` — `ContentProvider` / `useContent()`: cada `App*` injeta o seu conteúdo e os componentes leem dele.
- `src/components/` — um componente por seção (Hero, TrustBar, Stats, Procedure, ConcernSelector, Authority, Security, Pricing, Results, FAQ, FinalCta, Footer), mais componentes reutilizáveis (`Placeholder`, `RotatingBadge`, `Reveal`, `WhatsAppCta`, `WhatsAppFab`, `ScrollProgressTicks`). `Security` é reutilizado como "Benefícios" na página de glúteos; `Procedure` tem as variantes `cutout` (aparelho recortado) e `cover` (foto de ambiente + título).
- `src/hooks/useWhatsAppLink.ts` — monta o link do WhatsApp com mensagem e UTM por contexto (`utm_medium=lp_<slug>` da página; `utm_campaign` = hero, avaliação, depoimento, CTA final, fab, menu).
- `tailwind.config.js` — paleta oficial do checklist premium (vinho, marsala, champagne, nude, off-white, grafite) e tipografia (Fraunces + Inter).

## Pendências antes de publicar

### Harmonização Glútea (`/gluteos/`)
1. Substituir os placeholders por fotos reais em `src/data/content.gluteos.ts` (basta importar o arquivo de `src/assets/` e preencher `photo:`):
   - `hero` — FOTO 1: antes/depois de glúteos (obrigatória).
   - `concernSelector.categories[*]` — FOTO 2: imagem ilustrativa (opcional).
   - `security` (Benefícios) — FOTO 4: antes/depois de glúteos (obrigatória).
   - `results` — FOTO 6: prints reais de avaliações do Google.
2. Confirmar o valor em `pricing` ("a partir de R$ 2.000,00" — marcado no briefing como "ajustar").
3. Validar as frases de apoio fora do briefing (descrições das queixas, dos benefícios e o 2º parágrafo de autoridade).

### Ultraformer (`/`)
1. Validar as 3 respostas de FAQ reconstruídas (não estavam nos prints originais).

A versão estática anterior (HTML/CSS/JS puro) ficou preservada em `legacy-static-v2/` como referência.
