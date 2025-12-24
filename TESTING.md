# Testing Guide for react-smart-hooks

This guide explains how to test the `react-smart-hooks` package.

## 🧪 Automated Testing (Jest)

### Setup

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Note: Use `--legacy-peer-deps` flag to handle peer dependency conflicts.

2. **Run all tests:**
   ```bash
   npm test
   ```

3. **Run tests in watch mode:**
   ```bash
   npm run test:watch
   ```

4. **Run tests with coverage:**
   ```bash
   npm run test:coverage
   ```

### Test Files

All test files are located in `src/__tests__/`:

- `useDebounce.test.js` - Tests for debounce hook
- `useLocalStorage.test.js` - Tests for localStorage hook
- `useWindowSize.test.js` - Tests for window size hook
- `usePrevious.test.js` - Tests for previous value hook
- `useCopyToClipboard.test.js` - Tests for clipboard hook

### What's Tested

✅ **useDebounce**
- Initial value handling
- Debounce delay functionality
- Rapid value changes
- Default delay value

✅ **useLocalStorage**
- Initial value handling
- Reading from localStorage
- Writing to localStorage
- Function updates
- Object and array handling

✅ **useWindowSize**
- Window dimension tracking
- Resize event handling
- Event listener cleanup

✅ **usePrevious**
- Undefined on first render
- Previous value tracking
- String, object, and null handling

✅ **useCopyToClipboard**
- Successful copy operations
- Error handling
- Clipboard API availability
- Auto-reset after 2 seconds

---

## 🎨 Manual Testing (Demo App)

### Setup Demo App

1. **Navigate to demo directory:**
   ```bash
   cd demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the demo app:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

### What to Test

#### 1. **useDebounce**
- Type in the search input
- Notice the debounced value updates after 500ms
- Check browser console for debounced search logs

#### 2. **useLocalStorage**
- Enter your name in the input
- Refresh the page - name should persist
- Toggle theme - refresh page to verify persistence
- Clear name button should work

#### 3. **useWindowSize**
- Resize your browser window
- Watch width and height update in real-time
- Check device indicator (Mobile/Tablet/Desktop)
- Test at different breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: >= 1024px

#### 4. **usePrevious**
- Click Increment/Decrement buttons
- Watch previous count value update
- Reset button should work correctly

#### 5. **useCopyToClipboard**
- Enter text in the input
- Click "Copy to Clipboard" button
- Paste somewhere (Ctrl+V / Cmd+V) to verify
- Button should show "✅ Copied!" for 2 seconds
- Test with different text values

---

## 🚀 Quick Test Commands

```bash
# Run all automated tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run demo app for manual testing
cd demo && npm start
```

---

## 📊 Coverage Goals

Aim for:
- **Line Coverage:** > 90%
- **Function Coverage:** > 90%
- **Branch Coverage:** > 85%

Check coverage by running:
```bash
npm run test:coverage
```

Then open `coverage/lcov-report/index.html` in your browser.

---

## 🐛 Debugging Tests

If tests fail:

1. **Check Jest configuration:**
   - Verify `jest.config.js` is correct
   - Check `jest.setup.js` for mocks

2. **Check test environment:**
   - Ensure `jsdom` is set as test environment
   - Verify React Testing Library is installed

3. **Run individual test file:**
   ```bash
   npm test -- useDebounce.test.js
   ```

4. **Run with verbose output:**
   ```bash
   npm test -- --verbose
   ```

---

## ✅ Pre-Publish Checklist

Before publishing to npm:

- [ ] All tests pass (`npm test`)
- [ ] Coverage is above 90%
- [ ] Demo app works correctly
- [ ] All hooks tested manually
- [ ] No console errors or warnings
- [ ] Build succeeds (`npm run build`)

---

Happy Testing! 🎉

