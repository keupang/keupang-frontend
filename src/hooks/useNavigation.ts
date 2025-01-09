import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();

	const goToSignup = () => navigation('/signup');
	const goToHome = () => navigation('/');
	const goToLogin = () => navigation('/login');

	return { goToSignup, goToHome, goToLogin };
};

export type NavigationHookType = {
	goToSignup: () => void;
	goToHome: () => void;
	goToLogin: () => void;
};
