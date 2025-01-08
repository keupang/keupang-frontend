import { SignupFormData } from '../components/SignupForm';
import { toast } from 'react-toastify';
import { NavigationHookType } from '../hooks/useNavigation';
import { CustomDomainHookType } from '../hooks/useCustomDomain';
import { RegisterUserData } from '@/apis/user/postUserRegister';

export const handleSignupSubmit =
	(
		isConfirmEmail: boolean,
		isCustomDomain: CustomDomainHookType['isCustomDomain'],
		goToHome: NavigationHookType['goToHome'],
		mutateUserRegister: (data: RegisterUserData) => Promise<unknown>
	) =>
	async (data: SignupFormData) => {
		if (!isConfirmEmail) {
			toast.error('이메일 인증이 정상적으로 이루어지지 않았습니다.');
			return;
		}

		if (data.password !== data.confirmPassword) {
			toast.error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
			return;
		}

		try {
			const email = `${data.emailLocal}@${isCustomDomain ? data.customEmailDomain : data.emailDomain}`;
			const userData = {
				userEmail: email,
				userPassword: data.password,
				userName: data.name,
				userPhone: data.phone,
			};
			await mutateUserRegister(userData);
			goToHome();
		} catch (error: any) {
			toast.error(error.response.data.content.detail);
			toast.error(error.response.data.content.help);
		}
	};
