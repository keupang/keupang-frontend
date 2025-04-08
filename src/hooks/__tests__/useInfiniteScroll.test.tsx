import { render } from '@testing-library/react';
import { useRef } from 'react';
import { useInfiniteScroll } from '../useInfiniteScroll';
import { describe, expect, it, vi } from 'vitest';

const MockComponent = ({ onIntersect }: { onIntersect: () => void }) => {
	const ref = useRef<HTMLDivElement>(null);
	const canLoad = true;

	useInfiniteScroll({
		ref,
		canLoadMore: canLoad,
		isLoading: false,
		onIntersect,
	});

	return <div ref={ref} data-testid='observe-target' />;
};

describe('useInfiniteScroll > ', () => {
	it('onIntersect를 호출한다 (intersection mock)', () => {
		const intersectFn = vi.fn();

		// IntersectionObserver를 강제로 실행 가능한 방식으로 mock 처리해야 함
		global.IntersectionObserver = vi.fn(() => ({
			observe: vi.fn(
				() => setTimeout(() => intersectFn(), 100) // 강제 인터섹트 트리거
			),
			disconnect: vi.fn(),
		})) as any;

		render(<MockComponent onIntersect={intersectFn} />);
		expect(intersectFn).not.toBeCalled();

		// setTimeout이 돌기 때문에 약간의 대기 필요
		setTimeout(() => {
			expect(intersectFn).toBeCalled();
		}, 200);
	});
});
