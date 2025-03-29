import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();

	const goToHome = () => navigation('/');
	const goToLogin = () => navigation('/login');
	const goToSignup = () => navigation('/signup');
	const goToProducts = () => navigation('/products');
	const goToProductDetail = (id: number) => navigation(`/product/${id}`);
	const goToCategory = (category: string) =>
		navigation(`/products?category=${encodeURIComponent(category)}`);
	const goToSearch = (keyword: string) =>
		navigation(`/search?query=${encodeURIComponent(keyword)}`);
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
