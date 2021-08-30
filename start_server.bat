@echo off
 echo Starting...
:A
node --trace-warnings server/index.js
goto :A


if /p input= 
pause