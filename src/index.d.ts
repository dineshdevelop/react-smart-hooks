/**
 * Debounce a value
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 500)
 * @returns The debounced value
 */
export declare function useDebounce<T>(value: T, delay?: number): T;

/**
 * Sync state with localStorage
 * @param key - The localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns [storedValue, setValue] - Similar to useState
 */
export declare function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void];

/**
 * Track window size
 * @returns { width: number, height: number }
 */
export declare function useWindowSize(): {
  width: number | undefined;
  height: number | undefined;
};

/**
 * Get the previous value
 * @param value - The value to track
 * @returns The previous value (undefined on first render)
 */
export declare function usePrevious<T>(value: T): T | undefined;

/**
 * Copy text to clipboard
 * @returns [copied: boolean, copy: Function, error: Error | null]
 */
export declare function useCopyToClipboard(): [
  boolean,
  (text: string) => Promise<boolean>,
  Error | null
];


