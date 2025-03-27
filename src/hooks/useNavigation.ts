import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();

	const goToSignup = () => navigation('/signup');
	const goToHome = () => navigation('/');
	const goToLogin = () => navigation('/login');
	const goToProducts = () => navigation('/products');

	return { goToSignup, goToHome, goToLogin, goToProducts };
};

export type NavigationHookType = {
	goToSignup: () => void;
	goToHome: () => void;
	goToLogin: () => void;
	goToProducts: () => void;
};
