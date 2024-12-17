import styled from '@emotion/styled';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
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
import { CustomThemeProvider } from './contexts/ThemeContext';

const StyledDiv = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	min-height: 100vh;
`;

const App = () => {
	return (
		<CustomThemeProvider>
			<GlobalStyles />
			<Router>
				<Header />
				<StyledDiv>
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
		</CustomThemeProvider>
	);
};

export default App;
