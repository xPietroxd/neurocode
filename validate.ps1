Write-Host "=== VALIDAÇÃO NEUROCODE ===" -ForegroundColor Cyan
 = 0
 = @("frontend\package.json", "backend\requirements.txt", "backend\app\main.py", "scripts\setup.ps1")
foreach ( in ) {
    if (Test-Path ) { Write-Host "[OK] " -ForegroundColor Green }
    else { Write-Host "[ERRO]  ausente" -ForegroundColor Red; ++ }
}
if ( -eq 0) { Write-Host "=== VALIDAÇÃO CONCLUÍDA COM SUCESSO ===" -ForegroundColor Green }
