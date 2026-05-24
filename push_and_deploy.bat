@echo off
echo ===================================================
echo  Pushing to GitHub and Deploying to Vercel
echo ===================================================
echo.

echo 1. Staging changes...
git add .
if %errorlevel% neq 0 (
    echo Error: git add failed.
    pause
    exit /b %errorlevel%
)

echo 2. Committing changes...
git commit -m "Fix JSX errors in ProductDetails"
if %errorlevel% neq 0 (
    echo Note: Nothing to commit or git commit failed.
)

echo 3. Pushing changes to GitHub branch 'feature/frontend-deployment'...
git push origin feature/frontend-deployment
if %errorlevel% neq 0 (
    echo Error: git push failed.
    pause
    exit /b %errorlevel%
)

echo 4. Changing directory to client project...
cd client\vite-project
if %errorlevel% neq 0 (
    echo Error: Could not change directory to client\vite-project.
    pause
    exit /b %errorlevel%
)

echo 5. Deploying to Vercel...
call npx vercel --prod
if %errorlevel% neq 0 (
    echo Error: Vercel deployment failed.
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo  Success! Code pushed to GitHub and deployed to Vercel.
echo ===================================================
pause
