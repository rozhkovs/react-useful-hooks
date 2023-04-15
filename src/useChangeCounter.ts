import {useRef} from 'react';
import usePrevious from './usePrevious';
import useIsFirstRender from './useIsFirstRender';

type Compare<T> = (v1: T, v2: T) => boolean;
const defaultCompare: Compare<any> = (v1, v2) => v1 === v2;

const useChangeCounter = <T>(value: T, compare: Compare<T> = defaultCompare) => {
  const isFirstRender = useIsFirstRender();
  const counterRef = useRef(0);
  const prev = usePrevious(value);
  if (!isFirstRender) {
    if (!compare(prev as T, value)) {
      ++counterRef.current;
    }
  }
  return counterRef.current;
};

export default useChangeCounter;
