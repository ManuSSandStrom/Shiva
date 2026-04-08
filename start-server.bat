@echo off
cd /d "%~dp0"
echo Starting local card server...
echo Open http://127.0.0.1:8000/Shiva after you see "Serving on"
echo.
node server.js
echo.
echo Server stopped or failed to start.
pause
