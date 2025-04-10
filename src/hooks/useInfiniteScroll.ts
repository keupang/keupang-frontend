import { useEffect } from 'react';

export const useInfiniteScroll = ({
	ref,
	canLoadMore,
	isLoading,
	onIntersect,
}: {
	ref: React.RefObject<HTMLDivElement | null>;
	canLoadMore: boolean;
	isLoading: boolean;
	onIntersect: () => void;
}) => {
	useEffect(() => {
		if (!ref.current || !canLoadMore || isLoading) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				onIntersect();
			}
		});

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, canLoadMore, isLoading, onIntersect]);
};
