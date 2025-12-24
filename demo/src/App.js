import React, { useState, useEffect } from 'react';
import {
  useDebounce,
  useLocalStorage,
  useWindowSize,
  usePrevious,
  useCopyToClipboard,
} from 'react-smart-hooks';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 React Smart Hooks Demo</h1>
        <p>Test all hooks in action</p>
      </header>

      <div className="hooks-container">
        <DebounceDemo />
        <LocalStorageDemo />
        <WindowSizeDemo />
        <PreviousDemo />
        <CopyToClipboardDemo />
      </div>
    </div>
  );
}

// useDebounce Demo
function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    console.log('Debounced search:', debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className="hook-card">
      <h2>1. useDebounce</h2>
      <p>Type in the input - search will trigger after 500ms delay</p>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
        className="input"
      />
      <div className="result">
        <strong>Current:</strong> {searchTerm || '(empty)'}
      </div>
      <div className="result">
        <strong>Debounced:</strong> {debouncedSearchTerm || '(empty)'}
      </div>
    </div>
  );
}

// useLocalStorage Demo
function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('demo-name', '');
  const [theme, setTheme] = useLocalStorage('demo-theme', 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="hook-card">
      <h2>2. useLocalStorage</h2>
      <p>Values persist in localStorage - refresh page to verify</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="input"
      />
      <div className="result">
        <strong>Stored Name:</strong> {name || '(empty)'}
      </div>
      <div className="button-group">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="button"
        >
          Toggle Theme: {theme}
        </button>
        <button onClick={() => setName('')} className="button button-secondary">
          Clear Name
        </button>
      </div>
    </div>
  );
}

// useWindowSize Demo
function WindowSizeDemo() {
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <div className="hook-card">
      <h2>3. useWindowSize</h2>
      <p>Resize your browser window to see changes</p>
      <div className="result">
        <strong>Width:</strong> {width}px
      </div>
      <div className="result">
        <strong>Height:</strong> {height}px
      </div>
      <div className="device-indicator">
        {isMobile && <span className="badge badge-mobile">📱 Mobile</span>}
        {isTablet && <span className="badge badge-tablet">📱 Tablet</span>}
        {isDesktop && <span className="badge badge-desktop">💻 Desktop</span>}
      </div>
    </div>
  );
}

// usePrevious Demo
function PreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="hook-card">
      <h2>4. usePrevious</h2>
      <p>Track the previous value of state</p>
      <div className="result">
        <strong>Current Count:</strong> {count}
      </div>
      <div className="result">
        <strong>Previous Count:</strong> {prevCount ?? 'N/A'}
      </div>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="button">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="button">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="button button-secondary">
          Reset
        </button>
      </div>
    </div>
  );
}

// useCopyToClipboard Demo
function CopyToClipboardDemo() {
  const [text, setText] = useState('Hello from react-smart-hooks!');
  const [copied, copy, error] = useCopyToClipboard();

  return (
    <div className="hook-card">
      <h2>5. useCopyToClipboard</h2>
      <p>Copy text to clipboard with one click</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
      />
      <button
        onClick={() => copy(text)}
        className={`button ${copied ? 'button-success' : ''}`}
      >
        {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
      </button>
      {error && (
        <div className="error">
          <strong>Error:</strong> {error.message}
        </div>
      )}
    </div>
  );
}

export default App;


