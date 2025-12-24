# 🔐 Enable 2FA to Publish Package

## ❌ Error You're Getting

```
npm error 403 Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

## ✅ Solution: Enable 2FA on npm

npm **requires** Two-Factor Authentication (2FA) to publish packages. Here's how to enable it:

---

## 📋 Step-by-Step: Enable 2FA

### STEP 1: Go to npm Account Settings

1. Visit: **https://www.npmjs.com/settings/dineshsharma07/profile**
2. Or go to: https://www.npmjs.com → Click your profile → Settings → Profile

### STEP 2: Enable Two-Factor Authentication

1. Scroll down to **"Two-Factor Authentication"** section
2. Click **"Enable 2FA"** or **"Edit"**
3. Choose one of these methods:

**Option A: Authenticator App (Recommended)**
- Use Google Authenticator, Authy, or Microsoft Authenticator
- Scan QR code with your phone
- Enter the 6-digit code to verify

**Option B: SMS**
- Enter your phone number
- Receive verification code via SMS
- Enter code to verify

### STEP 3: Re-login to npm CLI

After enabling 2FA, you need to login again:

```bash
npm logout
npm login
```

When logging in:
- Enter your username: `dineshsharma07`
- Enter your password
- Enter your 2FA code (from authenticator app or SMS)

---

## 🚀 After Enabling 2FA

Once 2FA is enabled and you're logged in:

```bash
# Verify you're logged in
npm whoami

# Publish your package
npm publish --access public
```

---

## 🔑 Alternative: Use Access Token

If you prefer not to use 2FA every time, you can create an access token:

### Create Access Token:

1. Go to: https://www.npmjs.com/settings/dineshsharma07/access-tokens
2. Click **"Generate New Token"**
3. Choose:
   - **Type**: "Granular Access Token"
   - **Name**: "react-smart-hooks-publish"
   - **Expiration**: Choose duration (or never)
   - **Permissions**: Select "Publish" for your package
4. Click **"Generate Token"**
5. **Copy the token** (you won't see it again!)

### Use Token to Login:

```bash
npm login --auth-type=legacy
```

When prompted:
- Username: `dineshsharma07`
- Password: `<paste your access token here>`
- Email: `your-email@example.com`

Then publish:
```bash
npm publish --access public
```

---

## ✅ Quick Summary

**Easiest Method:**
1. Enable 2FA on npm website
2. Run `npm logout` then `npm login`
3. Run `npm publish --access public`

**Alternative Method:**
1. Create access token on npm website
2. Login with token: `npm login --auth-type=legacy`
3. Run `npm publish --access public`

---

**After enabling 2FA, your package will publish successfully!** 🎉

