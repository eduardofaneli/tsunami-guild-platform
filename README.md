# 🌊 TSUNAMI Guild Platform

Uma plataforma web moderna e elegante para a guild TSUNAMI do MMORPG **Throne and Liberty**. Esta Single Page Application (SPA) serve como ferramenta de apresentação e recrutamento para nossa poderosa guild.

## ✨ Características

- **Design Moderno**: Interface atrativa com tema gaming épico
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Fluidas**: Experiência visual impressionante com Framer Motion
- **Formulário de Candidatura**: Sistema completo para novos membros se candidatarem
- **Performance Otimizada**: Construído com Vite para carregamento ultra-rápido

## 🚀 Tech Stack

- **React 19** com **TypeScript** - Framework principal
- **Vite** - Build tool ultra-rápida
- **Styled Components** - Estilização com sistema de tema
- **Framer Motion** - Animações suaves e modernas
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Ícones modernos e consistentes

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd tsunami

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm dev
```

### Build para Produção
```bash
# Compile para produção
pnpm build

# Build para GitHub Pages
pnpm build:gh-pages
pnpm copy-weapon-assets # Copia os assets de armas para o build

# Preview da build
pnpm preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal/banner
│   ├── About.tsx       # Sobre a guild
│   ├── Contact.tsx     # Informações de contato
│   ├── ApplicationForm.tsx # Formulário de candidatura
│   └── Footer.tsx      # Rodapé
├── styles/             # Configurações de estilo
│   ├── theme.ts        # Sistema de tema
│   ├── GlobalStyles.ts # Estilos globais
│   └── styled.d.ts     # Tipos TypeScript para styled-components
└── App.tsx             # Componente principal
```

## 🎮 Sobre a Guild TSUNAMI

- **Jogo**: Throne and Liberty
- **Servidor**: Kazar (SA)
- **Ranking**: TOP 3
- **Membros**: 150+ ativos
- **Territórios**: 25+
- **Foco**: PvP, Raids, Conquista de Territórios

## 🎨 Sistema de Tema

O projeto utiliza um sistema de tema abrangente localizado em `src/styles/theme.ts`. Sempre use valores do tema em vez de valores hardcoded:

```typescript
// ✅ Correto
color: ${props => props.theme.colors.primary};
padding: ${props => props.theme.spacing.md};

// ❌ Evitar
color: #4c9aff;
padding: 16px;
```

## 📋 Funcionalidades Principais

### 🏠 Página Inicial
- Banner épico com estatísticas da guild
- Apresentação visual impactante
- Call-to-action para candidatura

### ℹ️ Sobre Nós
- Missão e valores da guild
- Conquistas e achievements
- Informações sobre atividades

### 📞 Contato
- Canais de comunicação (Discord)
- Horários de atividade
- Informações da liderança
- Requisitos para entrada

### 📝 Formulário de Candidatura
- Validação completa de campos
- Interface amigável e intuitiva
- Feedback visual em tempo real
- Tratamento de estado de envio

## 🎯 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Dashboard para membros
- [ ] Calendário de eventos
- [ ] Sistema de notificações
- [ ] Galeria de conquistas
- [ ] Integração com APIs do jogo

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a MIT License. Veja o arquivo `LICENSE` para detalhes.

## 🖼️ Gerenciamento de Assets

O projeto utiliza um sistema centralizado para gerenciar caminhos de assets entre ambientes de desenvolvimento e produção. Veja [`ASSET_PATHS.md`](ASSET_PATHS.md) para mais detalhes sobre:

- Estrutura de diretórios de assets
- Como usar o `assetService.ts`
- Configuração de base path
- Helper functions para assets comuns

## 🌊 Junte-se à TSUNAMI!

Interessado em fazer parte da nossa guild? Visite nossa plataforma e candidate-se hoje mesmo!

---

**Para a glória! Para a TSUNAMI! 🌊⚔️**
