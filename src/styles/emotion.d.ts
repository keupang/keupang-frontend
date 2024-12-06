import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			background: string;
			text: string;
			primary: string;
			secondary: string;
			success: string;
			danger: string;
			warning: string;
			buttonText: string;
			hover: {
				primary: string;
				secondary: string;
				danger: string;
			};
		};
		spacing: {
			sm: string;
			md: string;
			lg: string;
		};
		fontSizes: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		breakpoints: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	}
}
