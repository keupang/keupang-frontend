import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './styles/GlobalStyles';
import ProductList from './components/ProductList';
import { Button } from './components/Button';

const StyledDiv = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme ? JSON.parse(savedTheme) : false;
	});

	const toggleTheme = () => {
		setIsDarkMode((prevMode: Boolean) => {
			const newMode = !prevMode;
			localStorage.setItem('theme', JSON.stringify(newMode));
			return newMode;
		});
	};

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<StyledDiv>
				<h1>현재 테마: {isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
				<Button onClick={toggleTheme}>Toggle Theme</Button>
				<Button
					variant='danger'
					size='large'
					onClick={() => alert('Danger Button')}>
					Danger Button
				</Button>
				<ProductList />
			</StyledDiv>
		</ThemeProvider>
	);
};

export default App;
