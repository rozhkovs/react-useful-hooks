import {act, renderHook} from '@testing-library/react';
import useArgByRef from '../useArgByRef';

describe('useArgByRef', () => {
  test('The result has always reference to the last passed argument', () => {
    const {result, rerender} = renderHook((value) => useArgByRef(value), {
      initialProps: 1 as any,
    });
    expect(result.current.current).toBe(1);
    act(() => rerender(2));
    expect(result.current.current).toBe(2);
    act(() => rerender(3));
    expect(result.current.current).toBe(3);
  });
});
