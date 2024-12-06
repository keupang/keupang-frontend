const commonTheme = {
	spacing: {
		sm: '8px',
		md: '16px',
		lg: '24px',
	},
	fontSizes: {
		xs: '12px',
		sm: '14px',
		md: '16px',
		lg: '20px',
		xl: '24px',
	},
	breakpoints: {
		sm: '480px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
	},
};

export const lightTheme = {
	...commonTheme,
	colors: {
		background: '#ffffff',
		text: '#1f2937',
		primary: '#0064ff',
		secondary: '#6b7280',
		success: '#22c55e',
		danger: '#ff4242',
		warning: '#eab308',
	},
};

export const darkTheme = {
	...commonTheme,
	colors: {
		background: '#1f2937',
		text: '#ffffff',
		primary: '#0064ff',
		secondary: '#6b7280',
		success: '#22c55e',
		danger: '#ff4242',
		warning: '#eab308',
	},
};
