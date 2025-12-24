import { useState, useCallback } from 'react';

/**
 * Custom hook that copies text to clipboard
 * @returns {[boolean, Function, string]} - [copied, copy, error]
 * 
 * @example
 * const [copied, copy, error] = useCopyToClipboard();
 * 
 * <button onClick={() => copy('Text to copy')}>
 *   {copied ? 'Copied!' : 'Copy'}
 * </button>
 */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      setError(new Error('Clipboard API not available'));
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      
      return true;
    } catch (err) {
      setError(err);
      setCopied(false);
      return false;
    }
  }, []);

  return [copied, copy, error];
}


