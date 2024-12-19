import { useState } from 'react';

export const useOverlay = (initialState: boolean = false) => {
	const [isOpen, setIsOpen] = useState(initialState);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = () => setIsOpen((prev) => !prev);

	return { isOpen, open, close, toggle };
};
