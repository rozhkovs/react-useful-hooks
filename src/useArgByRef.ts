import {useRef} from 'react';

const useArgByRef = <T>(arg: T): {readonly current: T} => {
  const ref = useRef<T>(arg);
  ref.current = arg;
  return ref;
};

export default useArgByRef;
