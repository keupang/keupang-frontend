import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useInputOffset } from '../useInputOffset';

describe('useInputOffset > ', () => {
	let inputElement: HTMLDivElement;

	beforeEach(() => {
		// 테스트용 DOM 요소 생성
		inputElement = document.createElement('div');
		document.body.appendChild(inputElement);

		// offsetWidth를 수동으로 설정
		Object.defineProperty(inputElement, 'offsetWidth', {
			value: 100, // 초기 너비 설정
			writable: true, // 수정 가능
		});
	});

	afterEach(() => {
		// DOM 정리
		document.body.removeChild(inputElement);
		vi.clearAllMocks();
	});

	it('초기 오프셋을 올바르게 계산해야 한다.', () => {
		const { result } = renderHook(() =>
			useInputOffset({ current: inputElement }, true)
		);

		expect(result.current).toBe(80); // 100 - 20 = 80
	});

	it('dependency가 변경될 때 오프셋이 재계산되어야 한다.', () => {
		Object.defineProperty(inputElement, 'offsetWidth', { value: 150 });

		const { result, rerender } = renderHook(
			({ dependency }) => useInputOffset({ current: inputElement }, dependency),
			{ initialProps: { dependency: true } }
		);

		expect(result.current).toBe(130); // 150 - 20 = 130

		// 요소 크기 변경
		Object.defineProperty(inputElement, 'offsetWidth', { value: 200 });
		rerender({ dependency: false });

		expect(result.current).toBe(180); // 200 - 20 = 180
	});

	it('창 크기 조정 시 오프셋이 업데이트되어야 한다.', () => {
		const { result } = renderHook(() =>
			useInputOffset({ current: inputElement }, true)
		);

		expect(result.current).toBe(80); // 100 - 20 = 80

		// 창 크기 변경 이벤트 트리거
		act(() => {
			Object.defineProperty(inputElement, 'offsetWidth', { value: 120 });
			window.dispatchEvent(new Event('resize'));
		});

		expect(result.current).toBe(100); // 120 - 20 = 100
	});

	it('요소가 없을 경우 오프셋은 0이어야 한다.', () => {
		const { result } = renderHook(() =>
			useInputOffset({ current: null }, true)
		);
		expect(result.current).toBe(0);
	});
});
