@echo off
REM React Smart Hooks - Publishing Script for Windows
REM Make sure to update YOUR_GITHUB_USERNAME in package.json first!

echo.
echo 🚀 React Smart Hooks - Publishing Helper
echo ==========================================
echo.

REM Check if package.json has been updated
findstr /C:"YOUR_GITHUB_USERNAME" /C:"YOUR_USERNAME" package.json >nul
if %errorlevel% equ 0 (
    echo ⚠️  WARNING: Please update package.json with your GitHub username first!
    echo    Edit package.json and replace YOUR_GITHUB_USERNAME with your actual username
    echo.
    pause
    exit /b 1
)

echo ✅ Step 1: Checking build...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Fix errors before publishing.
    pause
    exit /b 1
)

echo.
echo ✅ Step 2: Running tests...
call npm test
if %errorlevel% neq 0 (
    echo ❌ Tests failed! Fix errors before publishing.
    pause
    exit /b 1
)

echo.
echo 📋 Next Steps:
echo ==============
echo.
echo 1. Create GitHub repository at: https://github.com/new
echo    - Name: react-smart-hooks
echo    - Description: A collection of reusable React hooks for React and Next.js projects
echo    - Public
echo    - DON'T initialize with README
echo.
echo 2. Push to GitHub:
echo    git remote add origin https://github.com/YOUR_USERNAME/react-smart-hooks.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Login to npm:
echo    npm login
echo.
echo 4. Publish to npm:
echo    npm publish --dry-run  # Test first
echo    npm publish             # Actually publish
echo.
echo For scoped packages (@username/react-smart-hooks):
echo    npm publish --access public
echo.
pause

