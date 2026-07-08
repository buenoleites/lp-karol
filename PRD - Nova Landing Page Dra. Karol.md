# PRD — Nova Landing Page Dra. Karol (Ultraformer)

## Context

A landing page atual da Dra. Karol (Ultraformer, hospedada no Great Pages — `app.greatpages.com.br/pages/3551098`) tem uma copy validada e funcional, mas o layout é genérico, com cards pesados, cores fora de padrão (botão verde, tons cinza frios) e pouca sofisticação visual — não condizente com o posicionamento de alto ticket da clínica.

Foi produzido um checklist interno (`checklist_premium_site_dra_karol_cristina_corrigido.pdf`) que define a direção exata de reforma: paleta vinho/marsala/champagne, tipografia serifada elegante, espaçamento generoso, hero consultivo (não promocional), estrutura de seções em ordem de decisão, e CTAs consultivos para WhatsApp. Duas referências visuais foram escolhidas como norte estético (`inspo/`): **Lipedema Guru** (editorial, magazine, boa hierarquia com fotos grandes) e **Beaujour** (minimalista, luxuoso, tipografia serifada fina, muitíssimo espaço em branco, tons de pele quentes) — a segunda é a inspiração mais próxima do tom desejado.

O objetivo deste projeto é **reconstruir a mesma LP, com a mesma copy (palavra por palavra), em um layout totalmente novo**, seguindo a direção do checklist premium e a estética das referências. Não é para mudar a mensagem ou o funil de conversão — é uma reforma puramente visual/estrutural, feita como projeto de código (não mais no Great Pages).

Decisões já tomadas com o usuário:
- Foco mantido: página do **Ultraformer**, mesmo público, mesmo funil (avaliação individualizada → WhatsApp).
- Construção via **código** (não no-code).
- Fotos/vídeos reais novos serão inseridos depois — usar **placeholders visuais genéricos** com legenda indicando o que deve entrar ali (ex.: `[FOTO: Dra. Karol — retrato editorial, luz natural]`).

## 1. Problema identificado

A LP atual converte, mas a percepção de valor não condiz com o ticket do procedimento: cores fora de padrão (verde, cinza frio), cards com sombra pesada e bordas grosseiras, hero sem hierarquia elegante, excesso de elementos por dobra. Isso gera dissonância entre a promessa ("procedimento premium, indicação individualizada, naturalidade") e a experiência visual (aparência de página promocional genérica).

## 2. Solução

Reconstruir a LP como página estática (HTML/CSS/JS, sem framework — ver seção Stack) com:
- Mesma copy integral da LP original (texto abaixo, seção "Copy oficial").
- Novo sistema visual: paleta vinho/marsala/champagne/off-white, tipografia serifada para títulos + sans-serif legível para corpo, espaçamento generoso, cards discretos (sem sombra pesada), botão primário único em marsala.
- Reordenação/ajuste de seções para narrativa de decisão (hero → confiança → indicação → como funciona → segurança → prova social → FAQ → CTA final), conforme o checklist.
- Layout inspirado em Beaujour (hierarquia editorial, blocos alternados texto/imagem, muito respiro) com toques de Lipedema Guru (cards de "quando procurar"/"para quem é indicado" em grid limpo).
- Mobile-first: CTA visível cedo, sem 3 colunas no mobile, botão de WhatsApp fixo discreto.

### Diferenciais da nova versão
- Percepção de alto ticket: silêncio visual, poucos elementos por dobra, hierarquia clara.
- Consistência total: uma família de título (serifada), uma de corpo (sans), um botão primário, um estilo de card.
- CTA consultivo padronizado ("Quero avaliar meu caso") linkando para WhatsApp com mensagem pré-preenchida e UTM.

## 3. Copy oficial (a ser usada literalmente, sem alterações)

**Hero**
- H1: "Firmeza, contorno e naturalidade sem cirurgia."
- Subtítulo: "Ultraformer para estimular colágeno, melhorar a flacidez e valorizar o contorno facial com indicação individualizada."
- Lista de benefícios: "Efeito lifting sem corte" · "Procedimento rápido e seguro" · "Equipamento certificado" · "Avaliação antes da indicação"
- CTA: "Quero avaliar meu caso"
- Microcopy sob o CTA: "Atendimento com a Dra. Karol • Protocolo personalizado"
- Imagem: retrato da Dra. Karol (placeholder até novo material)

**O que é o Ultraformer?**
- Texto: "O Ultraformer é uma tecnologia de ultrassom micro e macrofocado que atua em camadas profundas da pele, estimulando colágeno e promovendo firmeza, contorno e rejuvenescimento progressivo."
- Vídeo do procedimento (placeholder)
- 3 cards: "Redução de flacidez" (Para melhorar firmeza e sustentação da pele) · "Melhora do contorno" (Para valorizar linhas faciais com naturalidade) · "Redução de rugas" (Para suavizar sinais de envelhecimento de forma gradual)

**Para quem o Ultraformer pode fazer sentido?**
- Subtítulo: "O procedimento pode ser indicado para quem percebe perda de firmeza, papada, contorno menos definido ou flacidez em regiões específicas."
- Duas colunas: "Face" (Papada, contorno, rugas) · "Corpo" (Abdômen, braços, coxas) — com vídeo de exemplo ao lado de "Corpo"
- Nota: "A indicação depende da avaliação individual, grau de flacidez e objetivo estético de cada paciente."

**Avaliação individualizada com a Dra. Karol**
- "Antes de qualquer procedimento, a Dra. Karol avalia sua pele, anatomia, grau de flacidez e expectativa de resultado."
- "O objetivo é indicar um protocolo coerente com o seu caso, respeitando naturalidade, segurança e proporção."
- "O foco não é exagerar. É valorizar com critério."
- CTA: "Quero avaliar meu caso"

**Segurança e qualidade em primeiro lugar**
- Subtítulo: "O Ultraformer exige avaliação correta, técnica adequada e equipamento seguro."
- 4 itens: "Equipamento próprio e seguro" (Tecnologia certificada para protocolos faciais e corporais) · "Profissional qualificada" (Atendimento conduzido com técnica e responsabilidade) · "Certificado e regularizado" (Mais segurança na execução do procedimento) · quarto bloco de imagem (era espaço de foto na versão antiga)

**Resultados reais**
- "Resultados naturais começam com uma boa indicação."
- Depoimento: "Gostaria de deixar meu agradecimento à Dra. Karol. Ela é uma profissional extremamente atenciosa, ouve com paciência e explica tudo com muita clareza. Passa muita segurança e acolhimento. Recomendo de olhos fechados." — Vitoria M.
- CTA: "Quero avaliar meu caso"

**Dúvidas comuns (FAQ)**
- "O Ultraformer substitui cirurgia?" → "Não. Ele é uma opção não cirúrgica para melhorar firmeza, contorno e flacidez, com indicação individualizada."
- "Quando começo a perceber resultado?"
- "Serve para qualquer pessoa?"
- "Pode ser feito no rosto e no corpo?"
(Manter as 4 perguntas; se as respostas das 3 últimas não estiverem nos prints, reconstruir texto curto e consultivo no mesmo tom, a confirmar com o usuário antes de publicar)

**CTA final**
- H2: "Quer saber se o Ultraformer é indicado para você?"
- Subtítulo: "Agende uma avaliação com a Dra. Karol e entenda qual protocolo faz mais sentido para o seu caso."
- CTA: "Quero avaliar meu caso"
- Microcopy: "Você será direcionada para uma conversa rápida no WhatsApp."
- "Atendimento no Centro de Curitiba"

> Nota: a captura de tela não cobria 100% das dobras (ex.: respostas completas do FAQ, possível seção de rodapé/menu). Antes da implementação final, validar com o usuário se essas 4 perguntas de FAQ têm respostas completas nas capturas ou se precisam ser fornecidas.

## 4. Persona

**Usuária final**: mulher interessada em procedimentos estéticos faciais não cirúrgicos, público de ticket médio-alto, chegando via tráfego pago (Meta Ads), navegando majoritariamente pelo celular. Busca segurança, indicação criteriosa e resultado natural — não desconto ou promessa milagrosa.

## 5. Stack técnica

**HTML + CSS + JavaScript vanilla**, sem framework de build.

Justificativa: é uma landing page de página única, focada em conversão e velocidade de carregamento em 4G (requisito explícito do checklist). Um framework como React/Next adicionaria bundle, build step e complexidade de hospedagem sem benefício real — não há necessidade de roteamento, estado complexo ou múltiplas páginas. HTML/CSS/JS puro garante o menor tempo de carregamento possível, é hospedável em qualquer lugar (Vercel, Netlify, hosting estático) e facilita a manutenção futura por qualquer pessoa, mesmo sem conhecimento de frameworks.

Detalhes:
- CSS puro com variáveis (`:root`) para a paleta de cores do checklist.
- Tipografia via Google Fonts: uma serifada elegante para títulos (ex. Playfair Display ou Fraunces) + uma sans-serif legível para corpo (ex. Inter ou Work Sans) — máximo de 2 famílias, conforme checklist.
- JS vanilla apenas para: FAQ accordion, menu mobile, lazy load de imagens/vídeo, e montagem de links de WhatsApp com UTM.
- Sem dependências externas de CDN além das fontes (evitar CSPs quebrados/latência).
- Estrutura de arquivos simples: `index.html`, `styles.css`, `script.js`, pasta `assets/` com placeholders nomeados.

## 6. Referências de design

- **Beaujour** (`inspo/...049...png`): hierarquia editorial, tipografia serifada fina em títulos grandes, blocos alternados imagem/texto com muito espaço em branco, paleta neutra terrosa, numeração discreta em "nossos compromissos" — replicar esse tom de silêncio visual e elegância.
- **Lipedema Guru** (`inspo/...048...png`): grids de "quando procurar ajuda" em cards com foto + ícone, seção de FAQ em accordion limpo, uso de estatística/número como prova de autoridade — replicar a estrutura de cards e FAQ.
- **Checklist Premium** (paleta oficial):
  - Vinho profundo `#35141C`
  - Marsala institucional `#642C39`
  - Champagne suave `#D8C3A5`
  - Nude `#EFE7DF`
  - Off-white `#FAF7F5`
  - Grafite `#1F1A1B` (texto principal, não preto puro)

## Estrutura final das seções (ordem)

1. Header fixo: logo + WhatsApp CTA discreto
2. Hero (H1 + subtítulo + benefícios + CTA + microautoridade)
3. Barra de confiança curta (equipamento certificado, avaliação individualizada, Curitiba)
4. O que é o Ultraformer (explicação + vídeo + 3 cards de benefício)
5. Para quem faz sentido (Face / Corpo + nota de avaliação individual)
6. Avaliação individualizada com a Dra. Karol (autoridade + CTA)
7. Segurança e qualidade em primeiro lugar (4 itens)
8. Resultados reais (depoimento + CTA)
9. Dúvidas comuns (FAQ accordion)
10. CTA final + localização

## Verificação

1. Abrir `index.html` em navegador (desktop e emulação mobile do DevTools) e conferir:
   - Hero legível sem rolar no mobile (título + subtítulo + CTA visíveis).
   - Paleta aplicada corretamente (nenhuma cor fora do checklist, nenhum botão verde).
   - FAQ accordion funcional (abre/fecha).
   - Botão de WhatsApp abre `wa.me` com mensagem pré-preenchida mencionando Ultraformer.
2. Rodar Lighthouse (Chrome DevTools) para performance/mobile — meta: carregamento rápido mesmo com placeholders de imagem.
3. Revisar visualmente cada dobra contra o "Checklist final de aprovação" do PDF (página 9): primeira dobra premium em 5s, autoridade antes de prova social, visual limpo, CTA padronizado, boa aparência mobile.
4. Confirmar com o usuário o texto completo do FAQ (3 perguntas sem resposta capturada nos prints) antes de finalizar o conteúdo.
