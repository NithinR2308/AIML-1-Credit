@echo off
echo ========================================
echo    PORTFOLIO LOCAL SERVER STARTER
echo ========================================
echo.
echo This will start your portfolio on localhost
echo.
echo Press any key to continue...
pause >nul

echo.
echo Checking for Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found!
    echo.
    echo Please install Node.js first:
    echo 1. Go to: https://nodejs.org/
    echo 2. Download the LTS version
    echo 3. Install it
    echo 4. Restart this command prompt
    echo 5. Run this batch file again
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo ✅ Node.js found!
echo.

cd /d "%~dp0"

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies!
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

echo.
echo ✅ Dependencies installed!
echo.
echo Starting server...
echo.
echo ========================================
echo    SERVER STARTING...
echo ========================================
echo.
echo Your portfolio will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
npm start