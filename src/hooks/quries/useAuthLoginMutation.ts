import { useErrorBoundary } from 'react-error-boundary';
import postAuthLogin, { LoginAuthData } from '@/apis/user/postAuthLogin';
import { useMutation } from '../useMutation';
import { HTTPError } from '@apis/HTTPError';
import { toast } from 'react-toastify';
import useAuth from '../useAuth';

const useAuthLoginMutation = () => {
	const { showBoundary } = useErrorBoundary();
	const { login: authLogin } = useAuth();

	const { mutate, isLoading, error } = useMutation({
		onSuccess: (data: any) => {
			authLogin(data.data.name, data.data.token);
			toast.success(data.content.detail);
		},
		onError: (error) => {
			if (error instanceof HTTPError) {
				toast.error(error.content?.help || '로그인에 실패했습니다.');
			} else {
				showBoundary(error);
			}
		},
	});

	const login = async (data: LoginAuthData) => {
		await mutate(() => postAuthLogin(data));
	};

	return { login, isLoginLoading: isLoading, error };
};

export default useAuthLoginMutation;
