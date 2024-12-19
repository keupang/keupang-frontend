import { useState } from 'react';
import { sendVerificationEmail, verifyEmailCode } from '../apis/registerUser';
import { toast } from 'react-toastify';

export const useEmailVerification = (
	setIsTimerExpired: (state: boolean) => void,
	setTimeLeft: (seconds: number) => void
) => {
	const [showVerificationInput, setShowVerificationInput] = useState(false);
	const [isConfirmEmail, setIsConfirmEmail] = useState(false);

	const handleSendEmail = async (email: string) => {
		if (isConfirmEmail) {
			toast.error('이미 이메일 인증을 진행하였습니다.');
			return;
		}
		try {
			await sendVerificationEmail(email);
			toast.success('인증 이메일이 발송되었습니다.');
			setShowVerificationInput(true);
			setIsTimerExpired(false);
			setTimeLeft(180);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	const handleVerifyCode = async (code: string) => {
		try {
			await verifyEmailCode(code);
			toast.success('이메일 인증이 완료되었습니다.');
			setIsConfirmEmail(true);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return {
		showVerificationInput,
		isConfirmEmail,
		handleSendEmail,
		handleVerifyCode,
	};
};
