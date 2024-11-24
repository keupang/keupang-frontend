// src/emotion.d.ts
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
		};
		spacing: {
			sm: string;
			md: string;
			lg: string;
		};
	}
}
