import {useCallback, useRef} from 'react';

type AnyFunc = (...params: any[]) => any;

// Utility hook that returns a function that never has stale dependencies, but
// without changing identity, as a useCallback with dep array would.
// Useful for functions that depend on external state, but
// should not trigger effects when that external state changes.
const useStableCallback = <T extends AnyFunc | null | undefined>(
  callback: T,
): T extends AnyFunc ? T : () => void => {
  const ref = useRef<T>(callback);
  ref.current = callback;
  return useCallback<any>((...params: any[]) => ref.current?.(...params), []);
};

export default useStableCallback;
