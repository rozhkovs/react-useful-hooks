import {act, renderHook} from '@testing-library/react';
import useChangeCounter from '../useChangeCounter';

describe('useChangeCounter', () => {
  test('The first result is always 0', () => {
    const {result} = renderHook(() => useChangeCounter({}));
    expect(result.current).toBe(0);
  });
  test('When the value is changed, then the result increases by 1', () => {
    const initializedValue = {};
    const nextValue: any[] = [];
    const {result, rerender} = renderHook((value) => useChangeCounter(value), {
      initialProps: initializedValue,
    });
    expect(result.current).toBe(0);
    act(() => rerender(nextValue));
    expect(result.current).toBe(1);
  });
  test('When the value is not changed, then the result is not changed', () => {
    const initializedValue = {};
    const nextValue = initializedValue;
    const {result, rerender} = renderHook((value) => useChangeCounter(value), {
      initialProps: initializedValue,
    });
    expect(result.current).toBe(0);
    act(() => rerender(nextValue));
    expect(result.current).toBe(0);
  });
});
