import {act, renderHook} from '@testing-library/react';
import usePrevious from '../usePrevious';

describe('usePrevious', () => {
  test('The first result is always undefined', () => {
    const {result} = renderHook(() => usePrevious({}));
    expect(result.current).toBe(undefined);
  });
  test('The second and more result is always previous value', () => {
    const initializedValue: object = {};
    const {result, rerender} = renderHook((value) => usePrevious(value), {
      initialProps: initializedValue,
    });
    act(() => rerender([]));
    expect(result.current).toBe(initializedValue);
  });
});
