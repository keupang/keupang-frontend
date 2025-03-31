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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';
import Footer from './components/Footer';

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
						<Route
							path='/'
							element={
								<GlobalErrorBoundary>
									<MainPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/login'
							element={
								<GlobalErrorBoundary>
									<LoginPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/signup'
							element={
								<GlobalErrorBoundary>
									<SignupPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/products'
							element={
								<GlobalErrorBoundary>
									<ProductListPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/products/:id'
							element={
								<GlobalErrorBoundary>
									<ProductDetailPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/cart'
							element={
								<GlobalErrorBoundary>
									<CartPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/orders'
							element={
								<GlobalErrorBoundary>
									<OrderHistoryPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route
							path='/mypage'
							element={
								<GlobalErrorBoundary>
									<MyPage />
								</GlobalErrorBoundary>
							}
						/>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</StyledDiv>
				<Footer />
			</Router>

			<ToastContainer
				position='top-right'
				autoClose={3000}
				pauseOnHover
				draggable
				closeOnClick
				hideProgressBar={true}
				newestOnTop={true}
			/>
		</CustomThemeProvider>
	);
};

export default App;
