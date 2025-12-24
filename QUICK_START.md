# Quick Start Guide - Testing react-smart-hooks

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

**Note:** Use `--legacy-peer-deps` to handle peer dependency conflicts with React.

### 2. Run Automated Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### 3. Run Demo App (Manual Testing)

```bash
# Navigate to demo folder
cd demo

# Install demo dependencies
npm install

# Start the demo app
npm start
```

The demo app will open at `http://localhost:3000` automatically.

---

## 📋 What Gets Tested?

### Automated Tests (Jest)
- ✅ useDebounce - Debounce functionality
- ✅ useLocalStorage - localStorage sync
- ✅ useWindowSize - Window resize tracking
- ✅ usePrevious - Previous value tracking
- ✅ useCopyToClipboard - Clipboard operations

### Manual Tests (Demo App)
- 🎨 Visual testing of all hooks
- 🔄 Interactive examples
- 📱 Responsive behavior
- 💾 localStorage persistence
- 📋 Clipboard functionality

---

## 🎯 Test Commands Cheat Sheet

```bash
# All tests
npm test

# Watch mode (auto-rerun on changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Demo app
cd demo && npm start
```

---

## ✅ Expected Results

### Automated Tests
- All 5 test suites should pass
- Coverage should be > 90%
- No console errors

### Demo App
- All 5 hooks should work correctly
- No console errors
- Responsive design works
- localStorage persists on refresh

---

## 🐛 Troubleshooting

**Tests failing?**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be >= 14)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Demo app not starting?**
- Navigate to demo folder: `cd demo`
- Install dependencies: `npm install`
- Check if port 3000 is available

**Coverage not generating?**
- Run: `npm run test:coverage`
- Check `coverage/` folder
- Open `coverage/lcov-report/index.html` in browser

---

Happy Testing! 🎉

