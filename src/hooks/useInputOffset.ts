import { useState, useEffect } from 'react';

export const useInputOffset = (
	inputRef: React.RefObject<HTMLElement | null>,
	dependency: boolean
) => {
	const [leftOffset, setLeftOffset] = useState(0);

	useEffect(() => {
		const calculateOffset = () => {
			if (!inputRef.current) {
				setLeftOffset(0);
				return;
			}
			const inputWidth = inputRef.current.offsetWidth || 0;
			setLeftOffset(inputWidth - 20);
		};

		calculateOffset();

		window.addEventListener('resize', calculateOffset);
		return () => window.removeEventListener('resize', calculateOffset);
	}, [dependency, inputRef]);

	return leftOffset;
};
