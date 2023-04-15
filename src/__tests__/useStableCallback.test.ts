import {act, renderHook} from '@testing-library/react';
import useStableCallback from '../useStableCallback';

describe('useStableCallback', () => {
  test('When the argument is null or undefined, then calling the result will return nothing', () => {
    const {result, rerender} = renderHook((v) => useStableCallback(v)(), {
      initialProps: undefined,
    });
    expect(result.current).toBe(undefined);
    act(() => rerender(null as any));
    expect(result.current).toBe(undefined);
  });
  test('The function reference is always the same throughout the lifecycle', () => {
    const {result, rerender} = renderHook(() => useStableCallback(() => {}));
    const initializedFunc = result.current;
    act(() => rerender());
    act(() => rerender());
    act(() => rerender());
    expect(result.current).toBe(initializedFunc);
  });
  test('When calling the resulting function, the last function that was passed to the arguments is always called', () => {
    const {result, rerender} = renderHook((value) => useStableCallback(value)(), {
      initialProps: () => 1 as number,
    });
    expect(result.current).toBe(1);
    act(() => rerender(() => 2));
    expect(result.current).toBe(2);
    act(() => rerender(() => 3));
    expect(result.current).toBe(3);
  });
});
