@echo off
set BUILD_NAME=.\build\dolmenjs\
set DIST_NAME=.\dist\dolmenjs.js
set TEST_NAME=.\test\vendors\dolmenjs\dolmenjs-%date:~10,4%%date:~4,2%.js

if exist %BUILD_NAME% rmdir /s /q %BUILD_NAME%
if exist %DIST_NAME% del %DIST_NAME%
if exist %TEST_NAME% del %TEST_NAME%

call tsc
npx webpack --config webpack.config.js

copy %DIST_NAME% %TEST_NAME%

:: uglifyjs %DEST_NAME% -o %UGLY_NAME% -c -m
