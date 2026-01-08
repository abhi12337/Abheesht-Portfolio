# Quick Deploy Scripts

## Deploy to Netlify

# Install Netlify CLI (if not already installed)
if (!(Get-Command netlify -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Netlify CLI..." -ForegroundColor Cyan
    npm install -g netlify-cli
}

# Deploy
Write-Host "Deploying to Netlify..." -ForegroundColor Green
netlify deploy --prod
