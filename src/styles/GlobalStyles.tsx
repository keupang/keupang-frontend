// src/styles/GlobalStyles.tsx
import { Global, css, useTheme } from '@emotion/react';

const GlobalStyles = () => {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					font-family: 'Pretendard', sans-serif;
				}
				body {
					background-color: ${theme.colors.background};
					color: ${theme.colors.text};
				}
				button {
					all: unset;
					font-family: 'Pretendard', sans-serif;
				}
				h1 {
					font-family: 'Pretendard', sans-serif;
					font-weight: 800;
				}
			`}
		/>
	);
};

export default GlobalStyles;
