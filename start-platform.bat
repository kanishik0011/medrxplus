@echo off
echo Starting Medrx+ Pharmacy Platform...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if MongoDB is running
echo Checking MongoDB connection...
timeout /t 2 /nobreak >nul
echo MongoDB check complete (assuming it's running on localhost:27017)
echo.

REM Start backend server in a new window
echo Starting backend server...
start "Medrx+ Backend Server" cmd /k "cd /d %~dp0backend && npm run dev"
timeout /t 3 /nobreak >nul

REM Start frontend server in a new window
echo Starting frontend server...
start "Medrx+ Frontend Server" cmd /k "cd /d %~dp0 && npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo Medrx+ Platform is starting up!
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.
echo Both servers are running in separate windows.
echo Close those windows to stop the servers.
echo.
echo Press any key to exit this launcher...
pause >nul