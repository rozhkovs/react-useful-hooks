import {useMemo} from 'react';
import {EMPTY_ARRAY} from 'default-values';

const useInit = <T>(creator: () => T) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(creator, EMPTY_ARRAY);
};

export default useInit;
