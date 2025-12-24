# Quick Setup Guide for GitHub & npm

Follow these steps to publish your package:

## 🚀 Quick Start Commands

### 1. Update package.json

**IMPORTANT:** Before proceeding, update these fields in `package.json`:

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/react-smart-hooks.git"
  },
  "homepage": "https://github.com/YOUR_USERNAME/react-smart-hooks#readme",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/react-smart-hooks/issues"
  }
}
```

Replace `YOUR_USERNAME` with your GitHub username!

---

### 2. Initialize Git & Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: react-smart-hooks - A collection of reusable React hooks"

# Create GitHub repository first at: https://github.com/new
# Then add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/react-smart-hooks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### 3. Publish to npm

```bash
# Login to npm (create account at npmjs.com if needed)
npm login

# Check if package name is available
npm search react-smart-hooks

# Build the package
npm run build

# Test publish (dry run)
npm publish --dry-run

# Publish to npm
npm publish
```

**Note:** If package name `react-smart-hooks` is taken, use:
- Scoped: `@yourusername/react-smart-hooks` (requires `npm publish --access public`)
- Or change name in package.json

---

## ✅ Verification

After publishing:

1. **GitHub**: Check https://github.com/YOUR_USERNAME/react-smart-hooks
2. **npm**: Check https://www.npmjs.com/package/react-smart-hooks
3. **Test install**: `npm install react-smart-hooks`

---

## 📝 Next Steps

1. Add badges to README.md (see PUBLISHING.md)
2. Create GitHub release (v1.0.0)
3. Add topics to GitHub repo
4. Share on social media!

See `PUBLISHING.md` for detailed instructions.


