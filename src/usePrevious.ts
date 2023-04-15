import {useRef} from 'react';

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined);
  const temp = ref.current;
  ref.current = value;
  return temp;
};

export default usePrevious;
