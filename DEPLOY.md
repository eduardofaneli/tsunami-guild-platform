# 🚀 TSUNAMI Guild Platform - Deploy Guide

## 🌐 GitHub Pages Setup

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### 📋 Pré-requisitos Completados

✅ **Workflow GitHub Actions** configurado (`.github/workflows/deploy.yml`)  
✅ **Vite config** otimizado para GitHub Pages  
✅ **Build scripts** específicos para produção  
✅ **Dependências** instaladas e testadas  

### 🔧 Configuração Manual no GitHub

Para ativar o GitHub Pages, siga estes passos:

1. **Acesse as Configurações do Repositório**:
   - Vá para `https://github.com/[SEU_USERNAME]/tsunami-guild-platform/settings`

2. **Configure GitHub Pages**:
   - No menu lateral, clique em "**Pages**"
   - Em "**Source**", selecione "**GitHub Actions**"
   - Salve as configurações

3. **Execute o Deploy**:
   - O deploy será executado automaticamente no próximo push
   - Ou execute manualmente em "**Actions**" → "**Deploy to GitHub Pages**" → "**Run workflow**"

### 🌐 URLs do Site

Após o deploy, o site estará disponível em:
- **Produção**: `https://[SEU_USERNAME].github.io/tsunami-guild-platform/`
- **Local**: `http://localhost:5173/`

### 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento local
pnpm dev

# Build para GitHub Pages
pnpm build:gh-pages

# Preview do build local
pnpm preview:gh-pages

# Build padrão
pnpm build

# Preview padrão
pnpm preview
```

### 🔍 Verificação do Deploy

Após configurar, você pode:

1. **Verificar o Status**:
   - Acesse a aba "**Actions**" do repositório
   - Veja o progresso do workflow "Deploy to GitHub Pages"

2. **Testar o Site**:
   - Aguarde o deploy concluir (geralmente 2-5 minutos)
   - Acesse a URL gerada pelo GitHub Pages

### 🐛 Troubleshooting

#### Deploy Falhou?
- Verifique as permissões em Settings → Actions → General
- Certifique-se que "Read and write permissions" estão habilitadas

#### Site não Carrega?
- Aguarde alguns minutos para propagação
- Verifique se a base path está correta no `vite.config.ts`

#### Erros de Build?
- Execute `pnpm build:gh-pages` localmente
- Verifique os logs na aba Actions do GitHub

### 📁 Estrutura de Deploy

```
.github/
└── workflows/
    └── deploy.yml          # Workflow de deploy automático

dist/                       # Pasta de build (gerada automaticamente)
├── index.html             # Página principal
├── assets/                # CSS, JS e outros assets
└── ...

vite.config.ts             # Configuração otimizada para GH Pages
package.json               # Scripts de build específicos
```

### 🚀 Deploy Automático

O deploy acontece automaticamente quando:
- ✅ Há push na branch `main`
- ✅ Workflow é executado manualmente
- ✅ Build é bem-sucedido
- ✅ Artefatos são enviados para GitHub Pages

---

**🌊 Para a glória! Para a TSUNAMI! 🌊⚔️**
