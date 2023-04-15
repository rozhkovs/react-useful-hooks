import {act, renderHook} from '@testing-library/react';
import useMemoObject from '../useMemoObject';

describe('useMemoArray', () => {
  test('When the values of the array have not changes, then the reference to the object is saved', () => {
    const initializedValue = [1];
    const nextValue = [1];
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).not.toBe(nextValue);
  });
  test('When the values of the fields have changes, then the reference to the object is updated', () => {
    const initializedValue = [1];
    const nextValue = [2];
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
  test('When new item is added, then the reference to the object is updated', () => {
    const initializedValue = [1];
    const nextValue = [1, 2];
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
  test('When old props is removed, then the reference to the object is updated', () => {
    const initializedValue = [1, 2];
    const nextValue = [2];
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
});
