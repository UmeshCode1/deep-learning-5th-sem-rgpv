# Helper script to run the UI with Node.js in PATH
# Usage: .\run-ui.ps1

Write-Host "Starting Deep Learning UI..." -ForegroundColor Cyan

# Add Node.js to PATH for this session
$env:Path = "C:\Program Files\nodejs;$env:Path"

# Navigate to UI directory
Set-Location -Path "$PSScriptRoot\ui"

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing npm dependencies..." -ForegroundColor Yellow
    npm install
}

# Start dev server
Write-Host "Starting Vite dev server..." -ForegroundColor Green
npm run dev
