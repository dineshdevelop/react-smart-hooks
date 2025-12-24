# 🚀 Push to GitHub - Step by Step

## ⚠️ Current Issue
The Personal Access Token is being denied. It needs `repo` scope.

## ✅ Solution: Create New Token with Correct Permissions

### Step 1: Create New Token
1. Go to: **https://github.com/settings/tokens/new**
2. **Note**: `react-smart-hooks-push`
3. **Expiration**: Choose 90 days (or your preference)
4. **Select scopes**: 
   - ✅ **repo** (Full control of private repositories)
     - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Clear Old Credentials
```powershell
cmdkey /delete:LegacyGeneric:target=git:https://github.com
```

### Step 3: Push with New Token
```powershell
git remote set-url origin https://dineshdevelop:YOUR_NEW_TOKEN@github.com/dineshdevelop/react-smart-hooks.git
git push -u origin main
```

**Replace `YOUR_NEW_TOKEN` with the token you just created!**

---

## 🔄 Alternative: Use GitHub Desktop or Web Interface

If tokens aren't working:
1. **GitHub Desktop**: Install and login, then push from there
2. **Web Interface**: 
   - Go to: https://github.com/dineshdevelop/react-smart-hooks
   - Click "uploading an existing file"
   - Drag and drop your files

---

## ✅ Quick Command (After Creating New Token)

```powershell
# Replace YOUR_NEW_TOKEN with your actual token
git remote set-url origin https://dineshdevelop:YOUR_NEW_TOKEN@github.com/dineshdevelop/react-smart-hooks.git
git push -u origin main
```

---

**The token MUST have `repo` scope to push!** Create a new token with this permission.

