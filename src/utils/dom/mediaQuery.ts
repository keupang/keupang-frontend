import { Theme } from '@emotion/react';

type BreakpointKey = keyof Theme['breakpoints'];
type Breakpoint = BreakpointKey | string;

export const mediaQuery =
	(breakpoint: Breakpoint) => (props: { theme: Theme }) => {
		const value =
			props.theme.breakpoints?.[breakpoint as BreakpointKey] ?? breakpoint;
		return `@media (max-width: ${value})`;
	};
