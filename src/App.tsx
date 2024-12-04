import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './styles/GlobalStyles';
import ProductList from './components/ProductList';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	MainPage,
	LoginPage,
	SignupPage,
	ProductListPage,
	ProductDetailPage,
	CartPage,
	OrderHistoryPage,
	MyPage,
	NotFoundPage,
} from './pages';

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
			<Router>
				<StyledDiv>
					<h1>현재 테마: {isDarkMode ? '다크 모드' : '라이트 모드'}</h1>
					<Button onClick={toggleTheme}>Toggle Theme</Button>
					<Card
						header='Card Header'
						content='This is the content of the card.'
						footer='Footer Content'
					/>

					<Card
						header='Outlined Card'
						content='This card has an outlined style.'
						footer='Footer Content'
						variant='outlined'
					/>
					<ProductList />
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignupPage />} />
						<Route path='/products' element={<ProductListPage />} />
						<Route path='/products/:id' element={<ProductDetailPage />} />
						<Route path='/cart' element={<CartPage />} />
						<Route path='/orders' element={<OrderHistoryPage />} />
						<Route path='/mypage' element={<MyPage />} />
						<Route path='*' element={<NotFoundPage />} /> {/* 404 페이지 */}
					</Routes>
				</StyledDiv>
			</Router>
		</ThemeProvider>
	);
};

export default App;
