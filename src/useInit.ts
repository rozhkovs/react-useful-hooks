import {useMemo} from 'react';
import {EMPTY_ARRAY} from 'default-values';

const useInit = <T>(creator: () => T) => {
  return useMemo(creator, EMPTY_ARRAY); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useInit;
