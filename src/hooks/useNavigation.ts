import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();

	const goToSignup = () => navigation('/signup');
	const goToHome = () => navigation('/');

	return { goToSignup, goToHome };
};

export type NavigationHookType = {
	goToSignup: () => void;
	goToHome: () => void;
};
