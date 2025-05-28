#!/usr/bin/env pwsh
# deploy.ps1 - Script para facilitar o deploy para GitHub Pages

Write-Host "🌊 Iniciando deploy da TSUNAMI Guild Platform..." -ForegroundColor Cyan

# Garante que estamos na branch main
git checkout main
if (!$?) {
    Write-Host "❌ Erro ao mudar para a branch main" -ForegroundColor Red
    exit 1
}

# Puxa as últimas alterações
Write-Host "📥 Atualizando repositório..." -ForegroundColor Yellow
git pull
if (!$?) {
    Write-Host "❌ Erro ao atualizar o repositório" -ForegroundColor Red
    exit 1
}

# Instala dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
pnpm install
if (!$?) {
    Write-Host "❌ Erro ao instalar dependências" -ForegroundColor Red
    exit 1
}

# Faz o build para GitHub Pages
Write-Host "🔨 Construindo aplicação para produção..." -ForegroundColor Yellow
pnpm build:gh-pages
if (!$?) {
    Write-Host "❌ Erro ao construir a aplicação" -ForegroundColor Red
    exit 1
}

# Copia os assets de armas
Write-Host "🖼️ Copiando assets de armas..." -ForegroundColor Yellow
pnpm copy-weapon-assets
if (!$?) {
    Write-Host "❌ Erro ao copiar assets de armas" -ForegroundColor Red
    exit 1
}

# Inicia o workflow de GitHub Actions (se estiver configurado)
Write-Host "🚀 Fazendo commit e push para iniciar o deployment..." -ForegroundColor Yellow
git add .
git commit -m "Build: Atualização para deploy"
git push

Write-Host "✅ Deploy iniciado com sucesso!" -ForegroundColor Green
Write-Host "O GitHub Actions irá processar o deploy. Verifique o status em https://github.com/SEU_USUARIO/tsunami-guild-platform/actions"
