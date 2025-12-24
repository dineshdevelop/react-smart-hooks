/**
 * Example usage of react-smart-hooks
 * This file demonstrates how to use all the hooks in a React/Next.js project
 */

import React, { useState, useEffect } from 'react';
import {
  useDebounce,
  useLocalStorage,
  useWindowSize,
  usePrevious,
  useCopyToClipboard,
} from 'react-smart-hooks';

// Example 1: Search with Debounce
export function SearchExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching for:', debouncedSearchTerm);
      // Make API call here
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

// Example 2: Theme Switcher with localStorage
export function ThemeSwitcher() {
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

// Example 3: Responsive Component
export function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <div>
      <p>Window: {width} x {height}</p>
      {isMobile && <div>Mobile View</div>}
      {isTablet && <div>Tablet View</div>}
      {!isMobile && !isTablet && <div>Desktop View</div>}
    </div>
  );
}

// Example 4: Counter with Previous Value
export function Counter() {
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

// Example 5: Copy to Clipboard
export function CopyButton() {
  const [copied, copy, error] = useCopyToClipboard();

  const handleCopy = () => {
    copy('Hello from react-smart-hooks!');
  };

  return (
    <div>
      <button onClick={handleCopy}>
        {copied ? '✅ Copied!' : '📋 Copy'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

// Complete Example: All hooks together
export function CompleteExample() {
  const [name, setName] = useLocalStorage('userName', '');
  const debouncedName = useDebounce(name, 300);
  const prevName = usePrevious(name);
  const { width } = useWindowSize();
  const [copied, copy] = useCopyToClipboard();

  return (
    <div>
      <h1>React Smart Hooks Demo</h1>
      
      <div>
        <h2>useLocalStorage</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Stored name: {name}</p>
      </div>

      <div>
        <h2>useDebounce</h2>
        <p>Debounced name: {debouncedName}</p>
      </div>

      <div>
        <h2>usePrevious</h2>
        <p>Previous name: {prevName ?? 'N/A'}</p>
      </div>

      <div>
        <h2>useWindowSize</h2>
        <p>Window width: {width}px</p>
      </div>

      <div>
        <h2>useCopyToClipboard</h2>
        <button onClick={() => copy(name)}>
          {copied ? '✅ Copied!' : '📋 Copy Name'}
        </button>
      </div>
    </div>
  );
}

