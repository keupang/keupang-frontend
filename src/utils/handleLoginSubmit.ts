import { toast } from 'react-toastify';
import { NavigationHookType } from '../hooks/useNavigation';
import { LoginAuthData } from '@/apis/user/postAuthLogin';

export const handleLoginSubmit =
	(
		goToHome: NavigationHookType['goToHome'],
		mutateAuthLogin: (data: LoginAuthData) => Promise<unknown>
	) =>
	async (data: LoginAuthData) => {
		try {
			await mutateAuthLogin(data);
			goToHome();
		} catch (error: any) {
			toast.error(error.response.data.content.help);
		}
	};
