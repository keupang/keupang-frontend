import { describe, it, expect, vi } from 'vitest';
import { clampQuantity, parseQuantityInput } from '../quantity';

describe('clampQuantity > ', () => {
	it('값이 범위 내에 있으면 그대로 반환', () => {
		expect(clampQuantity(5)).toBe(5);
	});

	it('값이 min보다 작으면 min 반환', () => {
		expect(clampQuantity(0)).toBe(1);
		expect(clampQuantity(-10)).toBe(1);
	});

	it('값이 max보다 크면 max 반환', () => {
		expect(clampQuantity(20)).toBe(10);
	});

	it('커스텀 범위도 동작함', () => {
		expect(clampQuantity(15, 5, 12)).toBe(12);
		expect(clampQuantity(4, 5, 12)).toBe(5);
		expect(clampQuantity(9, 5, 12)).toBe(9);
	});
});

describe('parseQuantityInput > ', () => {
	it('정상 범위 내 숫자면 setter 호출됨', () => {
		const mockSetter = vi.fn();
		const mockEvent = {
			target: { value: '3' },
		} as React.ChangeEvent<HTMLInputElement>;

		parseQuantityInput(mockEvent, mockSetter);
		expect(mockSetter).toHaveBeenCalledWith(3);
	});

	it('숫자가 아니면 setter 호출 안 됨', () => {
		const mockSetter = vi.fn();
		const mockEvent = {
			target: { value: 'abc' },
		} as React.ChangeEvent<HTMLInputElement>;

		parseQuantityInput(mockEvent, mockSetter);
		expect(mockSetter).not.toHaveBeenCalled();
	});

	it('범위 초과 시 setter 호출 안 됨', () => {
		const mockSetter = vi.fn();
		const mockEvent = {
			target: { value: '100' },
		} as React.ChangeEvent<HTMLInputElement>;

		parseQuantityInput(mockEvent, mockSetter);
		expect(mockSetter).not.toHaveBeenCalled();
	});

	it('커스텀 범위 테스트', () => {
		const mockSetter = vi.fn();
		const mockEvent = {
			target: { value: '8' },
		} as React.ChangeEvent<HTMLInputElement>;

		parseQuantityInput(mockEvent, mockSetter, 5, 10);
		expect(mockSetter).toHaveBeenCalledWith(8);
	});
});
