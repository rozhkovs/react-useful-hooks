import {useRef} from 'react';

const useIsFirstRender = () => {
  const isFirst = useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};

export default useIsFirstRender;
