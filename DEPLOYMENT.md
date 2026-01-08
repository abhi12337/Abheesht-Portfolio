# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

---

## Deploy to Netlify

### Option 1: Using Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

4. Deploy to production:
```bash
netlify deploy --prod
```

### Option 2: Using Netlify Dashboard

1. Build your project locally:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify

### Option 3: Connect to GitHub

1. Push your code to GitHub (see steps above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Settings will be auto-detected from `netlify.toml`
6. Click "Deploy site"

---

## Quick Deploy Commands

### For Vercel:
```bash
# Install and deploy in one go
npm install -g vercel && vercel --prod
```

### For Netlify:
```bash
# Install and deploy in one go
npm install -g netlify-cli && netlify deploy --prod
```

---

## Environment Variables

If you need to add environment variables:

**Vercel:**
- Go to Project Settings → Environment Variables
- Add your variables

**Netlify:**
- Go to Site Settings → Build & Deploy → Environment
- Add your variables

---

## Custom Domain

Both platforms allow you to add custom domains:

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records as instructed

---

## Continuous Deployment

Both platforms support automatic deployments:
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments
- Rollback to previous deployments anytime

---

## 🎉 Your site will be live at:
- **Vercel:** `https://your-project-name.vercel.app`
- **Netlify:** `https://your-project-name.netlify.app`
