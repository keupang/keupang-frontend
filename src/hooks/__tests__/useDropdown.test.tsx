import { renderHook, act } from '@testing-library/react-hooks';
import { useDropdown } from '../useDropdown';
import { describe, expect, it, vi } from 'vitest';

describe('useDropdown Hook 테스트 > ', () => {
	it('초기 상태가 올바르게 설정되어야 한다.', () => {
		const { result } = renderHook(() => useDropdown());

		expect(result.current.isOpen).toBe(false);
		expect(result.current.position).toEqual({ top: 0, left: 0 });
	});

	it('openDropdown 호출 시 드롭다운이 열리고 위치가 설정되어야 한다.', () => {
		const mockRef = {
			current: {
				getBoundingClientRect: () => ({
					bottom: 100,
					left: 200,
				}),
			},
		};

		const { result } = renderHook(() => useDropdown());

		act(() => {
			result.current.openDropdown(mockRef as React.RefObject<HTMLDivElement>);
		});

		expect(result.current.isOpen).toBe(true);
		expect(result.current.position).toEqual({ top: 100, left: 200 });
	});

	it('closeDropdown 호출 시 드롭다운이 닫혀야 한다.', () => {
		const { result } = renderHook(() => useDropdown());

		act(() => {
			result.current.closeDropdown();
		});

		expect(result.current.isOpen).toBe(false);
	});

	it('스크롤 시 드롭다운이 닫혀야 한다.', () => {
		const { result } = renderHook(() => useDropdown());

		act(() => {
			result.current.openDropdown({
				current: {
					getBoundingClientRect: () => ({
						bottom: 100,
						left: 200,
					}),
				},
			} as React.RefObject<HTMLDivElement>);
		});

		expect(result.current.isOpen).toBe(true);

		act(() => {
			window.dispatchEvent(new Event('scroll'));
		});

		expect(result.current.isOpen).toBe(false);
	});

	it('컴포넌트 언마운트 시 이벤트 리스너가 제거되어야 한다.', () => {
		const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
		const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

		const { unmount } = renderHook(() => useDropdown());

		expect(addEventListenerSpy).toHaveBeenCalledWith(
			'scroll',
			expect.any(Function)
		);
		unmount();
		expect(removeEventListenerSpy).toHaveBeenCalledWith(
			'scroll',
			expect.any(Function)
		);
	});
});
