# Lúmina — Unified Design System (Apple-Grade Luxury B2B Reference)
> Catedral de espaço negativo, generosidade tipográfica e disciplina cromática aplicada à distribuição de alta cosmética.

## 1. Princípios Fundamentais
- **Generosidade Tipográfica**: Títulos em escala monumental (80px–96px) com tracking negativo (-1.44px), gerando presença arquitetural e impacto visual imediato.
- **Ritmo por Alternância de Canvas**: Separação visual através da alternância suave entre faixas de `#ffffff` e `#f5f5f7`, eliminando divisores artificiais e bordas pesadas.
- **Geometria Suave (28px Radius & Pills)**: Cards com cantos arredondados generosos de 28px e botões em pílula perfeita (980px radius), criando um toque orgânico e sofisticado.
- **Monocromia com Ponto Focal**: Interface limpa e neutra (tinta `#1d1d1f` e cinza `#6e6e73`), deixando a riqueza cromática e sensorial exclusivamente para as formulações cosméticas.
- **Motion com Propósito**: Transições suaves, sticky reveals e parallax sutil sem poluição visual.

---

## 2. Tokens — Cores

| Nome | Valor | Token | Papel |
|---|---|---|---|
| Primary Ink | `#1d1d1f` | `--color-primary-ink` | Títulos, textos principais, botões primários escuros |
| Mid Gray | `#6e6e73` | `--color-mid-gray` | Textos secundários, legendas técnicas, dados B2B |
| Deep Gray | `#424245` | `--color-deep-gray` | Navegação e ícones em média ênfase |
| Canvas White | `#ffffff` | `--color-paper` | Fundo principal, superfícies de destaque |
| Canvas Gray | `#f5f5f7` | `--color-canvas` | Faixas de alternância de seção, fundo de cards |
| Cool Wash | `#e8e8ed` | `--color-cool-wash` | Hover de botões secundários, inputs e pills |
| Nav Frosted | `rgba(255, 255, 255, 0.82)` | `--color-nav-frosted` | Barra de navegação superior com blur 20px |
| Gold Accent | `#b89368` | `--color-gold-accent` | Acento de luxo sutil para selos de curadoria e badges |
| Warm Ember | `#b64400` | `--color-ember` | Badges de novidade, status de disponibilidade imediata |
| Botanical Sage | `#dbe3d8` | `--color-sage` | Swatch de cosmética botânica e séruns |
| Rose Quartz | `#f4e6e6` | `--color-rose` | Swatch de emulsões e restauração lipídica |
| Golden Amber | `#f7edd9` | `--color-amber-finish` | Swatch de óleos capilares nobres |

---

## 3. Tokens — Tipografia

- **Display & Headings**: `SF Pro Display`, `Inter` ou `Plus Jakarta Sans` com pesos 600 e 700.
  - Display Hero: `80px–96px` (Line-height `1.04`, tracking `-1.44px`).
  - Headings de Seção: `40px–56px` (Line-height `1.07`, tracking `-0.28px`).
  - Subheadings: `28px–32px` (Line-height `1.14`, tracking `0.007em`).
- **Corpo de Texto (Workhorse)**: `SF Pro Text`, `Inter` ou `system-ui`.
  - Body principal: `17px` (Line-height `1.47`, tracking `-0.022em`).
  - Micro-labels / Badges: `12px–14px` (Line-height `1.33`, tracking `-0.12px`).

---

## 4. Spacing & Layout
- **Max-Width do Container**: `1200px` rigidamente centralizado.
- **Section Gap**: `100px–120px` de espaçamento vertical entre blocos.
- **Card Padding**: `28px–40px` interno.
- **Border Radius**:
  - Cards e Imagens de Produto: `28px`
  - Botões e Badges: `980px` (Pill Shape)
  - Links sutis e Inputs: `12px`

---

## 5. Componentes Padronizados
1. **Global Navigation Bar**: Altura 48px, fixa com `backdrop-filter: blur(20px)` sobre `#fafafc/80`, links em 12px com tracking refinado e CTA Pill.
2. **Hero Monumental**: Eyebrow label 17px, Headline 80–96px com tracking negativo, botão Pill de alta ênfase e produto flutuante em destaque.
3. **Cards de Categoria (28px Radius)**: Fundo `#f5f5f7` com fotografia limpa, chips de ativos botânicos e métricas de rentabilidade B2B.
4. **Cinematic Sticky Scroll**: Frasco de alta cosmética posicionado em sticky, aumentando e se deslocando lateralmente conforme o scroll do usuário.
5. **Formulário de Credenciamento**: Estrutura minimalista com inputs em `#ffffff` e botão Pill de envio.
