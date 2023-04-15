import {act, renderHook} from '@testing-library/react';
import useIsChanged from '../useIsChanged';

describe('useIsChanged', () => {
  test('The first result is always false', () => {
    const {result} = renderHook(() => useIsChanged([]));
    expect(result.current).toBe(false);
  });
  test('When the argument is changed, then the result is true', () => {
    const initializedValue = {};
    const nextValue: any[] = [];
    const {result, rerender} = renderHook((value) => useIsChanged(value), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(true);
  });
  test('When the argument is not changed, then the result is false', () => {
    const initializedValue = {};
    const nextValue = initializedValue;
    const {result, rerender} = renderHook((value) => useIsChanged(value), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(false);
  });
  test('When the result is true and the argument is not changed, then the result is false', () => {
    const initializedValue = {};
    const nextValue: any[] = [];
    const {result, rerender} = renderHook((value) => useIsChanged(value), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(true);
    act(() => rerender(nextValue));
    expect(result.current).toBe(false);
  });
});
