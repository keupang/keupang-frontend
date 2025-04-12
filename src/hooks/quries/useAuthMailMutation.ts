import { useErrorBoundary } from 'react-error-boundary';
import postAuthMail from '@/apis/user/postAuthEmail';
import postAuthEmailCode from '@/apis/user/postAuthEmailCode';
import { useMutation } from '../auth/useMutation';
import { HTTPError } from '@apis/HTTPError';
import { toast } from 'react-toastify';

const useAuthMailMutation = () => {
	const { showBoundary } = useErrorBoundary();

	const handleAuthMailError = (error: Error) => {
		if (error instanceof HTTPError) {
			toast.error('인증 메일 전송을 실패했습니다. 다시 시도해주세요');
		} else {
			showBoundary(error);
		}
	};

	const handleAuthCodeError = (error: Error) => {
		if (error instanceof HTTPError) {
			toast.error('인증 번호 확인을 실패했습니다. 인증번호를 확인해주세요.');
		} else {
			showBoundary(error);
		}
	};

	const { mutate: sendEmail, isLoading: isSendingEmail } = useMutation<void>({
		onSuccess: () => toast.success('인증 메일을 보냈습니다'),
		onError: handleAuthMailError,
	});

	const { mutate: verifyCode, isLoading: isVerifyingCode } = useMutation<void>({
		onSuccess: () => toast.success('인증 번호 확인이 완료되었습니다'),
		onError: handleAuthCodeError,
	});

	const mutateAuthMail = async (email: string): Promise<void> => {
		await sendEmail(() => postAuthMail(email));
	};

	const mutateAuthMailCode = async (
		email: string,
		code: string
	): Promise<void> => {
		await verifyCode(() => postAuthEmailCode(email, code));
	};

	return {
		mutateAuthMail,
		mutateAuthMailCode,
		isSendingEmail,
		isVerifyingCode,
	};
};

export default useAuthMailMutation;
