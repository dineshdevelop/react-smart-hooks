# react-smart-hooks 🚀

[![npm version](https://img.shields.io/npm/v/react-smart-hooks)](https://www.npmjs.com/package/react-smart-hooks)
[![npm downloads](https://img.shields.io/npm/dm/react-smart-hooks)](https://www.npmjs.com/package/react-smart-hooks)
[![License](https://img.shields.io/npm/l/react-smart-hooks)](https://github.com/YOUR_USERNAME/react-smart-hooks/blob/main/LICENSE)

A collection of reusable React hooks for React and Next.js projects. Lightweight, easy to use, and production-ready.

## ✨ Features

- 🎯 **5 Essential Hooks** - Common hooks used in every React project
- 📦 **Lightweight** - Minimal dependencies, maximum performance
- 🔄 **SSR Safe** - Works perfectly with Next.js server-side rendering
- 💪 **TypeScript Ready** - Full TypeScript support
- 🎨 **Zero Dependencies** - Only React as peer dependency

## 📦 Installation

```bash
npm install react-smart-hooks
# or
yarn add react-smart-hooks
# or
pnpm add react-smart-hooks
```

## 🎯 Available Hooks

### 1. `useDebounce`

Debounce a value to delay updates until after a specified delay.

```jsx
import { useDebounce } from 'react-smart-hooks';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // API call with debouncedSearchTerm
    if (debouncedSearchTerm) {
      fetchSearchResults(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

**Parameters:**
- `value` (any): The value to debounce
- `delay` (number, optional): Delay in milliseconds (default: 500)

**Returns:** The debounced value

---

### 2. `useLocalStorage`

Sync state with localStorage, automatically handling serialization and SSR.

```jsx
import { useLocalStorage } from 'react-smart-hooks';

function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
    </div>
  );
}
```

**Parameters:**
- `key` (string): The localStorage key
- `initialValue` (any): Initial value if key doesn't exist

**Returns:** `[storedValue, setValue]` - Similar to `useState`

---

### 3. `useWindowSize`

Track window dimensions for responsive design.

```jsx
import { useWindowSize } from 'react-smart-hooks';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <div>
      <p>Window size: {width} x {height}</p>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

**Returns:** `{ width: number, height: number }`

---

### 4. `usePrevious`

Get the previous value of a state or prop.

```jsx
import { usePrevious } from 'react-smart-hooks';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? 'N/A'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Parameters:**
- `value` (any): The value to track

**Returns:** The previous value (undefined on first render)

---

### 5. `useCopyToClipboard`

Copy text to clipboard with success/error states.

```jsx
import { useCopyToClipboard } from 'react-smart-hooks';

function CopyButton() {
  const [copied, copy, error] = useCopyToClipboard();

  const handleCopy = () => {
    copy('Text to copy to clipboard');
  };

  return (
    <div>
      <button onClick={handleCopy}>
        {copied ? '✅ Copied!' : '📋 Copy'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
```

**Returns:** `[copied: boolean, copy: Function, error: Error | null]`

---

## 🚀 Usage Examples

### Complete Example: Search with Debounce

```jsx
import { useState, useEffect } from 'react';
import { useDebounce } from 'react-smart-hooks';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      fetch(`/api/search?q=${debouncedQuery}`)
        .then(res => res.json())
        .then(data => setResults(data));
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Next.js Example: Theme Switcher with localStorage

```jsx
import { useLocalStorage } from 'react-smart-hooks';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

## 🔧 Requirements

- React >= 16.8.0 (hooks support)
- React DOM >= 16.8.0

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🧪 Testing

### Automated Tests

Run tests with Jest:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

### Manual Testing (Demo App)

Test all hooks visually with the included demo app:

```bash
cd demo
npm install
npm start
```

The demo app will open at `http://localhost:3000` where you can interactively test all hooks.

See [TESTING.md](./TESTING.md) for detailed testing instructions.

---

Made with ❤️ for the React community

