import {useMemo} from 'react';
import {isEqual} from './utils/array';
import useChangeCounter from './useChangeCounter';

const useMemoObject = <T extends object>(obj: T) => {
  const depsVal = useChangeCounter(Object.values(obj), isEqual);
  return useMemo(() => obj, [depsVal]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useMemoObject;
