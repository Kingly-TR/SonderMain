# 🚀 Sonder Deployment Workflow

Quick reference guide for making changes to your website.

## 📍 Current Setup

- **Production Site**: https://www.sonder.business/ (connected to `main` branch)
- **Staging Branch**: `staging` (creates preview URLs)
- **Local Testing**: `npm run dev` (instant feedback)

---

## 🔄 Standard Workflow

### 1️⃣ Make Changes Safely

```bash
# Switch to staging branch
cd /Users/arhanoguz/Desktop/SonderMain/sonder
git checkout staging

# Make your changes in code editor
# ...edit files...

# Test locally (super fast!)
npm run dev
# → View at http://localhost:3000
```

### 2️⃣ Push to Staging for Preview

```bash
# Save your changes
git add .
git commit -m "Describe your changes here"
git push origin staging

# Vercel automatically creates a preview URL
# Check Vercel dashboard for the link (e.g., sonder-git-staging-xxx.vercel.app)
```

### 3️⃣ Test the Preview

- Open the Vercel preview URL
- Test thoroughly
- Share with others if needed
- **Production site (sonder.business) is NOT affected yet**

### 4️⃣ Deploy to Production

```bash
# Only when you're 100% ready!
git checkout main
git merge staging
git push origin main

# → Updates sonder.business in ~2 minutes
```

---

## ⚡ Quick Commands

| Task | Command |
|------|---------|
| Switch to staging | `git checkout staging` |
| Switch to main | `git checkout main` |
| Test locally | `npm run dev` |
| Save changes | `git add . && git commit -m "message"` |
| Push to staging | `git push origin staging` |
| Deploy to production | `git checkout main && git merge staging && git push origin main` |
| Check current branch | `git branch` |
| See what changed | `git status` |

---

## 🎯 Branch Strategy

| Branch | Purpose | URL |
|--------|---------|-----|
| `staging` | Test changes before going live | `sonder-git-staging-xxx.vercel.app` |
| `main` | Production (live site) | `https://www.sonder.business/` |

---

## ✅ Best Practices

1. **Always test locally first** with `npm run dev`
2. **Always use staging branch** for changes
3. **Never push directly to main** (use staging → main merge)
4. **Test preview URL thoroughly** before merging
5. **Commit often** with clear messages

---

## 🆘 Emergency: Undo Changes

### If you pushed to staging by mistake:
```bash
git checkout staging
git reset --hard origin/main
git push origin staging --force
```

### If you pushed to main by mistake:
Go to Vercel dashboard → Deployments → Click previous good deployment → "Redeploy"

---

## 📝 Example: Adding a New Feature

```bash
# 1. Switch to staging
git checkout staging

# 2. Make changes
# Edit src/components/hero.tsx

# 3. Test locally
npm run dev

# 4. Push to staging
git add .
git commit -m "Add new hero animation"
git push origin staging

# 5. Check Vercel preview URL
# Test thoroughly

# 6. Deploy to production
git checkout main
git merge staging
git push origin main
```

---

## 🔗 Useful Links

- **Production**: https://www.sonder.business/
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/Kingly-TR/SonderMain
- **Local Dev**: http://localhost:3000

---

## 💡 Tips

- Keep `npm run dev` running while developing for instant feedback
- Use meaningful commit messages
- Test on mobile and desktop
- Check both light and dark themes
- Preview URLs expire after 30 days of inactivity
