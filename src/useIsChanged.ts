import usePrevious from './usePrevious';
import useIsFirstRender from './useIsFirstRender';

const useIsChanged = (value: any) => {
  const prevValue = usePrevious(value);
  const isFirstRender = useIsFirstRender();
  return prevValue !== value && !isFirstRender;
};

export default useIsChanged;
