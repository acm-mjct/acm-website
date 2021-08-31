@echo off
 echo Starting...
:A
node --trace-warnings server/index.js
npm start
goto :A
