Write-Host "=== CONFIGURANDO NEUROCODE ===" -ForegroundColor Cyan
if (!(Get-Command node -ErrorAction SilentlyContinue)) { Write-Host "ERRO: Node.js não instalado." -ForegroundColor Red; exit }
if (!(Get-Command python -ErrorAction SilentlyContinue)) { Write-Host "ERRO: Python não instalado." -ForegroundColor Red; exit }

Write-Host "1. Configurando Backend Python..." -ForegroundColor Yellow
Set-Location ..\backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install --upgrade pip
pip install -r requirements.txt
Set-Location ..

Write-Host "2. Configurando Frontend Node.js..." -ForegroundColor Yellow
Set-Location ..\frontend
npm install
Set-Location ..

Copy-Item ".env.example" ".env" -Force
Write-Host "=== SETUP CONCLUÍDO ===" -ForegroundColor Green
