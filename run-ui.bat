@echo off
REM Helper script to run the UI (Windows Command Prompt)
REM Usage: run-ui.bat

echo Starting Deep Learning UI...

REM Add Node.js to PATH for this session
set "PATH=C:\Program Files\nodejs;%PATH%"

REM Navigate to UI directory
cd /d "%~dp0ui"

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing npm dependencies...
    call npm install
)

REM Start dev server
echo Starting Vite dev server...
call npm run dev
