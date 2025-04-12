import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '@/styles/theme';

interface ThemeContextProps {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme은 ThemeProvider와 함께 사용되어야 한다.');
	}
	return context;
};

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? JSON.parse(savedTheme) : false;
	});

	const toggleTheme = () => {
		setIsDarkMode((prevMode: boolean) => {
			const newMode = !prevMode;
			localStorage.setItem('theme', JSON.stringify(newMode));
			return newMode;
		});
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			<EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				{children}
			</EmotionThemeProvider>
		</ThemeContext.Provider>
	);
};
