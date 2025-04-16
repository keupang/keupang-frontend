import { renderHook } from '@testing-library/react';
import { useImagePreloadList } from '../useImagePreload';
import { describe, it, expect } from 'vitest';

describe('useImagePreloadList > ', () => {
	it('여러 이미지 URL을 preload로 추가하고 언마운트 시 제거한다', () => {
		const urls = [
			'https://example.com/a.webp',
			'https://example.com/b.webp',
			'https://example.com/c.webp',
		];

		const { unmount } = renderHook(() => useImagePreloadList(urls));

		urls.forEach((url) => {
			const link = document.head.querySelector(
				`link[href="${url}"]`
			) as HTMLLinkElement;
			expect(link).not.toBeNull();
			expect(link?.rel).toBe('preload');
			expect(link?.as).toBe('image');
			expect(link?.type).toBe('image/webp');
		});

		unmount();

		urls.forEach((url) => {
			const removed = document.head.querySelector(`link[href="${url}"]`);
			expect(removed).toBeNull();
		});
	});

	it('빈 URL 문자열 또는 빈 배열은 무시된다', () => {
		const urls = ['', undefined as unknown as string];

		const { unmount } = renderHook(() => useImagePreloadList(urls));

		const links = document.head.querySelectorAll(`link[rel="preload"]`);
		expect(links.length).toBe(0);

		unmount();
	});
});
