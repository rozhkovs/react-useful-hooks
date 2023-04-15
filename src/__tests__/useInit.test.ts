import {act, renderHook} from '@testing-library/react';
import useInit from '../useInit';

const mockCreator = jest.fn(() => {});

describe('useInit', () => {
  test('The callback should be called once when mounting', () => {
    const {rerender} = renderHook(() => useInit(() => mockCreator()));
    expect(mockCreator.mock.calls).toHaveLength(1);
    act(() => rerender());
    expect(mockCreator.mock.calls).toHaveLength(1);
  });
});
