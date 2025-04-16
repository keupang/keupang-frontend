import { useInsertionEffect } from 'react';

export const useImagePreloadList = (urls: string[]) => {
	useInsertionEffect(() => {
		const links: HTMLLinkElement[] = [];
		urls.forEach((url) => {
			if (!url) return;

			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'image';
			link.href = url;
			link.type = 'image/webp';

			document.head.appendChild(link);
			links.push(link);
		});

		return () => {
			links.forEach((link) => document.head.removeChild(link));
		};
	}, [urls]);
};
