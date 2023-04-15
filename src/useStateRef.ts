import {Dispatch, SetStateAction, useCallback, useRef, useState} from 'react';

type Ref<T> = {readonly current: T};
/* eslint-disable prettier/prettier */
// @ts-ignore
function useStateRef<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
  Ref<S | undefined>,
];
function useStateRef<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, Ref<S>] {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch = useCallback((val: SetStateAction<S>) => {
    ref.current = typeof val === 'function' ? (val as (prevState: S) => S)(ref.current) : val;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

export default useStateRef;
