@echo off
cls
::::::::::::::::::::::::::::::::::::::::::::
:: Abdul Rahman's final revision elevated perms checker and requester
::  ; cscript "%temp%\getadmin.vbs" ""%~s0"" %*
::    ; will call for the current script to be ran elevated in a new window, given the vbscript exists.
set "KeepScript=y"
::::::::::::::::::::::::::::::::::::::::::::
:checkPrivileges
echo.
echo  // Checking for admin permissions...
NET FILE 1>NUL 2>NUL
if '%errorlevel%' == '0' ( echo This script has elevated permissions. & goto gotPrivileges ) else ( type nul & goto getPrivileges )
:getPrivileges
echo    // Requesting for elevated permissions... [UAC Prompt]
echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
echo For Each strArg in WScript.Arguments >> "%temp%\getadmin.vbs"
echo If strArg = WScript.Arguments.Item^(0^) Then d = Left^(strArg, InStrRev^(strArg,"\"^) - 1^) >> "%temp%\getadmin.vbs"
echo args = args ^& " " ^& strArg  >> "%temp%\getadmin.vbs"
echo Next >> "%temp%\getadmin.vbs"
echo UAC.ShellExecute "cmd.exe", ^("/c start /D """ ^& d ^& """ /B" ^& args ^& " ^& exit"^), , "runas", 4 >> "%temp%\getadmin.vbs"
cscript "%temp%\getadmin.vbs" ""%~s0"" %*
if %errorlevel% NEQ 0 ( echo. & echo ran into an issue whilst requesting for admin permissions. & color 0c & pause>nul ) else echo Success
if NOT defined KeepScript (del /q "%temp%\getadmin.vbs" && echo Deleted script )
exit /B
:gotPrivileges
::::::::::::::::::::::::::::::::::::::::::::
:: V3.3 https://github.com/legendhimslef
::::::::::::::::::::::::::::::::::::::::::::
title installer...
cls
WHERE npm install >nul
IF %ERRORLEVEL% NEQ 0 goto :nodeinstall


::::::::::::::::::::::::::::::::::::::::: Node.js installed.
cls
title Installing packages...
@echo on
npm install -d
@echo off
echo.
pause
exit 


::::::::::::::::::::::::::::::::::::::::: Node.js not installed.
:nodeinstall
cls
echo . %*
echo. 
echo  Node is not installed, it's needed^!
echo.
echo  I can automatically install it, but I'll install a lightweight package manager called chocolatey.
echo  Otherwise, you need to download and install Node.js, and open a terminal in the bot folder and type "npm install -d" without quotes.
echo    Note: I have not tested this so if you could comment on github if it works or not that'd be cool.
choice /N /C:YN /M "What do you say^? (YN)"
IF ERRORLEVEL ==1 GOTO MAKE
IF ERRORLEVEL ==2 GOTO NO

:NO
start "" https://nodejs.org/en/
exit

:MAKE
echo.
title Installing Chocolatey...
powershell Set-ExecutionPolicy AllSigned
powershell Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
title Preparing to continue...
echo @echo off>tmp.cmd
echo cls>>tmp.cmd
echo title Installing Node.js>>tmp.cmd
echo choco install nodejs-lts -y --force>>tmp.cmd
echo echo. >>tmp.cmd
echo echo  That should do it ^^^! >>tmp.cmd
echo echo. >>tmp.cmd
echo cscript "%temp%\getadmin.vbs" ""%CD%\tmp2.cmd"" ^%^*^>NUL >>tmp.cmd
echo echo. >>tmp.cmd
echo goto :eof>>tmp.cmd

echo @echo off>tmp2.cmd
echo cls>>tmp2.cmd
echo title Installing packages...>>tmp2.cmd
echo npm install -d>>tmp2.cmd
echo echo. >>tmp2.cmd
echo echo  Whoo ^^^! >>tmp2.cmd
echo echo. >>tmp2.cmd
echo pause>>tmp2.cmd
echo del "%temp%\getadmin.vbs">>tmp2.cmd
echo del /Q tmp.cmd>>tmp2.cmd
echo del /Q tmp2.cmd>>tmp2.cmd


cscript "%temp%\getadmin.vbs" ""%CD%\tmp.cmd""
echo.
exit