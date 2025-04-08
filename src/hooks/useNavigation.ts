import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();
	const location = useLocation();

	const goToHome = () => navigation('/');
	const goToLogin = () => navigation('/login');
	const goToSignup = () => navigation('/signup');
	const goToProducts = () => navigation('/products');
	const goToProductDetail = (id: number) => navigation(`/product/${id}`);
	const goToCategory = (category: string) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set('category', category);

		navigation(`/products?${searchParams.toString()}`);
	};
	const goToSearch = (search: string) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set('search', search);

		navigation(`/products?${searchParams.toString()}`);
	};
	const goBack = () => navigation(-1);

	const goToLoginWithReplace = () => navigation('/login', { replace: true });

	return {
		goToHome,
		goToLogin,
		goToSignup,
		goToProducts,
		goToProductDetail,
		goToCategory,
		goToSearch,
		goBack,
		goToLoginWithReplace,
	};
};

export type NavigationHookType = ReturnType<typeof useNavigation>;
