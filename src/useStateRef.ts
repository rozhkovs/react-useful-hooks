import {Dispatch, SetStateAction, useCallback, useRef, useState} from 'react';
import {EMPTY_ARRAY} from 'default-values';

type Ref<T> = {readonly current: T};

// @ts-ignore
function useStateRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  Ref<S | undefined>,
];
function useStateRef<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, Ref<S>];
function useStateRef<S>(initialState: S | (() => S) | undefined) {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch = useCallback(
    (val: SetStateAction<S>) => {
      ref.current = typeof val === 'function' ? (val as any)(ref.current) : val;
      setState(ref.current);
    },
    EMPTY_ARRAY, // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [state, dispatch, ref];
}

export default useStateRef;
