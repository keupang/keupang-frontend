import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import estimateInitialSize from '../estimateInitialSize';

describe('estimateInitialSize', () => {
	const originalHeight = window.innerHeight;
	const originalWidth = window.innerWidth;

	beforeEach(() => {
		// 기존 window 크기 백업
		Object.defineProperty(window, 'innerHeight', {
			writable: true,
			configurable: true,
			value: 1080,
		});
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1280,
		});
	});

	afterEach(() => {
		// 테스트 후 원복
		Object.defineProperty(window, 'innerHeight', {
			writable: true,
			configurable: true,
			value: originalHeight,
		});
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: originalWidth,
		});
	});

	it('화면 크기에 맞춰 예상 아이템 개수를 반환한다', () => {
		// height: 1080, width: 1280
		// itemHeight + gap = 316, itemWidth = 220
		// rows = ceil(1080 / 316) = 4
		// columns = floor(1280 / 220) = 5
		// expected = 4 * 5 = 20
		expect(estimateInitialSize()).toBe(20);
	});

	it('최소 렌더링 아이템 개수는 6개이다', () => {
		window.innerHeight = 600;
		window.innerWidth = 375;
		// rows = ceil(600 / 316) = 2
		// columns = floor(375 / 220) = 1
		expect(estimateInitialSize()).toBe(6);
	});
});
