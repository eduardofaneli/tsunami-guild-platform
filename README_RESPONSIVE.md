# 🌊 TSUNAMI Guild - Throne and Liberty

Uma Single Page Application (SPA) moderna e **totalmente responsiva** para a guild TSUNAMI do MMORPG "Throne and Liberty". A plataforma serve como ferramenta de apresentação e recrutamento para a guild.

## ✨ Funcionalidades

- 🎮 **Design Gaming**: Interface com tema épico/fantasia adequado para comunidade gamer
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile (até 320px)
- 🎬 **Animações Fluidas**: Implementado com Framer Motion para experiência suave
- 🍔 **Menu Hambúrguer Interativo**: Navegação mobile intuitiva com efeitos visuais
- 📝 **Formulário de Candidatura**: Sistema completo para novos membros
- 🎨 **Tema Moderno**: Design system consistente com cores e tipografia personalizadas
- ⚡ **Performance Otimizada**: Carregamento rápido e animações 60fps

## 🛠️ Tech Stack

- **Framework**: React 18 com TypeScript
- **Build Tool**: Vite
- **Estilização**: Styled-components com sistema de tema
- **Animações**: Framer Motion
- **Formulários**: React Hook Form
- **Ícones**: Lucide React
- **Package Manager**: pnpm

## 📱 Responsividade Completa

O site foi cuidadosamente otimizado para **todos** os tamanhos de tela:

### 🖥️ Desktop (1280px+)
- Layout completo com elementos flutuantes animados
- Grid de 4 colunas para estatísticas
- Navegação horizontal no header
- Efeitos de hover complexos

### 📟 Tablet (768px - 1279px)
- Layout adaptado com grids responsivos
- Elementos reorganizados verticalmente
- Navegação ainda horizontal
- Otimizações de espaçamento

### 📱 Mobile (até 767px)
- **Menu hambúrguer** com animações suaves
- Layout completamente vertical
- Cards empilhados em coluna única
- Botões otimizados para touch (44px mínimo)
- Elementos flutuantes ocultos para performance

### 📱 Mobile Small (até 640px)
- Tipografia reduzida proportcionalmente
- Espaçamentos otimizados
- Formulários com campos maiores
- Prevenção de zoom no iOS

### Breakpoints Utilizados
```typescript
xs: '480px'   // Extra small devices
sm: '640px'   // Small devices 
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
2xl: '1536px' // XXL devices
```

## 🚀 Como Executar

```bash
# Clone o repositório
git clone <repo-url>

# Entre no diretório
cd tsunami

# Instale as dependências
pnpm install

# Execute em modo desenvolvimento
pnpm dev

# Build para produção
pnpm build
```

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegação com menu responsivo
│   ├── Hero.tsx        # Seção principal
│   ├── About.tsx       # Sobre a guild
│   ├── Contact.tsx     # Informações de contato
│   ├── ApplicationForm.tsx # Formulário de candidatura
│   └── Footer.tsx      # Rodapé
├── styles/             # Sistema de estilos
│   ├── theme.ts        # Tema global com breakpoints
│   ├── GlobalStyles.ts # Estilos globais + mobile
│   └── styled.d.ts     # Tipagem TypeScript
├── hooks/              # Hooks customizados
│   └── useDynamicTitle.ts # Título dinâmico
└── App.tsx            # Componente principal
```

## 🎮 Características Gaming

- **Paleta de Cores**: Gradientes azul/roxo remetem ao universo MMORPG
- **Tipografia**: Fonte Orbitron para títulos (futurística/gaming)
- **Animações**: Efeitos de hover, escalas e brilhos
- **Terminologia**: Uso de conceitos de guild, PvP, raids, etc.
- **Elementos Visuais**: Ícones de espada, escudo, coroa

## 📋 Funcionalidades Mobile Específicas

### 🍔 Menu Hambúrguer
- ✅ Animação suave de abertura/fechamento
- ✅ Overlay com blur de fundo
- ✅ Botões com feedback visual (hover/active)
- ✅ Fechamento por ESC ou clique no X
- ✅ Bloqueio de scroll do body quando aberto
- ✅ Links com estilo de botão consistente

### 📱 Touch Optimizations
- ✅ Botões mínimo 44px para facilitar toque
- ✅ Hover states funcionais em touch devices
- ✅ Prevenção de zoom no iOS (font-size 16px+ em inputs)
- ✅ Tap highlights customizados
- ✅ Smooth scroll entre seções

### ⚡ Performance Mobile
- ✅ Elementos flutuantes removidos em mobile
- ✅ Imagens e animações otimizadas
- ✅ Lazy loading implementado
- ✅ Bundle size minimizado

## 🔧 Otimizações Implementadas

### 🎨 UX/UI
- **Feedback Visual**: Todos os botões têm estados hover/active
- **Consistência**: Sistema de design unificado em todas as telas
- **Acessibilidade**: Contraste adequado, navegação por teclado
- **Responsividade**: Adaptação fluida entre breakpoints

### ⚡ Performance
- **Animações 60fps**: Otimizadas para não causar jank
- **Bundle Splitting**: Carregamento eficiente de componentes
- **Debounced Effects**: Prevenção de re-renders desnecessários

### 📱 Mobile-First
- **Progressive Enhancement**: Funciona sem JavaScript
- **Touch-Friendly**: Áreas de toque adequadas
- **Network Aware**: Otimizado para conexões móveis

## 🌊 Sobre a TSUNAMI Guild

Uma das guilds mais poderosas e organizadas de Throne and Liberty, focada em:

- 🗡️ **PvP Competitivo**: Conquista e defesa de territórios
- 🏰 **Raids Coordenadas**: Eventos semanais organizados
- 👥 **Comunidade Ativa**: Discord 24/7 com 150+ membros
- 📈 **Crescimento Mútuo**: Suporte e desenvolvimento conjunto
- 🏆 **Rankings**: Consistentemente TOP 3 no servidor

### Estatísticas da Guild
- **Membros Ativos**: 150+
- **Territórios Controlados**: 25+
- **Rank no Servidor**: TOP 3
- **Tempo de Atividade**: Desde o lançamento

## 🎯 Próximas Funcionalidades

- [ ] **PWA**: Transformar em Progressive Web App
- [ ] **Dark Mode**: Toggle de tema claro/escuro
- [ ] **Internationalization**: Suporte a múltiplos idiomas
- [ ] **Analytics**: Tracking de conversões e uso
- [ ] **API Integration**: Conexão com dados do jogo
- [ ] **Real-time Updates**: WebSockets para notificações

## 🧪 Testes

Para testar a responsividade:

1. **Chrome DevTools**: F12 → Toggle device mode
2. **Breakpoints**: Teste em 320px, 640px, 768px, 1024px, 1280px
3. **Orientação**: Portrait e landscape em tablets
4. **Touch**: Simule eventos de toque
5. **Network**: Teste em conexões lentas

## 📸 Screenshots

### Desktop
- Hero section com elementos flutuantes
- Navegação horizontal
- Layout em múltiplas colunas

### Mobile
- Menu hambúrguer funcional
- Cards empilhados
- Formulário otimizado para touch

---

**Desenvolvido com 💙 para a comunidade gaming brasileira**

**Para a glória! Para a TSUNAMI! 🌊⚔️**
