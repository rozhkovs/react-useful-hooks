import {useMemo} from 'react';
import {isEqual} from './utils/array';
import useChangeCounter from './useChangeCounter';

const useMemoObject = <T extends object>(obj: T) => {
  const depsVal = useChangeCounter(Object.values(obj), isEqual);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => obj, [depsVal]);
};

export default useMemoObject;
