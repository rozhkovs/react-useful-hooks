import {useMemo} from 'react';
import {isEqual} from './utils/array';
import useChangeCounter from './useChangeCounter';

const useMemoArray = <T extends readonly any[]>(arr: T): T => {
  const depsVal = useChangeCounter(arr, isEqual);
  return useMemo(() => arr, [depsVal]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useMemoArray;
