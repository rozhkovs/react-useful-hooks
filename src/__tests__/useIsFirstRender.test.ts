import {act, renderHook} from '@testing-library/react';
import useIsFirstRender from '../useIsFirstRender';

describe('useIsFirstRender', () => {
  test('The result is true at the first rendering, after that only false', () => {
    const {result, rerender} = renderHook(() => useIsFirstRender());
    expect(result.current).toBe(true);
    act(() => rerender());
    expect(result.current).toBe(false);
    act(() => rerender());
    expect(result.current).toBe(false);
  });
});
