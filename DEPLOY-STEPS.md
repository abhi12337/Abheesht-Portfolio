# 🚀 Quick Deployment Steps

## Step 1: Login to Vercel

Run this command:
```powershell
vercel login
```

This will:
1. Open your browser
2. Ask you to login with GitHub, GitLab, or Email
3. Confirm the login in the terminal

## Step 2: Deploy

After successful login, run:
```powershell
vercel
```

Follow the prompts:
- Set up and deploy? → **yes**
- Which scope? → Choose your account
- Link to existing project? → **no** (first time)
- What's your project's name? → Press Enter (use default) or type a name
- In which directory is your code located? → Press Enter (use ./)
- Want to override the settings? → **no**

## Step 3: Deploy to Production

Once the preview deploy works, run:
```powershell
vercel --prod
```

## 🎉 Done!

Your portfolio will be live at:
`https://your-project-name.vercel.app`

---

## Alternative: If you prefer using the Dashboard

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Click "Continue with GitHub" 
5. You'll need to push your code to GitHub first:

```powershell
git init
git add .
git commit -m "Initial commit"
# Create a new repo on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

6. Then import the repo from Vercel dashboard
7. Click "Deploy"

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- If you get stuck, you can also deploy to Netlify instead!
