# How to Deploy Your Portfolio to GitHub Pages

## Quick Deploy Steps

1. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Update portfolio with new design and resume data"
   ```

2. **Build and deploy:**

   ```bash
   npm run deploy
   ```

   This command will:

   - Build your React app (creates a `build` folder)
   - Deploy it to the `gh-pages` branch automatically
   - Make your site live at **https://sragvivadali.github.io**

3. **Wait 1-5 minutes** for GitHub Pages to update, then visit:
   **https://sragvivadali.github.io**

---

## 📋 Detailed Instructions

### Initial Setup (One-Time):

**GitHub Pages Configuration:**

1. Go to: https://github.com/sragvivadali/sragvivadali.github.io
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", set to **"Deploy from a branch"**
4. Branch should be **`gh-pages`** (created automatically by `npm run deploy`)
5. Click **Save**

_(If `gh-pages` branch doesn't exist yet, `npm run deploy` will create it)_

### Every Time You Want to Update Your Site:

1. **Make your code changes** (already done ✓)

2. **Test locally (optional):**

   ```bash
   npm run build
   npm start
   ```

   Open http://localhost:3000 to preview

3. **Commit and push your changes:**

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

4. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

5. **Wait 1-5 minutes** and refresh: **https://sragvivadali.github.io**

---

## 🔧 Troubleshooting

**If deployment fails:**

- Make sure you're logged into GitHub from terminal:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

**If you don't see updates:**

- Wait 5-10 minutes (GitHub Pages can be slow)
- Hard refresh your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear browser cache

**If build fails:**

- Make sure all dependencies are installed:
  ```bash
  npm install --legacy-peer-deps
  ```

**Check deployment status:**

- Go to your repository → **Actions** tab
- Look for the "gh-pages" deployment workflow

---

## 📦 What Gets Deployed?

- **`gh-pages` branch**: Contains only the compiled/built files from the `build/` folder
- **`main` branch**: Contains your source code
- **GitHub Pages**: Automatically serves files from the `gh-pages` branch

Your source code stays on `main`, and GitHub Pages serves the built version from `gh-pages`.

---

## 🎯 Next Steps Right Now

Run these commands in order:

```bash
# 1. Add all your changes
git add .

# 2. Commit your changes
git commit -m "Update portfolio with new design and resume data"

# 3. Push to GitHub
git push origin main

# 4. Deploy to GitHub Pages
npm run deploy
```

After step 4, wait a few minutes and visit: **https://sragvivadali.github.io** 🎉
