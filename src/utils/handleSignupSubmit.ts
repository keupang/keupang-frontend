import { SignupFormData } from '../components/SignupForm'; // 타입 정의를 분리했다고 가정
import { toast } from 'react-toastify';
import { registerUser } from '../apis/registerUser';
import { NavigationHookType } from '../hooks/useNavigation'; // useNavigation에서 반환되는 타입
import { CustomDomainHookType } from '../hooks/useCustomDomain'; // isCustomDomain 타입 정의

export const handleSignupSubmit =
	(
		isConfirmEmail: boolean,
		isCustomDomain: CustomDomainHookType,
		goToHome: NavigationHookType['goToHome']
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
			const response = await registerUser({ ...data, email });
			toast.success(response.message);
			goToHome();
		} catch (error: any) {
			toast.error(error.message);
			console.error('회원가입 실패:', error.message);
		}
	};
