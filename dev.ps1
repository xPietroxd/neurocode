Write-Host "=== INICIANDO AMBIENTE DE DESENVOLVIMENTO ===" -ForegroundColor Cyan
Write-Host "Iniciando Backend (FastAPI) na porta 8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; .\.venv\Scripts\Activate.ps1; uvicorn app.main:app --reload --port 8000"
Start-Sleep -Seconds 3
Write-Host "Iniciando Frontend (Next.js) na porta 3000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev"
Write-Host "Acesse: http://localhost:3000" -ForegroundColor Cyan
