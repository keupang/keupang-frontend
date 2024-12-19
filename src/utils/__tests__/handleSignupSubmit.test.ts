import { describe, it, expect, vi } from 'vitest';
import { handleSignupSubmit } from '../handleSignupSubmit';
import { toast } from 'react-toastify';
import { registerUser } from '../../apis/registerUser';
import { CustomDomainHookType } from '../../hooks/useCustomDomain';
import { NavigationHookType } from '../../hooks/useNavigation';

vi.mock('react-toastify', () => ({
	toast: {
		error: vi.fn(),
		success: vi.fn(),
	},
}));

vi.mock('../../apis/registerUser', () => ({
	registerUser: vi.fn(),
}));

describe('handleSignupSubmit > ', () => {
	const mockGoToHome: NavigationHookType['goToHome'] = vi.fn();
	const mockCustomDomainHook: CustomDomainHookType = {
		isCustomDomain: false,
		handleDomainChange: vi.fn(),
	};
	const mockData = {
		emailLocal: 'test',
		emailDomain: 'example.com',
		customEmailDomain: '',
		password: 'Test1234!',
		confirmPassword: 'Test1234!',
	};

	it('이메일 인증이 되지 않았을 경우 에러 메시지를 표시해야 한다.', async () => {
		const isConfirmEmail = false; // 이메일 인증 실패
		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			mockCustomDomainHook.isCustomDomain,
			mockGoToHome
		);

		await signupHandler(mockData);

		expect(toast.error).toHaveBeenCalledWith(
			'이메일 인증이 정상적으로 이루어지지 않았습니다.'
		);
		expect(registerUser).not.toHaveBeenCalled();
		expect(mockGoToHome).not.toHaveBeenCalled();
	});

	it('비밀번호와 확인 비밀번호가 일치하지 않을 경우 에러 메시지를 표시해야 한다.', async () => {
		const isConfirmEmail = true;
		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			mockCustomDomainHook.isCustomDomain,
			mockGoToHome
		);

		await signupHandler({ ...mockData, confirmPassword: 'WrongPassword!' });

		expect(toast.error).toHaveBeenCalledWith(
			'비밀번호와 비밀번호 확인이 일치하지 않습니다.'
		);
		expect(registerUser).not.toHaveBeenCalled();
		expect(mockGoToHome).not.toHaveBeenCalled();
	});

	it('회원가입 성공 시 성공 메시지를 표시하고 홈으로 이동해야 함', async () => {
		const isConfirmEmail = true;
		vi.mocked(registerUser).mockResolvedValueOnce({
			message: '회원가입 성공!',
		});

		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			mockCustomDomainHook.isCustomDomain,
			mockGoToHome
		);

		await signupHandler(mockData);

		expect(registerUser).toHaveBeenCalledWith({
			...mockData,
			email: 'test@example.com',
		});
		expect(toast.success).toHaveBeenCalledWith('회원가입 성공!');
		expect(mockGoToHome).toHaveBeenCalled();
	});

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('회원가입 실패 시 에러 메시지를 표시해야 함', async () => {
		const isConfirmEmail = true;

		vi.mocked(registerUser).mockRejectedValueOnce(new Error('회원가입 실패!'));

		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			mockCustomDomainHook.isCustomDomain,
			mockGoToHome
		);

		await signupHandler(mockData);

		expect(toast.error).toHaveBeenCalledWith('회원가입 실패!');

		expect(mockGoToHome).not.toHaveBeenCalled();
	});

	it('Custom Domain이 활성화된 경우 올바른 이메일 주소를 사용해야 함', async () => {
		const isConfirmEmail = true;
		const customDomainHook: CustomDomainHookType = {
			isCustomDomain: true,
			handleDomainChange: vi.fn(),
		};

		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			customDomainHook.isCustomDomain,
			mockGoToHome
		);
		const customDomainData = {
			...mockData,
			customEmailDomain: 'customdomain.com',
		};

		vi.mocked(registerUser).mockResolvedValueOnce({
			message: '회원가입 성공!',
		});

		await signupHandler(customDomainData);

		expect(registerUser).toHaveBeenCalledWith({
			...mockData,
			email: 'test@customdomain.com',
			customEmailDomain: 'customdomain.com',
		});
		expect(toast.success).toHaveBeenCalledWith('회원가입 성공!');
		expect(mockGoToHome).toHaveBeenCalled();
	});
});
