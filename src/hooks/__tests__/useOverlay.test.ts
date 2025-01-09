import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import { useOverlay } from '../useOverlay';

describe('useOverlay > ', () => {
	it('초기 상태는 false이다.', () => {
		const { result } = renderHook(() => useOverlay());

		expect(result.current.isOpen).toBe(false);
	});

	it('초기 상태를 true로 설정할 수 있다.', () => {
		const { result } = renderHook(() => useOverlay(true));

		expect(result.current.isOpen).toBe(true);
	});

	it('open 함수가 상태를 true로 변경해야 한다.', () => {
		const { result } = renderHook(() => useOverlay());

		act(() => {
			result.current.open();
		});

		expect(result.current.isOpen).toBe(true);
	});

	it('close 함수가 상태를 false로 변경해야 한다.', () => {
		const { result } = renderHook(() => useOverlay(true));

		act(() => {
			result.current.close();
		});

		expect(result.current.isOpen).toBe(false);
	});

	it('toggle 함수가 상태를 토글해야 한다.', () => {
		const { result } = renderHook(() => useOverlay());

		act(() => {
			result.current.toggle();
		});
		expect(result.current.isOpen).toBe(true);

		act(() => {
			result.current.toggle();
		});
		expect(result.current.isOpen).toBe(false);
	});
});
