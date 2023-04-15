import {act, renderHook} from '@testing-library/react';
import useMemoObject from '../useMemoObject';

describe('useMemoObject', () => {
  test('The reference to the object is saved if the values of the fields have not changes', () => {
    const initializedValue = {value: 1};
    const nextValue = {value: 1};
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).not.toBe(nextValue);
  });
  test('The reference to the object is updated if the values of the fields have changes', () => {
    const initializedValue = {value: {}};
    const nextValue = {value: []};
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
  test('The reference to the object is updated if new props is added', () => {
    const initializedValue = {};
    const nextValue = {...initializedValue, newProp: []};
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
  test('The reference to the object is updated if old props is removed', () => {
    const initializedValue = {prop: []};
    const nextValue: any = {};
    const {result, rerender} = renderHook((v) => useMemoObject(v), {
      initialProps: initializedValue,
    });
    act(() => rerender(nextValue));
    expect(result.current).toBe(nextValue);
  });
});
