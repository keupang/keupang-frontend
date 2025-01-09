import { Theme } from '@emotion/react';

export const mediaQuery =
	(breakpoint: keyof Theme['breakpoints']) => (props: { theme: Theme }) => `
  @media (max-width: ${props.theme.breakpoints[breakpoint]})
`;
