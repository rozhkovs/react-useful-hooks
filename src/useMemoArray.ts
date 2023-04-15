import {useMemo} from 'react';
import {isEqual} from './utils/array';
import useChangeCounter from './useChangeCounter';

const useMemoArray = <T extends readonly any[]>(arr: T): T => {
  const depsVal = useChangeCounter(arr, isEqual);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => arr, [depsVal]);
};

export default useMemoArray;
