# Quick Deploy Scripts

## Deploy to Vercel

# Install Vercel CLI (if not already installed)
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Cyan
    npm install -g vercel
}

# Deploy
Write-Host "Deploying to Vercel..." -ForegroundColor Green
vercel --prod
