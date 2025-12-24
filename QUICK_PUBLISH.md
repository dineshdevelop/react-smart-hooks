# 🚀 Quick Publish Guide

## Step-by-Step Instructions

### ⚠️ STEP 1: Update package.json (REQUIRED)

Open `package.json` and update these fields:

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_GITHUB_USERNAME/react-smart-hooks.git"
  },
  "homepage": "https://github.com/YOUR_GITHUB_USERNAME/react-smart-hooks#readme",
  "bugs": {
    "url": "https://github.com/YOUR_GITHUB_USERNAME/react-smart-hooks/issues"
  }
}
```

**Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username!**

---

### 📦 STEP 2: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `react-smart-hooks`
3. Description: `A collection of reusable React hooks for React and Next.js projects`
4. Choose: **Public**
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click **"Create repository"**
7. Copy the repository URL

---

### 🐙 STEP 3: Push to GitHub

Run these commands in your terminal:

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: react-smart-hooks package

- 5 essential React hooks (useDebounce, useLocalStorage, useWindowSize, usePrevious, useCopyToClipboard)
- Full test coverage (92%+)
- TypeScript support
- SSR safe for Next.js
- Complete documentation and examples"

# Add your GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/react-smart-hooks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### 📤 STEP 4: Publish to npm

#### 4.1 Create npm Account (if needed)
- Go to: https://www.npmjs.com/signup
- Create account and verify email

#### 4.2 Login to npm
```bash
npm login
```

#### 4.3 Check Package Name
```bash
npm search react-smart-hooks
```

If name is taken, you have 2 options:

**Option A: Use Scoped Package**
- Change name in package.json to: `@yourusername/react-smart-hooks`
- Then publish with: `npm publish --access public`

**Option B: Use Different Name**
- Change name in package.json to something unique

#### 4.4 Build & Publish
```bash
# Build the package
npm run build

# Test publish (dry run - doesn't actually publish)
npm publish --dry-run

# Actually publish
npm publish
```

**For scoped packages:**
```bash
npm publish --access public
```

---

### ✅ STEP 5: Verify

1. **GitHub**: https://github.com/YOUR_USERNAME/react-smart-hooks
2. **npm**: https://www.npmjs.com/package/react-smart-hooks
3. **Test**: `npm install react-smart-hooks`

---

### 🎉 STEP 6: Update README Badges

After publishing, update the badges in README.md:

Replace `YOUR_USERNAME` in the badge URLs:
```markdown
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/react-smart-hooks)](https://github.com/YOUR_USERNAME/react-smart-hooks)
```

---

### 📝 STEP 7: Create GitHub Release

1. Go to your repo → **Releases** → **Create a new release**
2. Tag: `v1.0.0`
3. Title: `v1.0.0 - Initial Release`
4. Description:
```markdown
## 🎉 Initial Release

### Features
- ✅ useDebounce - Debounce values with configurable delay
- ✅ useLocalStorage - Sync state with localStorage (SSR safe)
- ✅ useWindowSize - Track window dimensions
- ✅ usePrevious - Get previous value
- ✅ useCopyToClipboard - Copy text to clipboard

### Stats
- 📦 5 essential hooks
- ✅ 92%+ test coverage
- 🚀 Zero dependencies (only React peer dependency)
- 📚 Complete documentation
- 🎨 TypeScript support
```

5. Click **"Publish release"**

---

### 🔄 Updating Your Package

When you make changes:

```bash
# Update version
npm version patch  # 1.0.0 -> 1.0.1

# Build and test
npm run build
npm test

# Commit and push
git add .
git commit -m "v1.0.1: Description of changes"
git push

# Publish
npm publish
```

---

## 🆘 Troubleshooting

### "Package name already taken"
- Use scoped: `@yourusername/react-smart-hooks`
- Or choose different name

### "You do not have permission"
- Make sure you're logged in: `npm whoami`
- Check package name ownership

### Build fails
- Run: `npm install --legacy-peer-deps`
- Check Node.js version (>= 14)

---

## 📚 Additional Resources

- Full guide: See `PUBLISHING.md`
- Testing: See `TESTING.md`
- Quick start: See `QUICK_START.md`

---

**Good luck! 🚀**


