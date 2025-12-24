import { useRef, useEffect } from 'react';

/**
 * Custom hook that returns the previous value
 * @param {any} value - The value to track
 * @returns {any} - The previous value
 * 
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * // prevCount will be the previous value of count
 */
export function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable
  // and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}


