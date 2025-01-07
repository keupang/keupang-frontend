import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuthMailMutation from './quries/useAuthMailMutation';

export const useEmailVerification = (
	setIsTimerExpired: (state: boolean) => void,
	setTimeLeft: (seconds: number) => void
) => {
	const [showVerificationInput, setShowVerificationInput] = useState(false);
	const [isConfirmEmail, setIsConfirmEmail] = useState(false);
	const {
		mutateAuthMail,
		mutateAuthMailCode,
		isSendingEmail,
		isVerifyingCode,
	} = useAuthMailMutation();

	const handleSendEmail = async (email: string) => {
		if (isConfirmEmail) {
			toast.error('이미 이메일 인증을 진행하였습니다.');
			return;
		}
		try {
			await mutateAuthMail(email);
			setShowVerificationInput(true);
			setIsTimerExpired(false);
			setTimeLeft(180);
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	const handleVerifyCode = async (email: string, code: string) => {
		try {
			await mutateAuthMailCode(email, code);
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
		isSendingEmail,
		isVerifyingCode,
	};
};
