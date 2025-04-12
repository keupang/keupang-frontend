import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useEmailVerification } from '../useEmailVerification';
import { toast } from 'react-toastify';
import useAuthMailMutation from '@/hooks/quries/useAuthMailMutation';

vi.mock('react-toastify', () => ({
	toast: {
		error: vi.fn(),
		success: vi.fn(),
	},
}));

vi.mock('@/hooks/quries/useAuthMailMutation', () => ({
	__esModule: true,
	default: vi.fn(() => ({
		mutateAuthMail: vi.fn(),
		mutateAuthMailCode: vi.fn(),
		isSendingEmail: false,
		isVerifyingCode: false,
	})),
}));

describe('useEmailVerification > ', () => {
	let mockSetIsTimerExpired: ReturnType<typeof vi.fn>;
	let mockSetTimeLeft: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		vi.clearAllMocks();

		// Mock 함수 초기화
		mockSetIsTimerExpired = vi.fn();
		mockSetTimeLeft = vi.fn();
	});

	it('초기 상태가 올바르게 설정되어야 한다.', () => {
		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		expect(result.current.showVerificationInput).toBe(false);
		expect(result.current.isConfirmEmail).toBe(false);
	});

	it('handleSendEmail 호출 시 성공적으로 이메일이 전송되어야 한다.', async () => {
		const mockMutateAuthMail = vi.fn().mockResolvedValue(undefined);
		vi.mocked(useAuthMailMutation).mockReturnValue({
			mutateAuthMail: mockMutateAuthMail,
			mutateAuthMailCode: vi.fn(),
			isSendingEmail: false,
			isVerifyingCode: false,
		});

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleSendEmail('test@example.com');
		});

		expect(mockMutateAuthMail).toHaveBeenCalledWith('test@example.com');
		expect(toast.success).not.toHaveBeenCalled(); // 성공 메시지 표시가 없다면 확인
		expect(result.current.showVerificationInput).toBe(true);
		expect(mockSetIsTimerExpired).toHaveBeenCalledWith(false);
		expect(mockSetTimeLeft).toHaveBeenCalledWith(180);
	});

	it('handleSendEmail 호출 시 실패하면 에러 메시지를 표시해야 한다.', async () => {
		const mockMutateAuthMail = vi.fn().mockRejectedValue({
			response: { data: { content: { detail: '이메일 전송 실패!' } } },
		});
		vi.mocked(useAuthMailMutation).mockReturnValue({
			mutateAuthMail: mockMutateAuthMail,
			mutateAuthMailCode: vi.fn(),
			isSendingEmail: false,
			isVerifyingCode: false,
		});

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleSendEmail('test@example.com');
		});

		expect(toast.error).toHaveBeenCalledWith('이메일 전송 실패!');
		expect(result.current.showVerificationInput).toBe(false);
	});

	it('handleVerifyCode 호출 시 성공적으로 인증이 완료되어야 한다.', async () => {
		const mockMutateAuthMailCode = vi.fn().mockResolvedValue(undefined);
		vi.mocked(useAuthMailMutation).mockReturnValue({
			mutateAuthMail: vi.fn(),
			mutateAuthMailCode: mockMutateAuthMailCode,
			isSendingEmail: false,
			isVerifyingCode: false,
		});

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleVerifyCode('test@example.com', '123456');
		});

		expect(mockMutateAuthMailCode).toHaveBeenCalledWith(
			'test@example.com',
			'123456'
		);
		expect(result.current.isConfirmEmail).toBe(true);
	});

	it('handleVerifyCode 호출 시 실패하면 에러 메시지를 표시해야 한다.', async () => {
		const mockMutateAuthMailCode = vi.fn().mockRejectedValue({
			response: { data: { content: { detail: '코드 인증 실패!' } } },
		});
		vi.mocked(useAuthMailMutation).mockReturnValue({
			mutateAuthMail: vi.fn(),
			mutateAuthMailCode: mockMutateAuthMailCode,
			isSendingEmail: false,
			isVerifyingCode: false,
		});

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleVerifyCode('test@example.com', '123456');
		});

		expect(toast.error).toHaveBeenCalledWith('코드 인증 실패!');
		expect(result.current.isConfirmEmail).toBe(false);
	});
});
