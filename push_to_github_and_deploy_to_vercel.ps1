# Push to GitHub and Deploy to Vercel Script

Write-Host "1. Staging changes..." -ForegroundColor Cyan
git add .

Write-Host "2. Committing changes..." -ForegroundColor Cyan
git commit -m "Fix JSX errors in ProductDetails"

Write-Host "3. Pushing changes to GitHub branch 'feature/frontend-deployment'..." -ForegroundColor Cyan
git push origin feature/frontend-deployment

Write-Host "4. Changing directory to client project..." -ForegroundColor Cyan
cd client/vite-project

Write-Host "5. Deploying to Vercel..." -ForegroundColor Cyan
npx vercel --prod
