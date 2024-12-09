import { useState, useEffect } from 'react';

export const useDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState({ top: 0, left: 0 });

	const openDropdown = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setPosition({
				top: rect.bottom + window.scrollY,
				left: rect.left + window.scrollX,
			});
		}
		setIsOpen(true);
	};

	const closeDropdown = () => setIsOpen(false);

	useEffect(() => {
		const handleScroll = () => closeDropdown();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { isOpen, position, openDropdown, closeDropdown };
};
