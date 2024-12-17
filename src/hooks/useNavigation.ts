import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
	const navigation = useNavigate();

	const goToSignup = () => navigation('/signup');

	return { goToSignup };
};
