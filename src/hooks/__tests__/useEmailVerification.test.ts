import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useEmailVerification } from '../useEmailVerification';
import {
	sendVerificationEmail,
	verifyEmailCode,
} from '../../apis/registerUser';
import { toast } from 'react-toastify';

vi.mock('../../apis/registerUser', () => ({
	sendVerificationEmail: vi.fn(),
	verifyEmailCode: vi.fn(),
}));

vi.mock('react-toastify', () => ({
	toast: {
		error: vi.fn(),
		success: vi.fn(),
	},
}));

describe('useEmailVerification 훅 테스트', () => {
	const mockSetIsTimerExpired = vi.fn();
	const mockSetTimeLeft = vi.fn();

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('초기 상태가 올바르게 설정되어야 함', () => {
		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		expect(result.current.showVerificationInput).toBe(false);
		expect(result.current.isConfirmEmail).toBe(false);
	});

	it('handleSendEmail 호출 시 성공적으로 이메일이 전송되어야 함', async () => {
		vi.mocked(sendVerificationEmail).mockResolvedValueOnce(undefined);

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleSendEmail('test@example.com');
		});

		expect(sendVerificationEmail).toHaveBeenCalledWith('test@example.com');
		expect(toast.success).toHaveBeenCalledWith('인증 이메일이 발송되었습니다.');
		expect(result.current.showVerificationInput).toBe(true);
		expect(mockSetIsTimerExpired).toHaveBeenCalledWith(false);
		expect(mockSetTimeLeft).toHaveBeenCalledWith(180);
	});

	it('handleSendEmail 호출 시 이미 인증된 경우 에러 메시지를 표시해야 함', async () => {
		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		// 인증 완료 상태로 설정
		act(() => {
			result.current.setIsConfirmEmail(true);
		});

		await act(async () => {
			await result.current.handleSendEmail('test@example.com');
		});
		console.log(result.current.isConfirmEmail);
		expect(toast.error).toHaveBeenCalledWith(
			'이미 이메일 인증을 진행하였습니다.'
		);
		expect(sendVerificationEmail).not.toHaveBeenCalled();
	});

	it('handleSendEmail 호출 시 실패하면 에러 메시지를 표시해야 함', async () => {
		vi.mocked(sendVerificationEmail).mockRejectedValueOnce(
			new Error('이메일 전송 실패!')
		);

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleSendEmail('test@example.com');
		});

		expect(toast.error).toHaveBeenCalledWith('이메일 전송 실패!');
		expect(result.current.showVerificationInput).toBe(false);
	});

	it('handleVerifyCode 호출 시 성공적으로 인증이 완료되어야 함', async () => {
		vi.mocked(verifyEmailCode).mockResolvedValueOnce(undefined);

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleVerifyCode('123456');
		});

		expect(verifyEmailCode).toHaveBeenCalledWith('123456');
		expect(toast.success).toHaveBeenCalledWith('이메일 인증이 완료되었습니다.');
		expect(result.current.isConfirmEmail).toBe(true);
	});

	it('handleVerifyCode 호출 시 실패하면 에러 메시지를 표시해야 함', async () => {
		vi.mocked(verifyEmailCode).mockRejectedValueOnce(
			new Error('코드 인증 실패!')
		);

		const { result } = renderHook(() =>
			useEmailVerification(mockSetIsTimerExpired, mockSetTimeLeft)
		);

		await act(async () => {
			await result.current.handleVerifyCode('123456');
		});

		expect(toast.error).toHaveBeenCalledWith('코드 인증 실패!');
		expect(result.current.isConfirmEmail).toBe(false);
	});
});
