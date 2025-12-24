import { renderHook, act, waitFor } from '@testing-library/react';
import { useCopyToClipboard } from '../useCopyToClipboard';

// Mock navigator.clipboard
const mockClipboard = {
  writeText: jest.fn().mockResolvedValue(undefined),
};

Object.defineProperty(navigator, 'clipboard', {
  value: mockClipboard,
  writable: true,
});

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(async () => {
    await act(async () => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should initialize with copied=false and error=null', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    expect(result.current[0]).toBe(false); // copied
    expect(result.current[2]).toBe(null); // error
  });

  it('should copy text to clipboard successfully', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current[1]('test text');
    });

    expect(mockClipboard.writeText).toHaveBeenCalledWith('test text');
    expect(result.current[0]).toBe(true); // copied
    expect(result.current[2]).toBe(null); // error
  });

  it('should reset copied state after 2 seconds', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current[1]('test text');
    });

    expect(result.current[0]).toBe(true);

    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current[0]).toBe(false);
  });

  it('should handle clipboard errors', async () => {
    const error = new Error('Clipboard API not available');
    mockClipboard.writeText.mockRejectedValueOnce(error);

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current[1]('test text');
    });

    expect(result.current[0]).toBe(false);
    expect(result.current[2]).toBe(error);
  });

  it('should return false when clipboard is null', async () => {
    // Temporarily override clipboard to null
    const savedClipboard = navigator.clipboard;
    navigator.clipboard = null;

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      const success = await result.current[1]('test text');
      expect(success).toBe(false);
    });

    expect(result.current[2]).toBeTruthy();
    expect(result.current[2].message).toBe('Clipboard API not available');

    // Restore clipboard
    navigator.clipboard = savedClipboard;
  });
});

