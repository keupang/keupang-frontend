import { renderHook, act } from '@testing-library/react-hooks';
import { vi, describe, it, expect } from 'vitest';
import { useTimer } from '../useTimer';

describe('useTimer > ', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.clearAllTimers();
	});

	it('초기 상태가 올바르게 설정되어야 한다.', () => {
		const { result } = renderHook(() => useTimer(10));

		expect(result.current.timeLeft).toBe(10);
		expect(result.current.isTimerExpired).toBe(false);
	});

	it('타이머가 1초마다 감소해야 한다.', () => {
		const { result } = renderHook(() => useTimer(5));

		act(() => {
			vi.advanceTimersByTime(1000);
		});

		expect(result.current.timeLeft).toBe(4);

		act(() => {
			vi.advanceTimersByTime(3000);
		});

		expect(result.current.timeLeft).toBe(1);
	});

	it('타이머가 만료되었을 때 isTimerExpired가 true로 설정되어야 한다.', () => {
		const { result } = renderHook(() => useTimer(2));

		act(() => {
			vi.advanceTimersByTime(2000);
		});

		expect(result.current.timeLeft).toBe(0);
		expect(result.current.isTimerExpired).toBe(true);
	});

	it('타이머가 언마운트 시 클리어되어야 한다.', () => {
		const { result, unmount } = renderHook(() => useTimer(5));

		unmount(); // 컴포넌트 언마운트

		act(() => {
			vi.advanceTimersByTime(5000); // 5초 경과
		});

		// 언마운트 후에는 상태가 업데이트되지 않아야 한다
		expect(result.current.timeLeft).toBe(5);
	});
});
