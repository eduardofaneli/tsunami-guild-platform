# Script para baixar os ícones das armas do CDN
$destFolder = "d:\tsunami\public\assets\weapons"

# Criar pasta se não existir
if (-not (Test-Path -Path $destFolder)) {
    New-Item -Path $destFolder -ItemType Directory -Force
}

# Lista de armas para baixar
$weapons = @("crossbow", "daggers", "greatsword", "longbow", "spear", "staff", "sword", "wand")

# URL base do CDN
$baseUrl = "https://eduardofaneli.github.io/cdn-assets/images/tl/weapons"

# Baixar cada arma
foreach ($weapon in $weapons) {
    $url = "$baseUrl/$weapon.webp"
    $destination = "$destFolder\$weapon.webp"
    
    Write-Host "Baixando $url para $destination..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $destination
        Write-Host "Download concluído: $weapon.webp" -ForegroundColor Green
    } catch {
        Write-Host "Erro ao baixar $weapon.webp: $_" -ForegroundColor Red
    }
}

Write-Host "Todos os downloads concluídos!" -ForegroundColor Cyan
