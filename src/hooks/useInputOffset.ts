import { useState, useEffect, RefObject } from 'react';

export const useInputOffset = (
	inputRef: RefObject<HTMLElement>,
	dependency: boolean
) => {
	const [leftOffset, setLeftOffset] = useState(0);

	useEffect(() => {
		const calculateOffset = () => {
			const inputWidth = inputRef.current?.offsetWidth || 0;
			setLeftOffset(inputWidth - 20);
		};

		calculateOffset();

		window.addEventListener('resize', calculateOffset);
		return () => window.removeEventListener('resize', calculateOffset);
	}, [dependency, inputRef]);

	return leftOffset;
};
