import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleSignupSubmit } from '../handleSignupSubmit';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
	toast: {
		error: vi.fn(),
		success: vi.fn(),
	},
}));

describe('handleSignupSubmit > ', () => {
	const mockGoToHome = vi.fn();
	const mockMutateUserRegister = vi.fn();

	const mockData = {
		emailLocal: 'test',
		emailDomain: 'example.com',
		customEmailDomain: '',
		emailVerification: '123456', // 추가된 속성
		password: 'Test1234!',
		confirmPassword: 'Test1234!',
		name: 'Test User',
		phone: '01012345678',
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('회원가입 성공 시 성공 메시지를 표시하고 홈으로 이동해야 한다.', async () => {
		const isConfirmEmail = true;
		mockMutateUserRegister.mockResolvedValueOnce({ message: '회원가입 성공!' }); // 명확히 설정

		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			false,
			mockGoToHome,
			mockMutateUserRegister
		);

		await signupHandler(mockData);

		expect(mockMutateUserRegister).toHaveBeenCalledWith({
			userEmail: 'test@example.com',
			userPassword: 'Test1234!',
			userName: 'Test User',
			userPhone: '01012345678',
		});
		expect(mockGoToHome).toHaveBeenCalled(); // 홈으로 이동 확인
	});

	it('회원가입 실패 시 에러 메시지를 표시해야 한다.', async () => {
		const isConfirmEmail = true;

		mockMutateUserRegister.mockRejectedValueOnce({
			response: {
				data: {
					content: {
						detail: '회원가입 실패!',
						help: '올바른 정보를 입력해주세요.',
					},
				},
			},
		});

		const signupHandler = handleSignupSubmit(
			isConfirmEmail,
			false, // isCustomDomain
			mockGoToHome,
			mockMutateUserRegister
		);

		await signupHandler(mockData);

		expect(toast.error).toHaveBeenCalledWith('회원가입 실패!');
		expect(toast.error).toHaveBeenCalledWith('올바른 정보를 입력해주세요.');
		expect(mockGoToHome).not.toHaveBeenCalled();
	});
});
