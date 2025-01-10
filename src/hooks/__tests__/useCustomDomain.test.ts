import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import { useCustomDomain } from '../useCustomDomain';

describe('useCustomDomain > ', () => {
	const mockSetValue = vi.fn();

	it('초기 상태가 false여야 한다.', () => {
		const { result } = renderHook(() => useCustomDomain(mockSetValue));

		expect(result.current.isCustomDomain).toBe(false);
	});

	it('handleDomainChange 호출 시 custom 도메인일 경우 isCustomDomain이 true로 설정되어야 한다.', () => {
		const { result } = renderHook(() => useCustomDomain(mockSetValue));

		act(() => {
			result.current.handleDomainChange({
				target: { value: 'custom' },
			} as React.ChangeEvent<HTMLSelectElement>);
		});

		expect(result.current.isCustomDomain).toBe(true);
		expect(mockSetValue).toHaveBeenCalledWith('emailDomain', 'custom');
	});

	it('handleDomainChange 호출 시 custom 도메인이 아닐 경우 isCustomDomain이 false로 설정되어야 한다.', () => {
		const { result } = renderHook(() => useCustomDomain(mockSetValue));

		act(() => {
			result.current.handleDomainChange({
				target: { value: 'example.com' },
			} as React.ChangeEvent<HTMLSelectElement>);
		});

		expect(result.current.isCustomDomain).toBe(false);
		expect(mockSetValue).toHaveBeenCalledWith('emailDomain', 'example.com');
	});
});
