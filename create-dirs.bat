@echo off
cd /d "c:\MY CODE\my codingan\Web Barber"

echo Creating directory structure...
echo.

mkdir src\components\ui
mkdir src\components\layout
mkdir src\components\sections
mkdir src\constants
mkdir src\utils
mkdir src\hooks
mkdir public

echo.
echo Directory structure created successfully!
echo.
echo Verifying directory structure:
echo ================================
echo.
tree
