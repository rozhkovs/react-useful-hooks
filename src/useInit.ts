import {useMemo} from 'react';

const useInit = <T>(creator: () => T) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(creator, []);
};

export default useInit;
