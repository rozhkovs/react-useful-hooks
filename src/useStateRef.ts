import {Dispatch, SetStateAction, useCallback, useRef, useState} from 'react';
import {EMPTY_ARRAY} from 'default-values';

type Ref<T> = {readonly current: T};

// @ts-ignore
function useStateRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  Ref<S | undefined>,
];
function useStateRef<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, Ref<S>] {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch = useCallback(
    (val: SetStateAction<S>) => {
      ref.current = typeof val === 'function' ? (val as (prevState: S) => S)(ref.current) : val;
      setState(ref.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    EMPTY_ARRAY,
  );

  return [state, dispatch, ref];
}

export default useStateRef;
