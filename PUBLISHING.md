# Publishing Guide - react-smart-hooks

This guide will help you publish your package to GitHub and npm.

## 📋 Pre-Publishing Checklist

- [x] All tests passing (`npm test`)
- [x] Build works (`npm run build`)
- [x] README.md is complete
- [x] LICENSE file exists
- [x] package.json has correct information
- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] npm account created

---

## 🚀 Step 1: Prepare package.json

Update these fields in `package.json`:

1. **author** - Your name/email
2. **repository.url** - Your GitHub repo URL
3. **homepage** (optional) - GitHub pages URL
4. **bugs** (optional) - Issues URL

Example:
```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/react-smart-hooks.git"
  },
  "homepage": "https://github.com/yourusername/react-smart-hooks#readme",
  "bugs": {
    "url": "https://github.com/yourusername/react-smart-hooks/issues"
  }
}
```

---

## 📦 Step 2: Build the Package

Before publishing, build the package:

```bash
npm run build
```

This creates the `dist/` folder with compiled code.

---

## 🐙 Step 3: Push to GitHub

### 3.1 Initialize Git Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: react-smart-hooks package"

# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/react-smart-hooks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `react-smart-hooks`
3. Description: "A collection of reusable React hooks for React and Next.js projects"
4. Choose Public or Private
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"
7. Copy the repository URL and update `package.json`

---

## 📤 Step 4: Publish to npm

### 4.1 Create npm Account

If you don't have an npm account:
1. Go to https://www.npmjs.com/signup
2. Create an account
3. Verify your email

### 4.2 Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if 2FA enabled)

### 4.3 Check Package Name Availability

```bash
npm search react-smart-hooks
```

If the name is taken, you'll need to change it in `package.json`:
- Option 1: Use scoped package: `@yourusername/react-smart-hooks`
- Option 2: Use different name: `react-smart-hooks-yourname`

### 4.4 Publish to npm

```bash
# Dry run (test without publishing)
npm publish --dry-run

# Publish to npm
npm publish
```

**For scoped packages** (if using `@yourusername/react-smart-hooks`):
```bash
npm publish --access public
```

### 4.5 Verify Publication

1. Check your package: https://www.npmjs.com/package/react-smart-hooks
2. Test installation: `npm install react-smart-hooks`

---

## 🔄 Step 5: Updating the Package

When you make changes:

1. **Update version** in `package.json`:
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1 (bug fixes)
   npm version minor  # 1.0.0 -> 1.1.0 (new features)
   npm version major  # 1.0.0 -> 2.0.0 (breaking changes)
   ```

2. **Build and test**:
   ```bash
   npm run build
   npm test
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "v1.0.1: Add new feature"
   git push
   ```

4. **Publish**:
   ```bash
   npm publish
   ```

---

## 📝 Step 6: Add Badges to README

Add these badges to the top of your README.md:

```markdown
![npm version](https://img.shields.io/npm/v/react-smart-hooks)
![npm downloads](https://img.shields.io/npm/dm/react-smart-hooks)
![GitHub stars](https://img.shields.io/github/stars/yourusername/react-smart-hooks)
![License](https://img.shields.io/npm/l/react-smart-hooks)
```

---

## ✅ Post-Publishing

1. **Add GitHub Topics**: 
   - Go to your repo → Settings → Topics
   - Add: `react`, `hooks`, `nextjs`, `typescript`, `javascript`

2. **Create Release**:
   - Go to Releases → Create a new release
   - Tag: `v1.0.0`
   - Title: `v1.0.0 - Initial Release`
   - Description: List features

3. **Share**:
   - Post on Twitter/LinkedIn
   - Share in React communities
   - Add to your portfolio

---

## 🐛 Troubleshooting

### "Package name already taken"
- Use scoped package: `@yourusername/react-smart-hooks`
- Or choose different name

### "You do not have permission"
- Make sure you're logged in: `npm whoami`
- Check package name ownership

### "Invalid package name"
- Package name must be lowercase
- No spaces or special characters (except `-` and `_`)

### Build fails
- Run `npm install --legacy-peer-deps` first
- Check Node.js version (should be >= 14)

---

## 📚 Useful Commands

```bash
# Check npm login status
npm whoami

# View package info
npm view react-smart-hooks

# Unpublish (within 72 hours only)
npm unpublish react-smart-hooks@1.0.0

# Check package size
npm pack --dry-run
```

---

Good luck with your publication! 🎉


